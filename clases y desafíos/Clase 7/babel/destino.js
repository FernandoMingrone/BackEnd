"use strict";

var list = [2, 3, 4, 5, 6, 7, 8, 9, 10];
list.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
