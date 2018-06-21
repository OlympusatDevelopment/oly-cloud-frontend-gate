'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleSelector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _RoleItem = require('../RoleItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoleSelector = exports.RoleSelector = function (_Component) {
  _inherits(RoleSelector, _Component);

  function RoleSelector() {
    _classCallCheck(this, RoleSelector);

    return _possibleConstructorReturn(this, (RoleSelector.__proto__ || Object.getPrototypeOf(RoleSelector)).apply(this, arguments));
  }

  _createClass(RoleSelector, [{
    key: 'onItemClick',
    value: function onItemClick() {
      // assumeRole logic here
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var roles = this.props.roles;

      return _react2.default.createElement(
        'div',
        { className: 'olyauth__roleSelector', style: _styles2.default.olyauth__roleSelector },
        _react2.default.createElement(
          'div',
          { className: 'olyauth__roleSelectorInner', style: _styles2.default.olyauth__roleSelectorInner },
          _react2.default.createElement(
            'ul',
            { style: _styles2.default.ul },
            roles.map(function (role) {
              return _react2.default.createElement(_RoleItem.RoleItem, { key: role.id, role: role, onItemClick: _this2.onItemClick });
            })
          )
        )
      );
    }
  }]);

  return RoleSelector;
}(_react.Component);