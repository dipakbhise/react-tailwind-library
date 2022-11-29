"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  const {
    text
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "px-2 py-1 bg-violet-400 rounded"
  }, text));
};
var _default = Button;
exports.default = _default;