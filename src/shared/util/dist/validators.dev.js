"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.VALIDATOR_PASSWORD = exports.VALIDATOR_EMAIL = exports.VALIDATOR_MAX = exports.VALIDATOR_MIN = exports.VALIDATOR_MAXLENGTH = exports.VALIDATOR_MINLENGTH = exports.VALIDATOR_FILE = exports.VALIDATOR_REQUIRE = void 0;
var VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
var VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
var VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
var VALIDATOR_TYPE_MIN = 'MIN';
var VALIDATOR_TYPE_MAX = 'MAX';
var VALIDATOR_TYPE_EMAIL = 'EMAIL';
var VALIDATOR_TYPE_FILE = 'FILE';
var VALIDATOR_TYPE_PASSWORD = 'PASSWORD';

var VALIDATOR_REQUIRE = function VALIDATOR_REQUIRE() {
  return {
    type: VALIDATOR_TYPE_REQUIRE
  };
};

exports.VALIDATOR_REQUIRE = VALIDATOR_REQUIRE;

var VALIDATOR_FILE = function VALIDATOR_FILE() {
  return {
    type: VALIDATOR_TYPE_FILE
  };
};

exports.VALIDATOR_FILE = VALIDATOR_FILE;

var VALIDATOR_MINLENGTH = function VALIDATOR_MINLENGTH(val) {
  return {
    type: VALIDATOR_TYPE_MINLENGTH,
    val: val
  };
};

exports.VALIDATOR_MINLENGTH = VALIDATOR_MINLENGTH;

var VALIDATOR_MAXLENGTH = function VALIDATOR_MAXLENGTH(val) {
  return {
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val
  };
};

exports.VALIDATOR_MAXLENGTH = VALIDATOR_MAXLENGTH;

var VALIDATOR_MIN = function VALIDATOR_MIN(val) {
  return {
    type: VALIDATOR_TYPE_MIN
  };
};

exports.VALIDATOR_MIN = VALIDATOR_MIN;

var VALIDATOR_MAX = function VALIDATOR_MAX(val) {
  return {
    type: VALIDATOR_TYPE_MAX
  };
};

exports.VALIDATOR_MAX = VALIDATOR_MAX;

var VALIDATOR_EMAIL = function VALIDATOR_EMAIL(val) {
  return {
    type: VALIDATOR_TYPE_EMAIL
  };
};

exports.VALIDATOR_EMAIL = VALIDATOR_EMAIL;

var VALIDATOR_PASSWORD = function VALIDATOR_PASSWORD(val) {
  return {
    type: VALIDATOR_TYPE_PASSWORD
  };
};

exports.VALIDATOR_PASSWORD = VALIDATOR_PASSWORD;

var validate = function validate(value, validators) {
  var isValid = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var validator = _step.value;

      switch (validator.type) {
        case VALIDATOR_TYPE_REQUIRE:
          isValid = isValid && value.trim().length > 0;
          break;

        case VALIDATOR_TYPE_MINLENGTH:
          isValid = isValid && value.trim().length >= validator.val;
          break;

        case VALIDATOR_TYPE_MAXLENGTH:
          isValid = isValid && value.trim().length <= validator.val;
          break;

        case VALIDATOR_TYPE_MIN:
          isValid = isValid && +value >= validator.val;
          break;

        case VALIDATOR_TYPE_MAX:
          isValid = isValid && +value <= validator.val;
          break;

        case VALIDATOR_TYPE_EMAIL:
          isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
          break;

        default:
          break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return isValid;
};

exports.validate = validate;