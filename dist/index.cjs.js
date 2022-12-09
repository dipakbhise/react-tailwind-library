'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CloseIcon = function CloseIcon(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#000000" : _ref$color,
    _ref$bg = _ref.bg,
    bg = _ref$bg === void 0 ? 'violet' : _ref$bg;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    stroke: color,
    strokeWidth: '0',
    fill: bg,
    class: "bi bi-x-circle-fill",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
  }));
};

var inputValue = "";
var refdata = [];
var Combobox = function Combobox(props) {
  var textField = props.textField,
    options = props.options,
    value = props.value,
    title = props.title,
    setvalue = props.setvalue,
    inputProps = props.inputProps,
    multiselect = props.multiselect;
  var optionsRef = React.useRef();
  var _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    isoptions = _useState2[0],
    setIsoptions = _useState2[1];
  var _useState3 = React.useState([]),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    data = _useState4[0],
    setdata = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    ismultioptions = _useState6[0],
    setismultioptions = _useState6[1];
  React.useEffect(function () {
    document.addEventListener("mousedown", handleClickOutside);
    setdata(options);
    refdata = options;
  }, []);
  var handleClickOutside = function handleClickOutside(event) {
    var _optionsRef$current;
    if (optionsRef && !((_optionsRef$current = optionsRef.current) !== null && _optionsRef$current !== void 0 && _optionsRef$current.contains(event.target))) {
      if (multiselect) {
        setismultioptions(false);
      } else {
        setIsoptions(false);
        if (inputValue[textField]) {
          var isValuPresent = refdata.findIndex(function (item, index) {
            return inputValue[textField] === item[textField];
          });
          if (isValuPresent === -1) {
            setvalue("");
          }
          setdata(refdata);
        } else {
          var _isValuPresent = refdata.findIndex(function (item, index) {
            return inputValue === item;
          });
          if (_isValuPresent === -1) {
            setvalue("");
          }
          setdata(refdata);
        }
      }
    }
  };
  var onComboboxFilterChangeFun = function onComboboxFilterChangeFun(event, textfield) {
    if (multiselect) ; else {
      setvalue(event.target.value);
      inputValue = event.target.value;
      if (!isoptions) {
        setIsoptions(true);
      }
      if (event.target.value !== "") {
        var filteredData;
        if (textfield) {
          var _refdata;
          filteredData = (_refdata = refdata) === null || _refdata === void 0 ? void 0 : _refdata.filter(function (item, index) {
            return item[textfield].toLowerCase().includes(event.target.value.toLowerCase());
          });
        } else {
          var _refdata2;
          filteredData = (_refdata2 = refdata) === null || _refdata2 === void 0 ? void 0 : _refdata2.filter(function (item, index) {
            return item.toLowerCase().includes(event.target.value.toLowerCase());
          });
        }
        setdata(filteredData);
      } else {
        setdata(refdata);
      }
    }
  };
  var onOptionClick = function onOptionClick(option) {
    if (multiselect) {
      var modifyValue = _toConsumableArray__default["default"](value);
      if (textField) {
        var isValuPresent = modifyValue.findIndex(function (item, index) {
          return item[textField] === option[textField];
        });
        if (isValuPresent === -1) {
          modifyValue.push(option);
          setvalue(modifyValue);
        }
      } else {
        var _isValuPresent2 = modifyValue.findIndex(function (item, index) {
          return item === option;
        });
        if (_isValuPresent2 === -1) {
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
  var removeValue = function removeValue(option, index) {
    console.log("index", index);
    var modifyValue = _toConsumableArray__default["default"](value);
    modifyValue.splice(index, 1);
    setvalue(modifyValue);
    // if (textField) {
    // } else {
    //   let modifyValue = [...value];
    //   modifyValue.splice(index, 1);
    //   setvalue(modifyValue);
    // }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, multiselect ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-44 m-4 p-1",
    ref: optionsRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex p-1 flex-wrap justify-start border  rounded border-violet-500 outline-1 outline-violet-800"
  }, value === null || value === void 0 ? void 0 : value.map(function (option, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center py-1 px-2 bg-slate-400 rounded-2xl text-white my-2 ml-1"
    }, /*#__PURE__*/React__default["default"].createElement("p", {
      className: "mr-1",
      key: index
    }, option[textField] ? option[textField] : option), /*#__PURE__*/React__default["default"].createElement("div", {
      onClick: function onClick(e) {
        return removeValue(option, index);
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React__default["default"].createElement(CloseIcon, {
      color: "yellow",
      size: "18",
      bg: "white"
    })));
  }), /*#__PURE__*/React__default["default"].createElement("input", _extends__default["default"]({
    className: "outline-none p-1",
    onClick: function onClick() {
      setismultioptions(!ismultioptions);
    },
    onChange: function onChange(event) {
      return onComboboxFilterChangeFun(event, textField);
    }
  }, inputProps))), ismultioptions && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute w-full"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white z-10"
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, data.map(function (option, index) {
    return /*#__PURE__*/React__default["default"].createElement("p", {
      className: "py-1 pl-2 hover:bg-violet-300 cursor-pointer",
      onClick: function onClick() {
        onOptionClick(option);
      },
      key: index
    }, option[textField] ? option[textField] : option);
  })))))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-28 m-4",
    id: "test",
    ref: optionsRef
  }, /*#__PURE__*/React__default["default"].createElement("label", null, title ? title : "Combobox"), /*#__PURE__*/React__default["default"].createElement("input", _extends__default["default"]({
    className: "border w-28 p-2 rounded border-violet-500 outline-1 outline-violet-800",
    onClick: function onClick() {
      setIsoptions(!isoptions);
    },
    onChange: function onChange(event) {
      return onComboboxFilterChangeFun(event, textField);
    }
  }, inputProps, {
    value: value[textField] ? value[textField] : value
  })), isoptions && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute w-full z-10"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white"
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, data.map(function (option, index) {
    return /*#__PURE__*/React__default["default"].createElement("p", {
      className: "py-1 pl-2 hover:bg-violet-300",
      onClick: function onClick() {
        onOptionClick(option);
      },
      key: index
    }, option[textField] ? option[textField] : option);
  }))))))));
};

var returnLibrary = function returnLibrary() {
  return {
    Combobox: Combobox
    // you can add here other components that you want to export
  };
};

var index = returnLibrary();

module.exports = index;
