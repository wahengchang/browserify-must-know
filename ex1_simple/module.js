// Example from:
// https://ponyfoo.com/articles/a-gentle-browserify-walkthrough
var i = 1;
var max = 3;

module.exports = {
  print: function () {
    for (i -= 1; i++ < max; ) {
      console.log(i);
    }
    max *= 1.1;
  }
};
