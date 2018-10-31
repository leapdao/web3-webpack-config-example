# Web3 webpack config

How to save ≈350Kb (≈50Kb gzipped):

1. Dedupe `bn.js`
2. Exclude unused modules from bundle (we're not using ENS, IPC and WS providers)
3. ???
4. PROFIT

```
TomatoBook:web3-webpack-config sunify$ yarn build
yarn run v1.7.0
$ node build.js
You saved 340KB
✨  Done in 3.77s.
```