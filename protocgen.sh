EXCHANGE_PROTO_FILES=$(find ../injective-exchange/api/gen/grpc -type f -name '*.proto')
PROTO_DIRS=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)

# copy proto files
rm -rf src/proto
mkdir -p proto/exchange
cp -r ../injective-core/proto/injective proto/
cp -r ../injective-core/third_party/proto/ proto/

for file in $EXCHANGE_PROTO_FILES; do
  cp "${file}" proto/exchange/;
done

# gen
mkdir src/proto
proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
    protoc \
    -I "proto" \
    --plugin="protoc-gen-ts=/Users/nam/node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:src/proto" \
    --ts_out="service=grpc-web:src/proto" \
    $(find "${dir}" -maxdepth 1 -name '*.proto')
done

# clean up
rm -rf proto
