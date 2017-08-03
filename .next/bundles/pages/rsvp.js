
          window.__NEXT_REGISTER_PAGE('/rsvp', function() {
            var comp = module.exports =
webpackJsonp([11],{

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

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(582);


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(96);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(237);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(549);

var _link2 = _interopRequireDefault(_link);

var _Page = __webpack_require__(547);

var _Page2 = _interopRequireDefault(_Page);

var _base = __webpack_require__(583);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mcbridem/github/joe-and-kelly-wedding/pages/rsvp.js?entry';


var Rsvp = function (_React$Component) {
  (0, _inherits3.default)(Rsvp, _React$Component);

  function Rsvp() {
    (0, _classCallCheck3.default)(this, Rsvp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Rsvp.__proto__ || (0, _getPrototypeOf2.default)(Rsvp)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.renderFilteredRsvps = _this.renderFilteredRsvps.bind(_this);

    _this.state = {
      rsvps: {},
      searchTerm: '',
      filteredRsvps: {},
      groupId: '',
      notFound: false
    };
    return _this;
  }

  (0, _createClass3.default)(Rsvp, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.ref = _base2.default.syncState('rsvps', {
        context: this,
        state: 'rsvps'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _base2.default.removeBinding(this.ref);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ searchTerm: e.target.value });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.findRsvp();
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.findRsvp();
    }
  }, {
    key: 'findRsvp',
    value: function findRsvp() {
      var item = this.state.rsvps[this.state.searchTerm];

      if (item === undefined) {
        this.setState({ filteredRsvps: {}, notFound: true });
      } else {
        this.setState({ filteredRsvps: item, notFound: false, groupId: this.state.searchTerm });
      }
    }
  }, {
    key: 'renderFilteredRsvps',
    value: function renderFilteredRsvps() {
      var group = this.state.filteredRsvps;
      var items = (0, _keys2.default)(group).reduce(function (acc, id) {
        var item = (0, _extends3.default)({ id: id }, group[id]);
        return [].concat((0, _toConsumableArray3.default)(acc), [item]);
      }, []);

      return items.map(function (item) {
        var attendingClass = item.attending ? 'icon-check' : 'icon-close';
        return _react2.default.createElement('li', { className: 'last-child-no-border ph3 pv3 gold bb b--white-20', key: item.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, _react2.default.createElement('span', { className: 'w2 dib gold', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, item.responded === true && _react2.default.createElement('i', { className: 'icon ' + attendingClass, __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        })), ' ', item.lastName, ', ', item.firstName);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_Page2.default, { activeNavItem: 'rsvp', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('p', { className: 'mb3 lh-copy ph3', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'To find your RSVP, type the code from your invite into the box and click "Search". Click "Edit Group RSVP" and fill in the form. When finished, click Submit. If you have already responded, your RSVP will have a check mark next to it if you marked ', _react2.default.createElement('span', { className: 'gold', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'attending'), ', and an "x" if you marked ', _react2.default.createElement('span', { className: 'gold', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'not attending'), '.'), _react2.default.createElement('div', { className: 'dn-ns pt3 mb4 bb b--white-30', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement('form', { className: 'mw7 center pa4-ns mb3', onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('fieldset', { className: 'cf bn ma0 pa0', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('legend', { className: 'pa0 f5 f4-ns mb3 gold', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Find your RSVP'), _react2.default.createElement('div', { className: 'cf', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('input', { className: 'f6 f5-l input-reset fl white bg-transparent ba b--gold outline-0 pa3 w-100 w-75-m w-80-l br2-ns br--left-ns',
        placeholder: 'Your RSVP code...',
        type: 'text',
        name: 'searchTerm',
        value: this.state.searchTerm,
        onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement('button', { className: 'f6 f5-l fw5 button-reset fl pv3 tc ba b--gold bg-gold outline-0 white pointer w-100 w-25-m w-20-l br2-ns br--right-ns', type: 'button', onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Search')))), (0, _keys2.default)(this.state.filteredRsvps).length > 0 && _react2.default.createElement('article', { className: 'pa4-ns mw7 center', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('h3', { className: 'f5 f4-ns fw4 gold center', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Results'), _react2.default.createElement('ul', { className: 'list pl0 ml0 center ba b--white-20 br2', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('li', { className: 'last-child-no-border gold bb b--white-20', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('div', { className: 'flex justify-between', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('span', { className: 'pa3', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Group ', this.state.groupId), _react2.default.createElement(_link2.default, { href: 'rsvp-detail?id=' + this.state.groupId, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('span', { className: 'dib bg-gold white pa3 br2 br--top br--right pointer', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'Edit Group RSVP \u2192')))), (0, _keys2.default)(this.state.filteredRsvps).filter(function (id) {
        return _this2.state.filteredRsvps[id].responded === true;
      }).length > 0 && _react2.default.createElement('li', { className: 'last-child-no-border white-80 bb b--white-20 pa3', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('strong', { className: 'gold', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Heads up!'), ' You have already submitted your RSVP for this group. You may still resubmit if you would like to change your reply.'), this.renderFilteredRsvps())), this.state.notFound === true && _react2.default.createElement('h3', { className: 'mt5 f5 f4-ns fw4 gold ttu tc', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'No results found for that ID. Please try again.'));
    }
  }]);

  return Rsvp;
}(_react2.default.Component);

exports.default = Rsvp;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/pages/rsvp.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/pages/rsvp.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/rsvp")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reBase = __webpack_require__(584);

var _reBase2 = _interopRequireDefault(_reBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _reBase2.default.createClass({
  apiKey: "AIzaSyDidFm77AI1mpjk3swBlpGVjvb-_rXjwgs",
  authDomain: "collins-conlon-wedding.firebaseapp.com",
  databaseURL: "https://collins-conlon-wedding.firebaseio.com"
});

exports.default = base;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mcbridem/github/joe-and-kelly-wedding/base.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mcbridem/github/joe-and-kelly-wedding/base.js"); } } })();

/***/ })

},[581]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9yc3ZwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzPzU4YjhjMDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/NThiOGMwOSIsIndlYnBhY2s6Ly8vLi9kYXRhL3BhZ2VzLmpzPzU4YjhjMDkiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcnN2cC5qcz81OGI4YzA5Iiwid2VicGFjazovLy8uL2Jhc2UuanM/NThiOGMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBhY3RpdmVOYXZJdGVtLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdmgtMTAwIHotMSBmbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbGxpbnMgQ29ubG9uIFdlZGRpbmc8L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9Jy9zdGF0aWMvc3R5bGVzL2luZGV4LmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdiBhY3RpdmVOYXZJdGVtPXthY3RpdmVOYXZJdGVtfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTMgcHQ0IHotMiBmbGV4LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBjZW50ZXIgbXc4IGxoLWNvcHlcIj5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBwYWdlcyBmcm9tICcuLi9kYXRhL3BhZ2VzJ1xuXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVOYXZJdGVtOiB0aGlzLnByb3BzLmFjdGl2ZU5hdkl0ZW1cbiAgICB9KVxuICB9XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcylcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmF2T3BlbjogZmFsc2UsXG4gICAgICBhY3RpdmVOYXZJdGVtOiAnJ1xuICAgIH1cbiAgfVxuICBcbiAgdG9nZ2xlTWVudShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYXZPcGVuOiAhdGhpcy5zdGF0ZS5uYXZPcGVuXG4gICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyTmF2TGluayhwYWdlLCBhY3RpdmVOYXZJdGVtKSB7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBhY3RpdmVOYXZJdGVtID09PSBwYWdlLm5hbWUgPyAnYWN0aXZlJyA6ICcnXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e3BhZ2UudXJsfSBrZXk9e3BhZ2UudXJsfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHthY3RpdmVDbGFzc30gZjYgYiBuYXYtbGluayBiYiBidCBidzIgYi0tdHJhbnNwYXJlbnQgdHR1IGRpYiBwdjMgcGgyIHBoMy1uc2B9PntwYWdlLnRpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH1cbiAgXG4gIHJlbmRlclNpZGVOYXZMaW5rKHBhZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17IHBhZ2UudXJsIH0ga2V5PXsgcGFnZS51cmwgfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZjYgYiBuYXYtbGluayBiYiBidCBidzIgYi0tdHJhbnNwYXJlbnQgdHR1IGRiIHBhMyB0clwiPnsgcGFnZS50aXRsZSB9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdk9wZW5DbGFzcyA9IHRoaXMuc3RhdGUubmF2T3BlbiA9PT0gdHJ1ZSA/ICdvcGVuJyA6ICcnXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZG4tbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmIgYi0td2hpdGUtMTAgcmVsYXRpdmUgei0zXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJmNiBiIHR0dSBkaWIgcGEzIGdvbGQgei0xXCI+Sm9lICsgS2VsbHk8L2E+PC9MaW5rPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImY2IGIgdHR1IGRpYiBwYTMgcG9pbnRlclwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU1lbnUoZSl9Pk1lbnU8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudSBtbDJcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXYtbGlzdFwiIGNsYXNzTmFtZT17YGZpeGVkIHotMiB3LTEwMCBiZy1uZWFyLWJsYWNrIG92ZXJmbG93LXktYXV0byAke25hdk9wZW5DbGFzc31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjYgYiB0dHUgcGEzIGJiIGItLXdoaXRlLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGliXCIgb25DbGljaz17KGUpID0+IHRoaXMudG9nZ2xlTWVudShlKX0+Q2xvc2U8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2xvc2UgbWwyXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBwYWdlcy5tYXAodGhpcy5yZW5kZXJTaWRlTmF2TGluaykgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImRuIGZsZXgtbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmIgYi0td2hpdGUtMTBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlck5hdkxpbmsocGFnZSwgdGhpcy5zdGF0ZS5hY3RpdmVOYXZJdGVtKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbk5hdi5jb250ZXh0VHlwZXMgPSB7XG5cdHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi5qcyIsImNvbnN0IHBhZ2VzID0gW1xuICB7XG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICBuYW1lOiAnaG9tZScsXG4gICAgdXJsOiAnLydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnT3VyIFN0b3J5JyxcbiAgICBuYW1lOiAnc3RvcnknLFxuICAgIHVybDogJy9zdG9yeSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2VkZGluZyBQYXJ0eScsXG4gICAgbmFtZTogJ3BhcnR5JyxcbiAgICB1cmw6ICcvcGFydHknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Zlc3Rpdml0aWVzJyxcbiAgICBuYW1lOiAnZmVzdGl2aXRpZXMnLFxuICAgIHVybDogJy9mZXN0aXZpdGllcydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQWNjb21tb2RhdGlvbnMnLFxuICAgIG5hbWU6ICdhY2NvbW1vZGF0aW9ucycsXG4gICAgdXJsOiAnL2FjY29tbW9kYXRpb25zJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBdHRyYWN0aW9ucycsXG4gICAgbmFtZTogJ2F0dHJhY3Rpb25zJyxcbiAgICB1cmw6ICcvYXR0cmFjdGlvbnMnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1JlZ2lzdHJ5JyxcbiAgICBuYW1lOiAncmVnaXN0cnknLFxuICAgIHVybDogJy9yZWdpc3RyeSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUlNWUCcsXG4gICAgbmFtZTogJ3JzdnAnLFxuICAgIHVybDogJy9yc3ZwJ1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGF0YS9wYWdlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSdcbmltcG9ydCBiYXNlIGZyb20gJy4uL2Jhc2UnXG5cbmNsYXNzIFJzdnAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRmlsdGVyZWRSc3ZwcyA9IHRoaXMucmVuZGVyRmlsdGVyZWRSc3Zwcy5iaW5kKHRoaXMpXG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJzdnBzOiB7fSxcbiAgICAgIHNlYXJjaFRlcm06ICcnLFxuICAgICAgZmlsdGVyZWRSc3Zwczoge30sXG4gICAgICBncm91cElkOiAnJyxcbiAgICAgIG5vdEZvdW5kOiBmYWxzZVxuICAgIH1cbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICB0aGlzLnJlZiA9IGJhc2Uuc3luY1N0YXRlKCdyc3ZwcycsIHtcbiAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICBzdGF0ZTogJ3JzdnBzJ1xuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgYmFzZS5yZW1vdmVCaW5kaW5nKHRoaXMucmVmKVxuICB9XG4gIFxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBcbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIHRoaXMuZmluZFJzdnAoKVxuICB9XG4gIFxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZmluZFJzdnAoKVxuICB9XG4gIFxuICBmaW5kUnN2cCgpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5zdGF0ZS5yc3Zwc1t0aGlzLnN0YXRlLnNlYXJjaFRlcm1dXG4gICAgXG4gICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkUnN2cHM6IHt9LCBub3RGb3VuZDogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRSc3ZwczogaXRlbSwgbm90Rm91bmQ6IGZhbHNlLCBncm91cElkOiB0aGlzLnN0YXRlLnNlYXJjaFRlcm0gfSlcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlckZpbHRlcmVkUnN2cHMoKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLnN0YXRlLmZpbHRlcmVkUnN2cHNcbiAgICBjb25zdCBpdGVtcyA9IE9iamVjdC5rZXlzKGdyb3VwKS5yZWR1Y2UoKGFjYywgaWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7aWQsIC4uLmdyb3VwW2lkXX1cbiAgICAgIHJldHVybiBbLi4uYWNjLCBpdGVtXVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGF0dGVuZGluZ0NsYXNzID0gaXRlbS5hdHRlbmRpbmcgPyAnaWNvbi1jaGVjaycgOiAnaWNvbi1jbG9zZSdcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXN0LWNoaWxkLW5vLWJvcmRlciBwaDMgcHYzIGdvbGQgYmIgYi0td2hpdGUtMjBcIiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIncyIGRpYiBnb2xkXCI+eyBpdGVtLnJlc3BvbmRlZCA9PT0gdHJ1ZSAmJiA8aSBjbGFzc05hbWU9e2BpY29uICR7YXR0ZW5kaW5nQ2xhc3N9YH0+PC9pPn08L3NwYW4+IHtpdGVtLmxhc3ROYW1lfSwge2l0ZW0uZmlyc3ROYW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgYWN0aXZlTmF2SXRlbT1cInJzdnBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWIzIGxoLWNvcHkgcGgzXCI+XG4gICAgICAgICAgVG8gZmluZCB5b3VyIFJTVlAsIHR5cGUgdGhlIGNvZGUgZnJvbSB5b3VyIGludml0ZSBpbnRvIHRoZSBib3ggYW5kIGNsaWNrIFwiU2VhcmNoXCIuXG4gICAgICAgICAgQ2xpY2sgXCJFZGl0IEdyb3VwIFJTVlBcIiBhbmQgZmlsbCBpbiB0aGUgZm9ybS4gV2hlbiBmaW5pc2hlZCwgY2xpY2sgU3VibWl0LlxuICAgICAgICAgIElmIHlvdSBoYXZlIGFscmVhZHkgcmVzcG9uZGVkLCB5b3VyIFJTVlAgd2lsbCBoYXZlIGEgY2hlY2sgbWFyayBuZXh0IHRvIGl0IGlmIHlvdSBtYXJrZWQgPHNwYW4gY2xhc3NOYW1lPVwiZ29sZFwiPmF0dGVuZGluZzwvc3Bhbj4sIGFuZCBhbiBcInhcIiBpZiB5b3UgbWFya2VkIDxzcGFuIGNsYXNzTmFtZT1cImdvbGRcIj5ub3QgYXR0ZW5kaW5nPC9zcGFuPi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRuLW5zIHB0MyBtYjQgYmIgYi0td2hpdGUtMzBcIj48L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXc3IGNlbnRlciBwYTQtbnMgbWIzXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY2YgYm4gbWEwIHBhMFwiPlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJwYTAgZjUgZjQtbnMgbWIzIGdvbGRcIj5GaW5kIHlvdXIgUlNWUDwvbGVnZW5kPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZjYgZjUtbCBpbnB1dC1yZXNldCBmbCB3aGl0ZSBiZy10cmFuc3BhcmVudCBiYSBiLS1nb2xkIG91dGxpbmUtMCBwYTMgdy0xMDAgdy03NS1tIHctODAtbCBicjItbnMgYnItLWxlZnQtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBSU1ZQIGNvZGUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVGVybVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZjYgZjUtbCBmdzUgYnV0dG9uLXJlc2V0IGZsIHB2MyB0YyBiYSBiLS1nb2xkIGJnLWdvbGQgb3V0bGluZS0wIHdoaXRlIHBvaW50ZXIgdy0xMDAgdy0yNS1tIHctMjAtbCBicjItbnMgYnItLXJpZ2h0LW5zXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBcbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmlsdGVyZWRSc3ZwcykubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBhNC1ucyBtdzcgY2VudGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjUgZjQtbnMgZnc0IGdvbGQgY2VudGVyXCI+UmVzdWx0czwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBwbDAgbWwwIGNlbnRlciBiYSBiLS13aGl0ZS0yMCBicjJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxhc3QtY2hpbGQtbm8tYm9yZGVyIGdvbGQgYmIgYi0td2hpdGUtMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYTNcIj5Hcm91cCB7dGhpcy5zdGF0ZS5ncm91cElkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Byc3ZwLWRldGFpbD9pZD0ke3RoaXMuc3RhdGUuZ3JvdXBJZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGliIGJnLWdvbGQgd2hpdGUgcGEzIGJyMiBici0tdG9wIGJyLS1yaWdodCBwb2ludGVyXCI+RWRpdCBHcm91cCBSU1ZQIOKGkjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmlsdGVyZWRSc3ZwcylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gdGhpcy5zdGF0ZS5maWx0ZXJlZFJzdnBzW2lkXS5yZXNwb25kZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsYXN0LWNoaWxkLW5vLWJvcmRlciB3aGl0ZS04MCBiYiBiLS13aGl0ZS0yMCBwYTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZ29sZFwiPkhlYWRzIHVwITwvc3Ryb25nPiBZb3UgaGF2ZSBhbHJlYWR5IHN1Ym1pdHRlZCB5b3VyIFJTVlAgZm9yIHRoaXMgZ3JvdXAuIFlvdSBtYXkgc3RpbGwgcmVzdWJtaXQgaWYgeW91IHdvdWxkIGxpa2UgdG8gY2hhbmdlIHlvdXIgcmVwbHkuXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXJlZFJzdnBzKCl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAge3RoaXMuc3RhdGUubm90Rm91bmQgPT09IHRydWUgJiZcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQ1IGY1IGY0LW5zIGZ3NCBnb2xkIHR0dSB0Y1wiPk5vIHJlc3VsdHMgZm91bmQgZm9yIHRoYXQgSUQuIFBsZWFzZSB0cnkgYWdhaW4uPC9oMz5cbiAgICAgICAgfVxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSc3ZwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcnN2cC5qcz9lbnRyeSIsImltcG9ydCBSZWJhc2UgZnJvbSAncmUtYmFzZSdcblxuY29uc3QgYmFzZSA9IFJlYmFzZS5jcmVhdGVDbGFzcyh7XG4gIGFwaUtleTogXCJBSXphU3lEaWRGbTc3QUkxbXBqazNzd0JscEdWanZiLV9yWGp3Z3NcIixcbiAgYXV0aERvbWFpbjogXCJjb2xsaW5zLWNvbmxvbi13ZWRkaW5nLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvbGxpbnMtY29ubG9uLXdlZGRpbmcuZmlyZWJhc2Vpby5jb21cIixcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9iYXNlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFqQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFJQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBTUE7Ozs7O0FBbEVBO0FBQ0E7QUFvRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUlBO0FBTkE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7Ozs7O0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFIQTs7OztBQU1BO0FBQUE7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFFQTs7OztBQUVBO0FBRUE7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFNQTtBQU5BO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXRIQTtBQUNBO0FBNEhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        