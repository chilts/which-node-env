# Which Node Env? #

An easy way to get some booleans like `isDev`, `isTest`, `isStage` or `isProd`.

# Synopsis #

```js
// simple.js
const nodeEnv = require('which-node-env')
console.log(nodeEnv)
```

If you run the above program as follows, you get:

```
$ NODE_ENV=dev node simple.js
{
  nodeEnv: 'dev',
  isDev: true,
  isTest: false,
  isStage: false,
  isProd: false,
  isUnknown: false
}
```

You might only be interested in some of these vars:

```
const { isDev, isTest, isProd } = require('which-node-env')

if (isDev) {
  console.log("Dev")
}
if (isTest) {
  console.log("Test")
}
if (isProd) {
  console.log("Prod")
}

```

That's all folks!

## About ##

```
$ npx chilts

   ╒════════════════════════════════════════════════════╕
   │                                                    │
   │   Andrew Chilton (Personal)                        │
   │   -------------------------                        │
   │                                                    │
   │          Email : andychilton@gmail.com             │
   │            Web : https://chilts.org                │
   │        Twitter : https://twitter.com/andychilton   │
   │         GitHub : https://github.com/chilts         │
   │                                                    │
   │   Apps Attic Ltd (My Company)                      │
   │   ---------------------------                      │
   │                                                    │
   │          Email : chilts@appsattic.com              │
   │            Web : https://appsattic.com             │
   │        Twitter : https://twitter.com/AppsAttic     │
   │         GitHub : https://github.com/appsattic      │
   │                                                    │
   │   Node.js / npm                                    │
   │   -------------                                    │
   │                                                    │
   │        Profile : https://www.npmjs.com/~chilts     │
   │           Card : $ npx chilts                      │
   │                                                    │
   ╘════════════════════════════════════════════════════╛
```

(Ends)
