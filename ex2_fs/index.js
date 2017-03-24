// Example from:
// https://ponyfoo.com/articles/a-gentle-browserify-walkthrough

var fs = require('fs');
var sites = fs.readFileSync(__dirname + '/cool-sites.txt', { encoding: 'utf8' });

sites.split('\n').forEach(function (site, i) {
  console.log('%s: %s is pretty cool', i, site);
});
