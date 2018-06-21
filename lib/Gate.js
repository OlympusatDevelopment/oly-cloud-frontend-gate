'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIController = require('./controllers/UIController');

var _UIController2 = _interopRequireDefault(_UIController);

var _olyClientSdk = require('@olympusat/oly-client-sdk');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * ENTRY POINT for beginning the Gate behaviors & Auth flows
 * the config argument is the main configuration object passed to the instantitation
 * @param options 
 * @constructor  
 */
var Gate = function () {
  function Gate(options) {
    _classCallCheck(this, Gate);

    this.bootstrap(options);
  }

  _createClass(Gate, [{
    key: 'bootstrap',
    value: function bootstrap(options) {
      document.addEventListener(_olyClientSdk.CONSTANTS.SDK_DATA_READY_EVT_NAME, function () {
        _olyClientSdk.utils.options = options; //sdk Options

        if (window.Oly) {
          // Merge our options into the sdk options
          window.Oly.options.ui = options;
          window.Oly.UI = new _UIController2.default(options);

          // If the parent event fired then we can assume we have logged in. It's safe to use the user object.
          // !@todo reenable user check after sdk api is functioning
          // if (window.Oly.meta.user) { 
          window.Oly.UI.showCentralizer(window.Oly.meta.user, window.Oly.meta.roles, window.Oly.meta.activeApps);
          // }
        }

        if (window.Oly && window.Oly.debugMode) {
          var pjson = require('../package.json');

          console.log(pjson.name + ' | version ' + pjson.version);
        }
      });
    }
  }]);

  return Gate;
}();

exports.default = Gate;