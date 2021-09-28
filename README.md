# sdk-ts
Lightweight example for computing tx hash before sending it for ts/js

1. Install modules
```
npm i -g protoc-gen-ts
npm i
```

2. Modify ts plugin `protoc-gen-ts` path to yours and generate proto
```
./protocgen.sh
```

3. Demo
```
# start injectived
cd injective-core && git checkout dev && git pull
./setup.sh
injectived start --trace --log-level=warn

# run send.js
node src/send.js
```
