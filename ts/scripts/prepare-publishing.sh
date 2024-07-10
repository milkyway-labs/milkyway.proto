#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
PKG_DIR="$SCRIPT_DIR/.."

DIRS=(amino cosmos cosmos_proto gogoproto google milkyway stride tendermint)
FILES=()

for dir in "${DIRS[@]}"; do
  rm -rf "${PKG_DIR:?}/$dir"
  cp -R "${PKG_DIR}/build/$dir" "${PKG_DIR:?}/."
done

for f in "${FILES[@]}"; do
  rm -rf "${PKG_DIR:?}/$f"
  cp "${PKG_DIR}/build/$f" "${PKG_DIR:?}/."
done
