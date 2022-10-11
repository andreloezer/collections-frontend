"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectionContext = void 0;

var _react = require("react");

var collectionContext = (0, _react.createContext)({
  collection: {},
  setCollection: function setCollection() {}
});
exports.collectionContext = collectionContext;