"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Page = require("../components/Page");

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mcbridem/github/joe-and-kelly-wedding/pages/index.js?entry";

exports.default = function () {
  return _react2.default.createElement(_Page2.default, { activeNavItem: "home", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("p", { className: "tc mb4", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Joe and Kelly are getting married!"), _react2.default.createElement("img", { src: "/static/img/banner.jpg", alt: "banner", className: "db center", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};