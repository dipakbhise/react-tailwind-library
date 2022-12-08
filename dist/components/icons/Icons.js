"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightIcon = exports.CloseIcon = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CloseIcon = _ref => {
  let {
    size = 24,
    color = "#000000",
    bg = 'violet'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    stroke: color,
    strokeWidth: '0',
    fill: bg,
    class: "bi bi-x-circle-fill",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
  }));
};
exports.CloseIcon = CloseIcon;
const RightIcon = _ref2 => {
  let {
    size = 24,
    color = "#000000"
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9 18l6-6-6-6"
  }));
};
exports.RightIcon = RightIcon;