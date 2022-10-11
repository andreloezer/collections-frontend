"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormValues = void 0;

var getFormValues = function getFormValues(formEl) {
  var formValues = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formEl[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      console.dir(element);

      if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
        formValues[element.dataset.id] = element.type === 'checkbox' ? element.checked : element.value;
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

  return formValues;
};

exports.getFormValues = getFormValues;