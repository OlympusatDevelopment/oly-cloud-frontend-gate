'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Centralizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _headerStyles = require('./headerStyles');

var _headerStyles2 = _interopRequireDefault(_headerStyles);

var _AppMenu = require('./AppMenu');

var _RoleSelector = require('../RoleSelector');

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utils$constants = _utils2.default.constants,
    APP_MENU = _utils$constants.APP_MENU,
    CENTRALIZER_ID = _utils$constants.CENTRALIZER_ID;

var Centralizer = exports.Centralizer = function (_Component) {
  _inherits(Centralizer, _Component);

  function Centralizer(props) {
    _classCallCheck(this, Centralizer);

    var _this = _possibleConstructorReturn(this, (Centralizer.__proto__ || Object.getPrototypeOf(Centralizer)).call(this, props));

    _this._addStyleToHead(_headerStyles2.default);

    _this.state = {
      user: _this.props.user || [],
      apps: _this.props.apps || [],
      roles: _this.props.roles || [],
      interface: APP_MENU,
      showContainer: false,
      showAppContainer: false
    };

    _this.setVisibleInterface = _this.setVisibleInterface.bind(_this);
    return _this;
  }

  _createClass(Centralizer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextState) {
      this.setState({
        user: nextState.user,
        apps: nextState.apps,
        roles: nextState.roles
      });
    }

    /**
     * BUILD the primary container
     * @param Interface
     * @param user
     * @returns {XML} 
     */

  }, {
    key: 'makePrimaryContainer',
    value: function makePrimaryContainer(Interface, user) {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.container, className: 'olyauth__centralizerContainer top_arr' },
        _react2.default.createElement(
          'div',
          { className: 'olyauth__centralizerHeader', style: _styles2.default.header },
          _react2.default.createElement(
            'p',
            { style: _styles2.default.headerText },
            _react2.default.createElement(
              'span',
              { style: _styles2.default.headerName, className: 'bold', title: user.email },
              user.name
            ),
            _react2.default.createElement('br', null),
            user.company || user.email
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.headerGravatar, className: 'olyauth__centralizerHeaderGravatar' },
            _react2.default.createElement('img', { style: _styles2.default.headerGravatarImg, src: user.profile, alt: user.name })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          Interface
        ),
        _react2.default.createElement(
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
            { style: _styles2.default.buttonSignout, onClick: window.Oly.Services.Auth.logout() },
            'Sign out'
          )
        )
      );
    }

    /**
     * BUILD the app container
     * @param Interface
     * @param user
     * @returns {XML}
     */

  }, {
    key: 'makeAppContainer',
    value: function makeAppContainer(Interface, user) {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.appContainer, className: 'olyauth__centralizerAppContainer top_arr' },
        _react2.default.createElement(
          'div',
          null,
          Interface
        ),
        _react2.default.createElement(
          'div',
          { className: 'olyauth__centralizerFooter', style: _styles2.default.footer },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.branding },
            _react2.default.createElement('img', { style: _styles2.default.logo, src: window.Oly.options.ui.logo, alt: window.Oly.options.ui.appSlug })
          )
        )
      );
    }

    /**
     * The centralizer has the ability to swap out internal interfaces. 
     * The default interface is the roles menu, but others can be displayed if needed.
     * CONTROLS internal interface switching
     * @param {*} nterface 
     */

  }, {
    key: 'setVisibleInterface',
    value: function setVisibleInterface(nterface) {
      var roles = this.state.roles;


      switch (nterface) {
        default:
          return _react2.default.createElement(_RoleSelector.RoleSelector, { roles: roles });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var options = this.props.options;

      var user = this.state.user;
      var AppCentralizer = options.hideAppCentralizer ? '' : _react2.default.createElement('div', { className: 'olyauth__centralizerAppsIcon', style: _styles2.default.apps, onClick: this.setState({ showAppContainer: !this.state.showAppContainer, showContainer: false }) });
      var Interface = this.setVisibleInterface(this.state.interface);
      var Container = this.state.showContainer ? this.makePrimaryContainer(Interface, user) : '';
      var AppContainer = this.state.showAppContainer && !options.hideAppCentralizer ? this.makeAppContainer(_react2.default.createElement(
        _AppMenu.AppMenu,
        { apps: this.state.apps, parentStyles: _styles2.default, user: user },
        ' '
      ), user) : '';
      var profileIsDefault = user.profile.indexOf('default_profile.jpg') > -1;
      var profileImg = profileIsDefault ? _react2.default.createElement(
        'p',
        { style: { background: options.brandingColor } },
        user.email.charAt(0).toUpperCase()
      ) : _react2.default.createElement('img', { style: _styles2.default.gravatar, src: user.profile, alt: user.name });
      var gravatarClassnames = profileIsDefault ? 'olyauth__centralizerGravatar olyauth__centralizerGravatar--cssGravatar' : 'olyauth__centralizerGravatar';

      user.name = (user.given_name ? user.given_name : '') + ' ' + (user.family_name ? user.family_name : '');

      return _react2.default.createElement(
        'div',
        { className: CENTRALIZER_ID, id: 'olyauthCentralizer', style: _styles2.default.olyauth__centralizer },
        _react2.default.createElement(
          'div',
          { className: 'olyauth__centralizerInner', style: _styles2.default.olyauth__centralizerInner },
          AppCentralizer,
          _react2.default.createElement(
            'div',
            { className: gravatarClassnames, style: _styles2.default.entry, onClick: this.setState({ showContainer: !this.state.showContainer, showAppContainer: false }) },
            profileImg
          ),
          Container,
          AppContainer
        )
      );
    }
  }, {
    key: '_addStyleToHead',
    value: function _addStyleToHead(css) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');

      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  }]);

  return Centralizer;
}(_react.Component);