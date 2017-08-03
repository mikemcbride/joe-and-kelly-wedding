'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _base = require('../base');

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