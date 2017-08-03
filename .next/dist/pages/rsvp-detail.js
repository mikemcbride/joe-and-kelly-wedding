'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/mcbridem/github/joe-and-kelly-wedding/pages/rsvp-detail.js?entry';


var RsvpDetail = function (_React$Component) {
  (0, _inherits3.default)(RsvpDetail, _React$Component);

  function RsvpDetail(props) {
    (0, _classCallCheck3.default)(this, RsvpDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RsvpDetail.__proto__ || (0, _getPrototypeOf2.default)(RsvpDetail)).call(this));

    _this.setAttending = _this.setAttending.bind(_this);
    _this.setGuestAttending = _this.setGuestAttending.bind(_this);
    _this.handleGuestNameChange = _this.handleGuestNameChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = {
      group: {},
      errorMessage: '',
      submitted: false
    };
    return _this;
  }

  (0, _createClass3.default)(RsvpDetail, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _base2.default.fetch('rsvps/' + this.props.url.query.id, {
        context: this
      }).then(function (data) {
        if ((0, _keys2.default)(data).length === 0) {
          _this2.setState({
            rsvp: {},
            submitted: 0,
            errorMessage: 'Unable to load this RSVP record. Please try again later.'
          });
          console.error('More than likely, this RSVP id does not exist.');
        } else {
          _this2.setState({ group: data });
        }
      }).catch(function (err) {
        _this2.setState({
          group: {},
          errorMessage: 'Unable to load this RSVP record. Please try again later.'
        });
        console.error(err);
      });
    }
  }, {
    key: 'setAttending',
    value: function setAttending(id, val) {
      if (val !== this.state.group[id].attending) {
        var group = (0, _extends3.default)({}, this.state.group);
        group[id].attending = val;

        this.setState({ group: group });
      }
    }
  }, {
    key: 'setGuestAttending',
    value: function setGuestAttending(id, val) {
      if (val !== this.state.group[id].guestAttending) {
        var group = (0, _extends3.default)({}, this.state.group);
        group[id].guestAttending = val;

        if (val === false) {
          group[id].guestName = "";
        }

        this.setState({ group: group });
      }
    }
  }, {
    key: 'handleGuestNameChange',
    value: function handleGuestNameChange(e, id) {
      var group = (0, _extends3.default)({}, this.state.group);
      group[id].guestName = e.target.value;

      this.setState({ group: group });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var group = (0, _keys2.default)(this.state.group).reduce(function (acc, id) {
        acc[id] = (0, _extends3.default)({}, _this3.state.group[id], { responded: true });
        return acc;
      }, {});

      this.setState({ group: group });

      _base2.default.post('rsvps/' + this.props.url.query.id, {
        data: group
      }).then(function () {
        _this3.setState({ submitted: true });
      }).catch(function (err) {
        _this3.setState({ errorMessage: 'Sorry! We are unable to save your RSVP at this time.' });
        console.error(err);
      });
    }
  }, {
    key: 'renderErrorMessage',
    value: function renderErrorMessage() {
      return _react2.default.createElement('div', { className: 'mw6 tc center gold ttu', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.state.errorMessage);
    }
  }, {
    key: 'renderSuccessMessage',
    value: function renderSuccessMessage() {
      return _react2.default.createElement('div', { className: 'mw6 tc center', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', { className: 'mb4 f5 f4-ns', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Thanks! We\'ve received your RSVP.'), _react2.default.createElement(_link2.default, { href: '/rsvp', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('a', { className: 'outline-0 f6 f5-ns no-underline-hover pointer br2 bn ph3 pv2 pv3-ns dib white bg-gold w-100 w5-ns', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'Back to RSVP')));
    }
  }, {
    key: 'renderGuestCard',
    value: function renderGuestCard() {
      var _this4 = this;

      return (0, _keys2.default)(this.state.group).map(function (id) {
        var rsvp = _this4.state.group[id];
        return _react2.default.createElement('div', { className: 'ba b--white-10 br1 mb4', key: id, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react2.default.createElement('h3', { className: 'f5 f4-ns b ph2 ph3-ns pv3 bb b--white-10 ttu gold mv0', __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, rsvp.firstName, ' ', rsvp.lastName), _react2.default.createElement('div', { className: 'ph2 pv3 ph3-ns', __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react2.default.createElement('div', { className: 'flex flex-column items-start mb3', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement('h4', { className: 'f5 b gold', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, 'Will you be attending?'), _react2.default.createElement('span', { className: 'pv2 mb1 ph3 pointer', onClick: function onClick(e) {
            return _this4.setAttending(id, true);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, _react2.default.createElement('i', { className: 'gold mr2 icon icon-' + (rsvp.attending === true ? 'dot-circle-o' : 'circle-o'), __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }), ' Yes'), _react2.default.createElement('span', { className: 'pv2 mb1 ph3 pointer', onClick: function onClick(e) {
            return _this4.setAttending(id, false);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement('i', { className: 'gold mr2 icon icon-' + (rsvp.attending === false ? 'dot-circle-o' : 'circle-o'), __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), ' No')), rsvp.getsGuest && rsvp.attending && _react2.default.createElement('div', { className: 'flex flex-column items-start mb3', __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, _react2.default.createElement('h4', { className: 'f5 b gold', __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, 'Are you bringing a guest?'), _react2.default.createElement('span', { className: 'pv2 mb1 ph3 pointer', onClick: function onClick(e) {
            return _this4.setGuestAttending(id, true);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, _react2.default.createElement('i', { className: 'gold mr2 icon icon-' + (rsvp.guestAttending === true ? 'dot-circle-o' : 'circle-o'), __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }), ' Yes'), _react2.default.createElement('span', { className: 'pv2 mb1 ph3 pointer', onClick: function onClick(e) {
            return _this4.setGuestAttending(id, false);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react2.default.createElement('i', { className: 'gold mr2 icon icon-' + (rsvp.guestAttending === false ? 'dot-circle-o' : 'circle-o'), __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), ' No')), rsvp.guestAttending && rsvp.attending && rsvp.getsGuest && _react2.default.createElement('div', { className: 'flex flex-column items-start mb3', __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, _react2.default.createElement('h4', { className: 'f5 b gold mb3', __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, 'What is your guest\'s name?'), _react2.default.createElement('input', { className: 'input-reset white bg-transparent ba b--white-30 b--gold-focus outline-0 pa3 w-100 w-50-ns br2',
          placeholder: 'Jane Doe',
          type: 'text',
          name: 'guestName',
          value: rsvp.guestName,
          onChange: function onChange(e) {
            return _this4.handleGuestNameChange(e, id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }))));
      });
    }
  }, {
    key: 'renderRsvpForm',
    value: function renderRsvpForm() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('h3', { className: 'gold mb4 fw4 f5 f4-ns', __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, 'Below are cards for each person invited as part of this RSVP. If you are allowed to bring a guest, there will be an option on your card for that.'), _react2.default.createElement('form', { name: 'rsvpForm', onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, this.renderGuestCard(), _react2.default.createElement('input', { className: 'input-reset outline-0 f6 f5-ns pointer br2 bn ph3 pv2 pv3-ns mb2 dib white bg-gold w-100 w4-ns',
        type: 'submit',
        value: 'Submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { activeNavItem: 'rsvp', __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, this.state.errorMessage !== '' && this.renderErrorMessage(), this.state.submitted === true && this.renderSuccessMessage(), this.state.submitted === false && this.renderRsvpForm());
    }
  }]);

  return RsvpDetail;
}(_react2.default.Component);

exports.default = RsvpDetail;