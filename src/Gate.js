import { UIController } from './controllers/UIController';
import {
  Controllers,
  utils
} from '@olympusat/oly-client-sdk';

const { 
  GateController, 
  UserController, 
  SessionController,
  PermissionsController,
  AuthController,
} = Controllers; 
const pjson = require('../package.json');

/** 
 * Entry point for beginning the Gate behaviors & Auth flows
 * the config argument is the main configuration object passed to the instantitation
 * @param options
 * @constructor
 */
function Gate(options) {
  utils.options = options; 
  // const debugLogger = options.debugMode ? console.log : () => { };

  if (window.Oly) {
    // Merge our options into the sdk options
    window.Oly.options = Object.assign({}, window.Oly.options, options);

    window.Oly.UI = new UIController(options);
  }

  // if(options.debugMode){ 
  console.log(`${pjson.name} | version ${pjson.version}`);
  // }

	/** 
	 * Show the gate if the user isn't logged in.
   * Defer 1 second to allow time for token refresh to kick in on page refreshes.
   * @todo Move the triggering of show and hide to an event
	 */
  const revealGate = (options, window) => {
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

export {
  Gate
};