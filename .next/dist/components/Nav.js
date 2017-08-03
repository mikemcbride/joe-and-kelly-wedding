'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _pages = require('../data/pages');

var _pages2 = _interopRequireDefault(_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mcbridem/github/joe-and-kelly-wedding/components/Nav.js';


var Nav = function (_React$Component) {
  (0, _inherits3.default)(Nav, _React$Component);

  (0, _createClass3.default)(Nav, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        activeNavItem: this.props.activeNavItem
      });
    }
  }]);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this));

    _this.toggleMenu = _this.toggleMenu.bind(_this);

    _this.state = {
      navOpen: false,
      activeNavItem: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Nav, [{
    key: 'toggleMenu',
    value: function toggleMenu(e) {
      e.preventDefault();
      this.setState({
        navOpen: !this.state.navOpen
      });
    }
  }, {
    key: 'renderNavLink',
    value: function renderNavLink(page, activeNavItem) {
      var activeClass = activeNavItem === page.name ? 'active' : '';
      return _react2.default.createElement(_link2.default, { prefetch: true, href: page.url, key: page.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('a', { className: activeClass + ' f6 b nav-link bb bt bw2 b--transparent ttu dib pv3 ph2 ph3-ns', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, page.title));
    }
  }, {
    key: 'renderSideNavLink',
    value: function renderSideNavLink(page) {
      return _react2.default.createElement(_link2.default, { prefetch: true, href: page.url, key: page.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('a', { className: 'f6 b nav-link bb bt bw2 b--transparent ttu db pa3 tr', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, page.title));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var navOpenClass = this.state.navOpen === true ? 'open' : '';

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('nav', { className: 'dn-l flex justify-between items-center bb b--white-10 relative z-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', { className: 'f6 b ttu dib pa3 gold z-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Joe + Kelly')), _react2.default.createElement('span', { className: 'f6 b ttu dib pa3 pointer', onClick: function onClick(e) {
          return _this2.toggleMenu(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Menu', _react2.default.createElement('i', { className: 'icon icon-menu ml2', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement('div', { id: 'nav-list', className: 'fixed z-2 w-100 bg-near-black overflow-y-auto ' + navOpenClass, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'f6 b ttu pa3 bb b--white-10 flex items-center justify-end pointer', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('span', { className: 'dib', onClick: function onClick(e) {
          return _this2.toggleMenu(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Close', _react2.default.createElement('i', { className: 'icon icon-close ml2', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }))), _pages2.default.map(this.renderSideNavLink))), _react2.default.createElement('nav', { className: 'dn flex-l items-center justify-center bb b--white-10', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _pages2.default.map(function (page) {
        return _this2.renderNavLink(page, _this2.state.activeNavItem);
      })));
    }
  }]);

  return Nav;
}(_react2.default.Component);

Nav.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = Nav;