"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var _Icons = require("./icons/Icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var inputValue = "";
var refdata = [];
const Combobox = props => {
  const {
    textField,
    options,
    value,
    title,
    setvalue,
    inputProps,
    multiselect
  } = props;
  const optionsRef = (0, _react.useRef)(null);
  const [isoptions, setIsoptions] = (0, _react.useState)(false);
  const [data, setdata] = (0, _react.useState)([]);
  const [ismultioptions, setismultioptions] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setdata(options);
    refdata = options;
  }, []);
  const handleClickOutside = event => {
    var _optionsRef$current;
    if (optionsRef && !((_optionsRef$current = optionsRef.current) !== null && _optionsRef$current !== void 0 && _optionsRef$current.contains(event.target))) {
      if (multiselect) {
        setismultioptions(false);
      } else {
        setIsoptions(false);
        if (inputValue[textField]) {
          let isValuPresent = refdata.findIndex((item, index) => {
            return inputValue[textField] === item[textField];
          });
          if (isValuPresent === -1) {
            setvalue("");
          }
          setdata(refdata);
        } else {
          let isValuPresent = refdata.findIndex((item, index) => {
            return inputValue === item;
          });
          if (isValuPresent === -1) {
            setvalue("");
          }
          setdata(refdata);
        }
      }
    }
  };
  const onComboboxFilterChangeFun = (event, textfield) => {
    if (multiselect) {} else {
      setvalue(event.target.value);
      inputValue = event.target.value;
      if (!isoptions) {
        setIsoptions(true);
      }
      if (event.target.value !== "") {
        let filteredData;
        if (textfield) {
          var _refdata;
          filteredData = (_refdata = refdata) === null || _refdata === void 0 ? void 0 : _refdata.filter((item, index) => {
            return item[textfield].toLowerCase().includes(event.target.value.toLowerCase());
          });
        } else {
          var _refdata2;
          filteredData = (_refdata2 = refdata) === null || _refdata2 === void 0 ? void 0 : _refdata2.filter((item, index) => {
            return item.toLowerCase().includes(event.target.value.toLowerCase());
          });
        }
        setdata(filteredData);
      } else {
        setdata(refdata);
      }
    }
  };
  const onOptionClick = option => {
    if (multiselect) {
      let modifyValue = [...value];
      if (textField) {
        let isValuPresent = modifyValue.findIndex((item, index) => {
          return item[textField] === option[textField];
        });
        if (isValuPresent === -1) {
          modifyValue.push(option);
          setvalue(modifyValue);
        }
      } else {
        let isValuPresent = modifyValue.findIndex((item, index) => {
          return item === option;
        });
        if (isValuPresent === -1) {
          modifyValue.push(option);
          setvalue(modifyValue);
        }
      }
      setismultioptions(false);
    } else {
      inputValue = option;
      setvalue(option);
      setIsoptions(false);
    }
  };
  const removeValue = (option, index) => {
    console.log("index", index);
    let modifyValue = [...value];
    modifyValue.splice(index, 1);
    setvalue(modifyValue);
    // if (textField) {
    // } else {
    //   let modifyValue = [...value];
    //   modifyValue.splice(index, 1);
    //   setvalue(modifyValue);
    // }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, multiselect ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-44 m-4 p-1",
    ref: optionsRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex p-1 flex-wrap justify-start border  rounded border-violet-500 outline-1 outline-violet-800"
  }, value === null || value === void 0 ? void 0 : value.map((option, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center py-1 px-2 bg-slate-400 rounded-2xl text-white my-2 ml-1"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mr-1",
    key: index
  }, option[textField] ? option[textField] : option), /*#__PURE__*/_react.default.createElement("div", {
    onClick: e => removeValue(option, index),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react.default.createElement(_Icons.CloseIcon, {
    color: "yellow",
    size: "18",
    bg: "white"
  })))), /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "outline-none p-1",
    onClick: () => {
      setismultioptions(!ismultioptions);
    },
    onChange: event => onComboboxFilterChangeFun(event, textField)
  }, inputProps))), ismultioptions && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white z-10"
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map((option, index) => /*#__PURE__*/_react.default.createElement("p", {
    className: "py-1 pl-2 hover:bg-violet-300 cursor-pointer",
    onClick: () => {
      onOptionClick(option);
    },
    key: index
  }, option[textField] ? option[textField] : option))))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-28 m-4",
    id: "test",
    ref: optionsRef
  }, /*#__PURE__*/_react.default.createElement("label", null, title ? title : "Combobox"), /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "border w-28 p-2 rounded border-violet-500 outline-1 outline-violet-800",
    onClick: () => {
      setIsoptions(!isoptions);
    },
    onChange: event => onComboboxFilterChangeFun(event, textField)
  }, inputProps, {
    value: value[textField] ? value[textField] : value
  })), isoptions && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full z-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white"
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map((option, index) => /*#__PURE__*/_react.default.createElement("p", {
    className: "py-1 pl-2 hover:bg-violet-300",
    onClick: () => {
      onOptionClick(option);
    },
    key: index
  }, option[textField] ? option[textField] : option)))))))));
};
var _default = Combobox;
exports.default = _default;