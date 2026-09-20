#!/usr/bin/env python3
"""Compose aligned studio mockups. No rotation, no duplicate crops."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "public/portfolio/raw"
APPS = ROOT / "public/portfolio/apps"
OUT = ROOT / "public/portfolio/mockups"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1600, 1000
BG = (9, 9, 13)
PAD = 72
GUTTER = 28


def load(path: Path) -> Image.Image:
    return Image.open(path).convert("RGBA")


def rounded(im: Image.Image, radius: int) -> Image.Image:
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *im.size), radius=radius, fill=255)
    out = im.copy()
    out.putalpha(mask)
    return out


def shadow(im: Image.Image, blur: int = 22, offset: tuple[int, int] = (0, 14), opacity: int = 140) -> Image.Image:
    pad = blur * 2 + abs(offset[1]) + 8
    canvas = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    alpha = im.split()[-1]
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sh.putalpha(alpha.point(lambda p: int(opacity * p / 255)))
    canvas.paste(sh, (pad + offset[0], pad + offset[1]), sh)
    canvas = canvas.filter(ImageFilter.GaussianBlur(blur))
    canvas.alpha_composite(im, (pad, pad))
    return canvas


def orb(canvas: Image.Image, xy: tuple[int, int], r: int, color: tuple[int, int, int], alpha: int) -> None:
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = xy
    d.ellipse((x - r, y - r, x + r, y + r), fill=(*color, alpha))
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(int(r * 0.55))))


def studio_bg() -> Image.Image:
    canvas = Image.new("RGBA", (W, H), (*BG, 255))
    orb(canvas, (80, 80), 420, (226, 58, 140), 58)
    orb(canvas, (1480, -40), 460, (79, 107, 255), 52)
    orb(canvas, (900, 980), 380, (124, 58, 237), 46)
    return canvas


def fit_cover(im: Image.Image, box: tuple[int, int], top: bool = True) -> Image.Image:
    tw, th = box
    src = im.convert("RGBA")
    sw, sh = src.size
    scale = max(tw / sw, th / sh)
    nw, nh = max(1, int(sw * scale)), max(1, int(sh * scale))
    src = src.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top_off = 0 if top else (nh - th) // 2
    return src.crop((left, top_off, left + tw, top_off + th))


def tile(im: Image.Image, size: tuple[int, int], radius: int = 24, top: bool = True) -> Image.Image:
    return rounded(fit_cover(im, size, top=top), radius)


def paste_at(base: Image.Image, piece: Image.Image, xy: tuple[int, int], blur: int = 22, offset: tuple[int, int] = (0, 14)) -> None:
    framed = shadow(piece, blur=blur, offset=offset)
    pad = blur * 2 + abs(offset[1]) + 8
    base.alpha_composite(framed, (xy[0] - pad, xy[1] - pad))


def save(canvas: Image.Image, slug: str) -> None:
    canvas.convert("RGB").save(OUT / f"{slug}.png", quality=92, optimize=True)
    print(f"wrote mockups/{slug}.png")


def existing(paths: list[Path]) -> list[Path]:
    return [p for p in paths if p.exists() and p.stat().st_size > 12000]


def chrome(shot: Image.Image, inner: tuple[int, int]) -> Image.Image:
    chrome_h = 36
    pad = 10
    iw, ih = inner
    fw, fh = iw + pad * 2, ih + chrome_h + pad
    frame = Image.new("RGBA", (fw, fh), (18, 18, 24, 255))
    frame = rounded(frame, 18)
    d = ImageDraw.Draw(frame)
    d.ellipse((16, 13, 26, 23), fill=(255, 95, 87, 255))
    d.ellipse((34, 13, 44, 23), fill=(255, 189, 46, 255))
    d.ellipse((52, 13, 62, 23), fill=(39, 201, 63, 255))
    content = rounded(fit_cover(shot, (iw, ih), top=True), 8)
    frame.alpha_composite(content, (pad, chrome_h))
    return frame


def mixed_layout(slug: str, site: Path, splash: Path) -> None:
    if not site.exists() or not splash.exists():
        print(f"skip mixed {slug}")
        return
    canvas = studio_bg()
    inner_w, inner_h = W - PAD * 2, H - PAD * 2
    poster_h = inner_h
    poster_w = int(poster_h * 9 / 19.5)
    browser_w = inner_w - GUTTER - poster_w
    paste_at(canvas, chrome(load(site), (browser_w - 8, inner_h - 44)), (PAD, PAD), blur=18, offset=(0, 10))
    paste_at(canvas, tile(load(splash), (poster_w, poster_h), 26, top=True), (PAD + browser_w + GUTTER, PAD), blur=18, offset=(0, 12))
    save(canvas, slug)


def app_row(slug: str, shots: list[Path]) -> None:
    usable = existing(shots)[:3]
    if not usable:
        print(f"skip app {slug}")
        return
    canvas = studio_bg()
    n = len(usable)
    first = load(usable[0])
    landscape = first.width >= first.height

    if n == 1 and landscape:
        inner_w, inner_h = W - PAD * 2, H - PAD * 2
        paste_at(canvas, tile(first, (inner_w, inner_h), 28, top=False), (PAD, PAD), blur=18, offset=(0, 12))
        save(canvas, slug)
        return

    card_h = H - PAD * 2
    card_w = int(card_h * 9 / 19.5)
    total = n * card_w + (n - 1) * GUTTER
    x0 = (W - total) // 2
    for i, path in enumerate(usable):
        paste_at(canvas, tile(load(path), (card_w, card_h), 26, top=True), (x0 + i * (card_w + GUTTER), PAD), blur=18, offset=(0, 12))
    save(canvas, slug)


def web_layout(slug: str, shots: list[Path]) -> None:
    usable = existing(shots)
    if not usable:
        print(f"skip web {slug}")
        return
    images = [load(p) for p in usable]
    canvas = studio_bg()
    inner_w = W - PAD * 2
    inner_h = H - PAD * 2

    if len(images) == 1:
        paste_at(canvas, chrome(images[0], (inner_w - 8, inner_h - 44)), (PAD, PAD), blur=20, offset=(0, 12))
        save(canvas, slug)
        return

    if len(images) == 2:
        fw = (inner_w - GUTTER) // 2
        fh = inner_h
        for i, im in enumerate(images[:2]):
            paste_at(canvas, chrome(im, (fw - 8, fh - 44)), (PAD + i * (fw + GUTTER), PAD), blur=18, offset=(0, 10))
        save(canvas, slug)
        return

    large_w = int((inner_w - GUTTER) * 0.62)
    small_w = inner_w - GUTTER - large_w
    small_h = (inner_h - GUTTER) // 2
    paste_at(canvas, chrome(images[0], (large_w - 8, inner_h - 44)), (PAD, PAD), blur=18, offset=(0, 10))
    paste_at(canvas, chrome(images[1], (small_w - 8, small_h - 44)), (PAD + large_w + GUTTER, PAD), blur=16, offset=(0, 8))
    paste_at(canvas, chrome(images[2], (small_w - 8, small_h - 44)), (PAD + large_w + GUTTER, PAD + small_h + GUTTER), blur=16, offset=(0, 8))
    save(canvas, slug)


def main() -> None:
    web = {
        "rnpl": ["rnpl.png", "rnpl-2.png", "rnpl-products.png"],
        "coldwell-banker-caribe": ["coldwell-banker-caribe.png", "coldwell-team.png"],
        "petalstills": ["petalstills.png"],
        "naia": ["naia.png"],
        "safyn": ["safyn.png", "safyn-2.png", "safyn-story.png"],
        "fairways-mulligans": ["fairways-mulligans.png"],
        "barkery": ["barkery.png"],
        "seryni": ["seryni.png"],
        "slime-by-maryam": ["slime-by-maryam.png"],
        "e-commerce-platform": ["e-commerce-platform.png"],
        "albegrik": ["albegrik.png"],
        "everfur": ["everfur.png", "everfur-2.png", "everfur-vet.png"],
        "the-troy-agency": ["the-troy-agency.png", "troy-agency-story.png"],
        "skoop": ["skoop.png", "skoop-2.png", "skoop-steps.png"],
    }
    for slug, files in web.items():
        web_layout(slug, [RAW / name for name in files])

    mixed_layout("plah", RAW / "plah.png", APPS / "plah-1.jpg")
    mixed_layout("yourszn", RAW / "yourszn.png", APPS / "yourszn-1.jpg")
    mixed_layout("spice-marriage", RAW / "spice-marriage.png", APPS / "spice-1.jpg")
    mixed_layout("everfur", RAW / "everfur.png", APPS / "everfur-1.jpg")
    app_row("amped", [APPS / "amped-1.jpg", APPS / "amped-2.jpg", APPS / "amped-3.jpg"])
    app_row("biker-connect", [APPS / "biker-1.png"])


if __name__ == "__main__":
    main()
