#!/usr/bin/env bash
set -euo pipefail

# Static portfolio site — verify required artifacts are present after checkout.
required_files=(
  index.html
  Kolla_Rakesh.pdf
  Kolla_Rakesh.docx
  find-resume-links.js
  update-resume-link.js
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required file: $file" >&2
    exit 1
  fi
done

echo "Portfolio artifacts verified."
