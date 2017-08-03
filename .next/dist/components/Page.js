'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mcbridem/github/joe-and-kelly-wedding/components/Page.js';

exports.default = function (_ref) {
  var activeNavItem = _ref.activeNavItem,
      children = _ref.children;

  return _react2.default.createElement('div', { className: 'min-vh-100 z-1 flex flex-column', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Collins Conlon Wedding'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { href: '/static/styles/index.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement(_Nav2.default, { activeNavItem: activeNavItem, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('div', { className: 'pa3 pt4 z-2 flex-auto', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('div', { className: 'w-100 center mw8 lh-copy', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, children)));
};