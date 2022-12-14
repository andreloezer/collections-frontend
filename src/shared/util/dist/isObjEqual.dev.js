"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObjEqual = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isObjEqual = function isObjEqual(obj_1, obj_2) {
  if (Object.keys(obj_1).length !== Object.keys(obj_2).length) {
    return false;
  }

  for (var _i = 0, _Object$entries = Object.entries(obj_1); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key_1 = _Object$entries$_i[0],
        value_1 = _Object$entries$_i[1];

    if (obj_2[key_1] !== value_1) {
      return false;
    }
  }

  return true;
};

exports.isObjEqual = isObjEqual;