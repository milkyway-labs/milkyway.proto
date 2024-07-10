#!/usr/bin/env bash

# How to run manually:
# docker build --pull --rm -f "contrib/devtools/Dockerfile" -t cosmossdk-proto:latest "contrib/devtools"
# docker run --rm -v $(pwd):/workspace --workdir /workspace cosmossdk-proto sh ./scripts/protocgen.sh

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")

generate_proto() {
  package="$1"
  proto_dirs=$(find $package -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
  for dir in $proto_dirs; do
    for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
      # this regex checks if a proto file has its go_package set to cosmossdk.io/api/...
      # gogo proto files SHOULD ONLY be generated if this is false
      # we don't want gogo proto to run for proto files which are natively built for google.golang.org/protobuf
      if grep -q "option go_package" "$file" && grep -H -o -c 'option go_package.*cosmossdk.io/api' "$file" | grep -q ':0$'; then
        buf generate --template buf.gen.ts.yaml $file
      fi
    done
  done
}

echo "Remove old files"
# Remove all the folders from previous runs in the ts directory
find "$SCRIPT_DIR/../src" -mindepth 1 -exec rm -rf {} +

echo "Generating typescript code"
pushd "$SCRIPT_DIR/../../proto" > /dev/null

generate_proto "./milkyway"
generate_proto "./stride"

popd > /dev/null
