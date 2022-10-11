"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Capitalize string
var toCapitalize = function toCapitalize(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

var _default = toCapitalize;
exports["default"] = _default;