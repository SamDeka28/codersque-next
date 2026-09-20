#!/usr/bin/env python3
"""Download App Store and Play Store listing screenshots."""

from __future__ import annotations

import json
import re
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APPS = ROOT / "public/portfolio/apps"
APPS.mkdir(parents=True, exist_ok=True)

CTX = ssl.create_default_context()
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as res:
        return res.read()


def save(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(get(url))
    print(f"  wrote {dest.name} ({dest.stat().st_size} bytes)")


def itunes(app_id: str, prefix: str, limit: int = 6) -> None:
    print(f"iTunes {prefix} ({app_id})")
    payload = json.loads(get(f"https://itunes.apple.com/lookup?id={app_id}"))
    results = payload.get("results") or []
    if not results:
        print("  no results")
        return
    urls = (results[0].get("screenshotUrls") or [])[:limit]
    for i, url in enumerate(urls, start=1):
        # Lookup thumbs are 320x480. Request a large mzstatic derivative instead.
        hi = url.rsplit("/", 1)[0] + "/2000x2000bb.jpg"
        save(hi, APPS / f"{prefix}-{i}.jpg")


def play(package: str, prefix: str, limit: int = 6) -> None:
    print(f"Play {prefix} ({package})")
    html = get(f"https://play.google.com/store/apps/details?id={package}&hl=en").decode("utf-8", "ignore")
    urls = []
    for match in re.finditer(r"(https://play-lh\.googleusercontent\.com/[^\"'\\s]+)", html):
        url = match.group(1).split("=")[0]
        if url not in urls:
            urls.append(url)
    # Listing screenshots are typically the larger assets; skip tiny icons.
    picked = urls[: limit + 8]
    saved = 0
    for url in picked:
        if saved >= limit:
            break
        dest = APPS / f"{prefix}-{saved + 1}.png"
        try:
            save(url + "=w720", dest)
            if dest.stat().st_size < 8000:
                dest.unlink(missing_ok=True)
                continue
            saved += 1
        except Exception as exc:
            print(f"  skip {url}: {exc}")


def main() -> None:
    itunes("6771676470", "yourszn")
    itunes("6755757284", "plah")
    itunes("6748860588", "amped")
    itunes("6469296386", "spice")
    itunes("6763074878", "everfur")
    play("app.bikerconnect", "biker")
    play("com.yourszn.app", "yourszn-play")
    play("com.plahdate.app", "plah-play")


if __name__ == "__main__":
    main()
