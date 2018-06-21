# tsify Inferno sample

A TypeScript Inferno JSX example building with browserify/tsify,
including tree-shaking and minification.
Also includes an example of [development server](#debugging)
with source maps and hot reload.

Based on [inferno-typescript-example](https://github.com/infernojs/inferno-typescript-example/)
and [tsify React sample](https://github.com/TypeStrong/tsify/tree/master/examples/jsx).

## How it works
Typescript is [configured](./tsconfig) to transpile JSX within `.tsx` files
to plain JS with [createElement](https://www.npmjs.com/package/inferno-create-element).

The JSX factory is [defined locally at the top of each `.tsx` file](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/JSX.md#factory-functions).

## Building
```sh
npm install
npm run build
```
[browserify](https://www.npmjs.com/package/browserify) configuration:
* `process.env` constants with [envify](https://www.npmjs.com/package/envify)
* tree-shaking with [common-shakeify](https://www.npmjs.com/package/common-shakeify)
* minified bundle names with [bundle-collapser](https://www.npmjs.com/package/bundle-collapser)

the bundled output from browserify is minified with [uglify-es](https://www.npmjs.com/package/uglify-es):
gzipped, this example fits in **13k bytes**.

## Running
```sh
npm start
```

## Debugging
based on [budo](https://www.npmjs.com/package/budo) with source maps and hot reload.
```sh
npm run debug
```

## License
MIT

## Attributions
* Greg Smith [smrq](http://github.com/smrq) et al. for [tsify React sample](https://github.com/TypeStrong/tsify/tree/master/examples/jsx).
* Dominic Gannaway [trueadm](http://github.com/trueadm) et al. for [inferno-typescript-example](https://github.com/infernojs/inferno-typescript-example/).
