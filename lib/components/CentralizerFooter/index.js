'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CentralizerFooter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CentralizerFooter = exports.CentralizerFooter = function (_Component) {
  _inherits(CentralizerFooter, _Component);

  function CentralizerFooter() {
    _classCallCheck(this, CentralizerFooter);

    return _possibleConstructorReturn(this, (CentralizerFooter.__proto__ || Object.getPrototypeOf(CentralizerFooter)).apply(this, arguments));
  }

  _createClass(CentralizerFooter, [{
    key: 'render',
    value: function render() {
      var options = this.props.options;


      return _react2.default.createElement(
        'div',
        { className: 'olyauth__centralizerFooter', style: _styles2.default.footer },
        _react2.default.createElement(
          'button',
          { className: 'fa fa-cog', style: _styles2.default.buttonIcon },
          _react2.default.createElement('a', { style: _styles2.default.profileAnchor, href: this.props.options.profileSettingsLink })
        ),
        _react2.default.createElement(
          'div',
          { style: _styles2.default.branding },
          window.Oly.options.ui.logo && _react2.default.createElement('img', { style: _styles2.default.logo, src: window.Oly.options.ui.logo, alt: window.Oly.options.ui.appSlug })
        ),
        _react2.default.createElement(
          'button',
          { style: _styles2.default.buttonSignout, onClick: function onClick() {
              return window.Oly.Services.Auth.logout();
            } },
          'Sign out'
        )
      );
    }
  }]);

  return CentralizerFooter;
}(_react.Component);