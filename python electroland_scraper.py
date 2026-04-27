"""
Electroland Ghana — Product Scraper & Image Downloader
=======================================================
This script fetches all products from electrolandgh.com's public API,
saves them as a CSV and JSON file, and downloads all product images.

HOW TO RUN:
  1. Open a terminal (Command Prompt or PowerShell on Windows)
  2. Install the required library:
         pip install requests
  3. Run the script:
         python electroland_scraper.py

OUTPUT FILES (saved in the same folder as this script):
  - electroland_products.csv   → Open in Excel / Google Sheets / import to your website
  - electroland_products.json  → Use with any website builder / CMS
  - electroland_images/        → Folder containing all product images
"""

import os
import csv
import json
import time
import re
import requests
from pathlib import Path

# ── Config ───────────────────────────────────────────────────────────────────
BASE_URL      = "https://electrolandgh.com/wp-json/wp/v2/product"
PER_PAGE      = 100
OUTPUT_CSV    = "electroland_products.csv"
OUTPUT_JSON   = "electroland_products.json"
IMAGE_DIR     = "electroland_images"
REQUEST_DELAY = 0.3   # seconds between requests (polite scraping)
TIMEOUT       = 20    # seconds per request
# ─────────────────────────────────────────────────────────────────────────────


def strip_html(text: str) -> str:
    """Remove HTML tags and decode basic entities."""
    text = re.sub(r'<[^>]+>', '', text or '')
    text = text.replace('&amp;', '&').replace('&nbsp;', ' ')
    text = text.replace('&#8221;', '"').replace('&#8243;', '"')
    text = text.replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
    return ' '.join(text.split()).strip()


def fetch_all_products(session: requests.Session) -> list:
    """Fetch every product page from the WP REST API."""
    products = []

    # Get total count first
    r = session.get(BASE_URL, params={"per_page": 1}, timeout=TIMEOUT)
    r.raise_for_status()
    total      = int(r.headers.get("X-WP-Total", 0))
    total_pages = int(r.headers.get("X-WP-TotalPages", 1))
    print(f"Found {total} products across {total_pages} pages\n")

    for page in range(1, total_pages + 1):
        params = {"per_page": PER_PAGE, "page": page, "_embed": "true"}
        print(f"  Fetching page {page}/{total_pages}...", end=" ", flush=True)
        r = session.get(BASE_URL, params=params, timeout=TIMEOUT)
        r.raise_for_status()
        data = r.json()

        for p in data:
            # Image
            image_url      = ""
            image_filename = ""
            media = p.get("_embedded", {}).get("wp:featuredmedia", [{}])
            if media and isinstance(media[0], dict):
                image_url      = media[0].get("source_url", "")
                image_filename = image_url.split("/")[-1] if image_url else ""

            # Taxonomy terms
            all_terms  = []
            for term_group in p.get("_embedded", {}).get("wp:term", []):
                all_terms.extend(term_group)

            categories = [t["name"] for t in all_terms if t.get("taxonomy") == "product_cat"]
            brands     = [t["name"] for t in all_terms if t.get("taxonomy") == "product_brand"]
            tags       = [t["name"] for t in all_terms if t.get("taxonomy") == "product_tag"]

            products.append({
                "id":                p.get("id"),
                "title":             strip_html(p.get("title", {}).get("rendered", "")),
                "slug":              p.get("slug", ""),
                "url":               p.get("link", ""),
                "categories":        "; ".join(categories),
                "brands":            "; ".join(brands),
                "tags":              "; ".join(tags),
                "image_url":         image_url,
                "image_filename":    image_filename,
                "short_description": strip_html(p.get("excerpt", {}).get("rendered", "")),
                "description":       strip_html(p.get("content", {}).get("rendered", "")),
            })

        print(f"OK ({len(data)} products)")
        time.sleep(REQUEST_DELAY)

    # Deduplicate by ID (some pages may overlap)
    seen = set()
    unique = []
    for p in products:
        if p["id"] not in seen:
            seen.add(p["id"])
            unique.append(p)

    print(f"\nTotal unique products: {len(unique)}")
    return unique


def save_csv(products: list, path: str):
    fields = [
        "id", "title", "slug", "url",
        "categories", "brands", "tags",
        "image_url", "image_filename",
        "short_description", "description",
    ]
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(products)
    print(f"Saved CSV  → {path}  ({len(products)} rows)")


def save_json(products: list, path: str):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=2)
    print(f"Saved JSON → {path}  ({len(products)} products)")


def download_images(products: list, image_dir: str, session: requests.Session):
    out = Path(image_dir)
    out.mkdir(exist_ok=True)

    with_img = [p for p in products if p.get("image_url")]
    print(f"\nDownloading {len(with_img)} images → {out.resolve()}\n")

    ok = skipped = failed = 0

    for i, p in enumerate(with_img, 1):
        img_url  = p["image_url"]
        filename = p["image_filename"] or img_url.split("/")[-1]
        dest     = out / filename

        if dest.exists() and dest.stat().st_size > 0:
            print(f"[{i:>4}/{len(with_img)}] SKIP  {filename}")
            skipped += 1
            continue

        try:
            resp = session.get(img_url, timeout=TIMEOUT, stream=True)
            resp.raise_for_status()
            with open(dest, "wb") as f:
                for chunk in resp.iter_content(8192):
                    f.write(chunk)
            size_kb = dest.stat().st_size / 1024
            print(f"[{i:>4}/{len(with_img)}] OK    {filename}  ({size_kb:.1f} KB)")
            ok += 1
        except Exception as e:
            print(f"[{i:>4}/{len(with_img)}] FAIL  {filename}  — {e}")
            failed += 1

        time.sleep(REQUEST_DELAY)

    print(f"\n{'='*55}")
    print(f"Images downloaded : {ok}")
    print(f"Already existed   : {skipped}")
    print(f"Failed            : {failed}")
    print(f"Saved to          : {out.resolve()}")


def main():
    print("=" * 55)
    print("  Electroland Ghana — Product Scraper & Image Downloader")
    print("=" * 55)
    print()

    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; EGL-Outlet/1.0)"
    })

    # 1. Fetch all products
    print("STEP 1: Fetching product data from API...")
    products = fetch_all_products(session)

    # 2. Save CSV
    print("\nSTEP 2: Saving files...")
    save_csv(products, OUTPUT_CSV)
    save_json(products, OUTPUT_JSON)

    # 3. Download images
    print("\nSTEP 3: Downloading product images...")
    download_images(products, IMAGE_DIR, session)

    print("\nAll done! 🎉")
    print(f"  CSV  → {OUTPUT_CSV}")
    print(f"  JSON → {OUTPUT_JSON}")
    print(f"  Imgs → {IMAGE_DIR}/")


if __name__ == "__main__":
    main()