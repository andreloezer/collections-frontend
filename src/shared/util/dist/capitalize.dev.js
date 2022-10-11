"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCapitalizeAll = exports.toCapitalize = void 0;

// Capitalize string
var toCapitalize = function toCapitalize(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}; // Capitalize all words


exports.toCapitalize = toCapitalize;

var toCapitalizeAll = function toCapitalizeAll(str) {
  var strArr = str.split(' ').map(function (word) {
    return toCapitalize(word);
  });
  return strArr.join(' ');
};

exports.toCapitalizeAll = toCapitalizeAll;