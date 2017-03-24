#browserify-must-know

#### Why Browserify
1. solving problem of server *require* and client *<script>* , transform 
2. 

## Install
```
$ npm install -save browserify
```

## Run Example
```
$ browserify ex1_simple/index.js -o dist/bundle.js
```


# Things must know
#### 1. Turn CommonJS to browser script
Export an Node.js module.
```javascript
//./module.js
var i = 1;

module.exports = {
  print: function () {
      console.log('i: ', i);
  }
};
```

Module is Required by another module.
```javascript
//./index.js
var module = require('./module.js');
module.print();
```

**Browserify Magic!** Converting Node.js code into browser code
```
$ ./node_modules/browserify/bin/cmd.js index.js > dist/bundle.js
 // you can use the command below, 
 // when you install browserify globally
 //$ browserify index.js > dist/bundle.js
```


#### 2. Turn Node.js lib to browser script
Export an Node.js module.
```javascript
//./fsLib.js
var fs = require('fs');
var sites = fs.readFileSync(__dirname + '/cool-sites.txt', { encoding: 'utf8' });

sites.split('\n').forEach(function (site, i) {
  console.log('%s: %s is pretty cool', i, site);
});

```

**Browserify Magic!** Converting Node.js code into browser code
```
$ browserify fsLib.js -t brfs -o dist/bundle.js 
```



#### Browserify VS Webpack
 - If your project and dependencies are already closely tied to the Node ecosystem, Browserify is a solid choice. 
 - If you need more power to manage static assets than you can shake a script at, Webpack's your tool.



#Reference
 . (https://scotch.io/tutorials/getting-started-with-browserify#why-browserify)[https://scotch.io/tutorials/getting-started-with-browserify#why-browserify]
 . (https://ponyfoo.com/articles/a-gentle-browserify-walkthrough)[https://ponyfoo.com/articles/a-gentle-browserify-walkthrough]