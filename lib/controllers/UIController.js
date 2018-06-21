'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Centralizer = require('../components/Centralizer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CONTROLS interfacing with UI functionality ie. show/hide centralizer
 */
var UIController = exports.UIController = function () {
  function UIController(options) {
    _classCallCheck(this, UIController);

    this.options = options;
  }

  /**
  * CREATES an instance of the centralizer
  * Centralizer is the user avatar and app centralizer that get put in the top corner of the user's screen.
  */


  _createClass(UIController, [{
    key: 'showCentralizer',
    value: function showCentralizer(user, roles, apps) {
      var self = this;
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

      // Get the wrapper we just placed on the DOM
      var $injectElem = document.getElementById('olyauth__centralizer');

      if ($injectElem && user) {
        _reactDom2.default.render(_react2.default.createElement(_Centralizer.Centralizer, { user: user, apps: apps, roles: roles, options: this.options }), $injectElem);
      }
    }

    /**
    * HOOK for destroying the centralizer.
    */

  }, {
    key: 'hideCentralizer',
    value: function hideCentralizer() {
      var $injectElem = document.getElementById('olyauth__centralizer');

      if ($injectElem) {
        document.body.removeChild($injectElem);
      }
    }
  }]);

  return UIController;
}();