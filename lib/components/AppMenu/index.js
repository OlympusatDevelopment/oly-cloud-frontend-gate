'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppMenu = exports.AppMenu = function (_Component) {
  _inherits(AppMenu, _Component);

  function AppMenu() {
    _classCallCheck(this, AppMenu);

    return _possibleConstructorReturn(this, (AppMenu.__proto__ || Object.getPrototypeOf(AppMenu)).apply(this, arguments));
  }

  _createClass(AppMenu, [{
    key: 'render',
    value: function render() {
      var apps = this.props.apps;


      return _react2.default.createElement(
        'div',
        { className: 'olyauth__mainMenu', style: _styles2.default.olyauth__mainMenu },
        _react2.default.createElement(
          'div',
          { className: 'olyauth__mainMenuInner', style: _styles2.default.olyauth__mainMenuInner },
          _react2.default.createElement(
            'ul',
            { style: _styles2.default.ul },
            apps.map(function (app) {
              return _react2.default.createElement(
                'li',
                { key: Math.random(), style: _styles2.default.li },
                _react2.default.createElement(
                  'a',
                  { style: _styles2.default.link, href: app.domain },
                  _react2.default.createElement('img', { style: _styles2.default.icon, src: app.logo }),
                  app.name
                )
              );
            })
          )
        )
      );
    }
  }]);

  return AppMenu;
}(_react.Component);