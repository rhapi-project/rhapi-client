#!/bin/bash
#
#
# rhapi-client-es7.js => rhapi-client.js => rhapi-client-browser.js
# ------------------------------------------------------------------
# rhapi-client-es7.js     : es7/es2016/2017(dev)
# rhapi-client.js         : es5
# rhapi-client-browser.js : es5 (browser)

# babel-preset-env : 
# ------------------
# A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel 
# plugins and polyfills you need based on your targeted browser or runtime environments.
#
# Without any configuration options, babel-preset-env behaves exactly the same
# as babel-preset-latest (or babel-preset-es2015, babel-preset-es2016, and 
# babel-preset-es2017 together).

npx babel --presets env rhapi-client-es7.js --out-file rhapi-client.js

# rhapi-client.js => rhapi-client-browser.js
browserify  -r ./rhapi-client.js | sed  's/\/rhapi-client.js/rhapi-client/' > ./rhapi-client-browser.js


