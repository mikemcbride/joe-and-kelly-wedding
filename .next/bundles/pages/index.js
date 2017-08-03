
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__(547);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(548);

var _Nav2 = _interopRequireDefault(_Nav);

var _head = __webpack_require__(226);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/components/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/components/Page.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = __webpack_require__(549);

var _link2 = _interopRequireDefault(_link);

var _pages = __webpack_require__(561);

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
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('props getInitialProps', this.props);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
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
      console.log('active nav item', activeNavItem);
      var activeClass = activeNavItem === page.name ? 'active' : '';
      return _react2.default.createElement(_link2.default, { href: page.url, key: page.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('a', { className: activeClass + ' f6 b nav-link bb bt bw2 b--transparent ttu dib pv3 ph2 ph3-ns', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, page.title));
    }
  }, {
    key: 'renderSideNavLink',
    value: function renderSideNavLink(page) {
      return _react2.default.createElement(_link2.default, { href: page.url, key: page.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', { className: 'f6 b nav-link bb bt bw2 b--transparent ttu db pa3 tr', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
          lineNumber: 56
        }
      }, _react2.default.createElement('nav', { className: 'dn-l flex justify-between items-center bb b--white-10 relative z-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('a', { className: 'f6 b ttu dib pa3 gold z-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Joe + Kelly')), _react2.default.createElement('span', { className: 'f6 b ttu dib pa3 pointer', onClick: function onClick(e) {
          return _this2.toggleMenu(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Menu', _react2.default.createElement('i', { className: 'icon icon-menu ml2', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement('div', { id: 'nav-list', className: 'fixed z-2 w-100 bg-near-black overflow-y-auto ' + navOpenClass, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('div', { className: 'f6 b ttu pa3 bb b--white-10 flex items-center justify-end pointer', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('span', { className: 'dib', onClick: function onClick(e) {
          return _this2.toggleMenu(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Close', _react2.default.createElement('i', { className: 'icon icon-close ml2', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))), _pages2.default.map(this.renderSideNavLink))), _react2.default.createElement('nav', { className: 'dn flex-l items-center justify-center bb b--white-10', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/components/Nav.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pages = [{
  title: 'Home',
  name: 'home',
  url: '/'
}, {
  title: 'Our Story',
  name: 'story',
  url: '/story'
}, {
  title: 'Wedding Party',
  name: 'party',
  url: '/party'
}, {
  title: 'Festivities',
  name: 'festivities',
  url: '/festivities'
}, {
  title: 'Accommodations',
  name: 'accommodations',
  url: '/accommodations'
}, {
  title: 'Attractions',
  name: 'attractions',
  url: '/attractions'
}, {
  title: 'Registry',
  name: 'registry',
  url: '/registry'
}, {
  title: 'RSVP',
  name: 'rsvp',
  url: '/rsvp'
}];

exports.default = pages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/data/pages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/data/pages.js"); } } })();

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzBjMDcyOTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzPzBjMDcyOTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/MGMwNzI5MyIsIndlYnBhY2s6Ly8vLi9kYXRhL3BhZ2VzLmpzPzBjMDcyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlIGFjdGl2ZU5hdkl0ZW09XCJob21lXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidGMgbWI0XCI+Sm9lIGFuZCBLZWxseSBhcmUgZ2V0dGluZyBtYXJyaWVkITwvcD5cbiAgICA8aW1nIHNyYz0nL3N0YXRpYy9pbWcvYmFubmVyLmpwZycgYWx0PVwiYmFubmVyXCIgY2xhc3NOYW1lPVwiZGIgY2VudGVyXCIgLz5cbiAgPC9QYWdlPlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgYWN0aXZlTmF2SXRlbSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXZoLTEwMCB6LTEgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2xsaW5zIENvbmxvbiBXZWRkaW5nPC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICA8bGluayBocmVmPScvc3RhdGljL3N0eWxlcy9pbmRleC5jc3MnIHJlbD0nc3R5bGVzaGVldCcgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXYgYWN0aXZlTmF2SXRlbT17YWN0aXZlTmF2SXRlbX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEzIHB0NCB6LTIgZmxleC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgY2VudGVyIG13OCBsaC1jb3B5XCI+XG4gICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcGFnZXMgZnJvbSAnLi4vZGF0YS9wYWdlcydcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMgZ2V0SW5pdGlhbFByb3BzJywgdGhpcy5wcm9wcylcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlTmF2SXRlbTogdGhpcy5wcm9wcy5hY3RpdmVOYXZJdGVtXG4gICAgfSlcbiAgfVxuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpXG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hdk9wZW46IGZhbHNlLFxuICAgICAgYWN0aXZlTmF2SXRlbTogJydcbiAgICB9XG4gIH1cbiAgXG4gIHRvZ2dsZU1lbnUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmF2T3BlbjogIXRoaXMuc3RhdGUubmF2T3BlblxuICAgIH0pXG4gIH1cbiAgXG4gIHJlbmRlck5hdkxpbmsocGFnZSwgYWN0aXZlTmF2SXRlbSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgbmF2IGl0ZW0nLCBhY3RpdmVOYXZJdGVtKVxuICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYWN0aXZlTmF2SXRlbSA9PT0gcGFnZS5uYW1lID8gJ2FjdGl2ZScgOiAnJ1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtwYWdlLnVybH0ga2V5PXtwYWdlLnVybH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17YCR7YWN0aXZlQ2xhc3N9IGY2IGIgbmF2LWxpbmsgYmIgYnQgYncyIGItLXRyYW5zcGFyZW50IHR0dSBkaWIgcHYzIHBoMiBwaDMtbnNgfT57cGFnZS50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9XG4gIFxuICByZW5kZXJTaWRlTmF2TGluayhwYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9eyBwYWdlLnVybCB9IGtleT17IHBhZ2UudXJsIH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImY2IGIgbmF2LWxpbmsgYmIgYnQgYncyIGItLXRyYW5zcGFyZW50IHR0dSBkYiBwYTMgdHJcIj57IHBhZ2UudGl0bGUgfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBuYXZPcGVuQ2xhc3MgPSB0aGlzLnN0YXRlLm5hdk9wZW4gPT09IHRydWUgPyAnb3BlbicgOiAnJ1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImRuLWwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJiIGItLXdoaXRlLTEwIHJlbGF0aXZlIHotM1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwiZjYgYiB0dHUgZGliIHBhMyBnb2xkIHotMVwiPkpvZSArIEtlbGx5PC9hPjwvTGluaz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmNiBiIHR0dSBkaWIgcGEzIHBvaW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVNZW51KGUpfT5NZW51PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUgbWwyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGlkPVwibmF2LWxpc3RcIiBjbGFzc05hbWU9e2BmaXhlZCB6LTIgdy0xMDAgYmctbmVhci1ibGFjayBvdmVyZmxvdy15LWF1dG8gJHtuYXZPcGVuQ2xhc3N9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImY2IGIgdHR1IHBhMyBiYiBiLS13aGl0ZS0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwb2ludGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpYlwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1lbnUoZSl9PkNsb3NlPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNsb3NlIG1sMlwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgcGFnZXMubWFwKHRoaXMucmVuZGVyU2lkZU5hdkxpbmspIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJkbiBmbGV4LWwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJiIGItLXdoaXRlLTEwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJOYXZMaW5rKHBhZ2UsIHRoaXMuc3RhdGUuYWN0aXZlTmF2SXRlbSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5OYXYuY29udGV4dFR5cGVzID0ge1xuXHRyb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYuanMiLCJjb25zdCBwYWdlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnSG9tZScsXG4gICAgbmFtZTogJ2hvbWUnLFxuICAgIHVybDogJy8nXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ091ciBTdG9yeScsXG4gICAgbmFtZTogJ3N0b3J5JyxcbiAgICB1cmw6ICcvc3RvcnknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dlZGRpbmcgUGFydHknLFxuICAgIG5hbWU6ICdwYXJ0eScsXG4gICAgdXJsOiAnL3BhcnR5J1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGZXN0aXZpdGllcycsXG4gICAgbmFtZTogJ2Zlc3Rpdml0aWVzJyxcbiAgICB1cmw6ICcvZmVzdGl2aXRpZXMnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FjY29tbW9kYXRpb25zJyxcbiAgICBuYW1lOiAnYWNjb21tb2RhdGlvbnMnLFxuICAgIHVybDogJy9hY2NvbW1vZGF0aW9ucydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQXR0cmFjdGlvbnMnLFxuICAgIG5hbWU6ICdhdHRyYWN0aW9ucycsXG4gICAgdXJsOiAnL2F0dHJhY3Rpb25zJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSZWdpc3RyeScsXG4gICAgbmFtZTogJ3JlZ2lzdHJ5JyxcbiAgICB1cmw6ICcvcmVnaXN0cnknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1JTVlAnLFxuICAgIG5hbWU6ICdyc3ZwJyxcbiAgICB1cmw6ICcvcnN2cCdcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RhdGEvcGFnZXMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFqQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQUxBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBOzs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBSUE7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQU1BOzs7OztBQXZFQTtBQUNBO0FBeUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFHQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        