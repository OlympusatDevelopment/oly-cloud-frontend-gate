'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIController = UIController;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Centralizer = require('../components/Centralizer');

var _olyClientSdk = require('@olympusat/oly-client-sdk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handles interfacing with UI functionality ie. show/hide gate & centralizer
 */
var UserController = _olyClientSdk.Controllers.UserController;
var AppsModel = _olyClientSdk.Models.AppsModel;
function UIController(options) {
  var _this = this;

  var userController = new UserController(options);
  var appsModel = new AppsModel(options);
  var events = new _olyClientSdk.Events(options);

  /**
  * Centralizer is the user avatar and decentralized app centralizer that get put in the top corner of the user's screen.
  */
  this.showCentralizer = function (user, apps) {
    var self = _this;
    var wrapper = document.createElement("div");
    var script = document.createElement('script');

    wrapper.id = 'olyauth__centralizer';
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.right = '0';

    script.type = 'text/javascript';
    script.src = 'https://use.fontawesome.com/33c67670ff.js'; // Includes fontawesome, a dependency of the Centralizer component

    document.body.appendChild(script);
    document.body.appendChild(wrapper);

    var $injectElem = document.getElementById('olyauth__centralizer');
    if ($injectElem) {
      if (user) {
        _reactDom2.default.render(_react2.default.createElement(_Centralizer.Centralizer, { user: user, apps: apps, options: options }), $injectElem);

        events.onCentralizerShow({ user: user, apps: apps }); //HOOK
      }
    }
  };

  this.hideCentralizer = function () {
    var $injectElem = document.getElementById('olyauth__centralizer');

    if ($injectElem) {
      document.body.removeChild($injectElem);

      events.onCentralizerHide(true); //HOOK 
    }
  };

  return {
    showCentralizer: this.showCentralizer,
    hideCentralizer: this.hideCentralizer
  };
}