'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gate = undefined;

var _UIController = require('./controllers/UIController');

var _olyClientSdk = require('@olympusat/oly-client-sdk');

var GateController = _olyClientSdk.Controllers.GateController,
    UserController = _olyClientSdk.Controllers.UserController,
    SessionController = _olyClientSdk.Controllers.SessionController,
    PermissionsController = _olyClientSdk.Controllers.PermissionsController,
    AuthController = _olyClientSdk.Controllers.AuthController;

var pjson = require('../package.json');

/** 
 * Entry point for beginning the Gate behaviors & Auth flows
 * the config argument is the main configuration object passed to the instantitation
 * @param options
 * @constructor
 */
function Gate(options) {
  document.addEventListener('olySdkInitDataReady', function () {
    _olyClientSdk.utils.options = options;

    if (window.Oly) {
      // Merge our options into the sdk options
      window.Oly.options = Object.assign({}, window.Oly.options, options);
      window.Oly.UI = new _UIController.UIController(options);

      // If the parent event fired then we can assume we have logged in. It's safe to use the user object.
      if (window.Oly.meta.user) {
        window.Oly.UI.showCentralizer(window.Oly.meta.user, window.Oly.meta.activeApps);
      }
    }

    console.log(pjson.name + ' | version ' + pjson.version);
  });
}

exports.Gate = Gate;