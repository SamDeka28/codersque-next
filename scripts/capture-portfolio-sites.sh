#!/bin/zsh
set -euo pipefail
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="public/portfolio/raw"
mkdir -p "$OUT"

capture() {
  local slug="$1"
  local url="$2"
  local w="${3:-1440}"
  local h="${4:-900}"
  echo "Capturing $slug -> $url"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-first-run --no-default-browser-check \
    --window-size="$w,$h" --virtual-time-budget=12000 \
    --screenshot="$OUT/${slug}.png" "$url" >/tmp/csq-chrome-$slug.log 2>&1 || true
  if [ -f "$OUT/${slug}.png" ]; then
    echo "  ok $(wc -c < "$OUT/${slug}.png") bytes"
  else
    echo "  FAILED $slug"
  fi
}

capture spice-marriage "https://spicemarriage.com/"
capture plah "https://plahplaydates.com/"
capture yourszn "https://www.yourszn.com.au/"
capture rnpl "https://rnplcredit.com/"
capture coldwell-banker-caribe "https://coldwellbankercaribe.com/"
capture recruit-net "https://india.recruit.net/"
capture petalstills "https://www.petalstills.com/"
capture naia "https://naia.shop/"
capture safyn "https://safyn.com/"
capture fairways-mulligans "https://fairwaysandmulligansgolf.com/"
capture barkery "https://sgbarkery.com/"
capture seryni "https://seryni.com/"
capture slime-by-maryam "https://slimebymaryam.com/"
capture biker-connect "https://play.google.com/store/apps/details?id=app.bikerconnect&hl=en_IN"
capture amped "https://apps.apple.com/in/app/amped-lifespan-tracker/id6748860588"

echo "Done."
ls -lh "$OUT"
