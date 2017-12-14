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
  _olyClientSdk.utils.options = options;
  // const debugLogger = options.debugMode ? console.log : () => { };

  if (window.Oly) {
    // Merge our options into the sdk options
    window.Oly.options = Object.assign({}, window.Oly.options, options);

    window.Oly.UI = new _UIController.UIController(options);
  }

  // if(options.debugMode){ 
  console.log(pjson.name + ' | version ' + pjson.version);
  // }

  /** 
   * Show the gate if the user isn't logged in.
    * Defer 1 second to allow time for token refresh to kick in on page refreshes.
    * @todo Move the triggering of show and hide to an event
   */
  var revealGate = function revealGate(options, window) {
    // debugLogger('** ROG : revealGate Ran',
    //   window.Oly && window.Oly.Permissions.loggedIn(),
    //   window.Oly.Permissions.loggedIn(),
    //   window.Oly
    // );
    if (window.Oly && window.Oly.Permissions.loggedIn()) {
      // debugLogger('** ROG : revealGate Ran showCentralizer');
      window.Oly.UI.showCentralizer();
    }
  };

  // debugLogger('** ROG : Gate Initialized : Logged in? -> ',window.Oly.Permissions.loggedIn());
  setTimeout(function () {
    // debugLogger('** ROG : Reveal Gate Started after 2 sec. | Logged in? -> ',window.Oly.Permissions.loggedIn());
    revealGate(options, window);
  }, 2000);
}

exports.Gate = Gate;