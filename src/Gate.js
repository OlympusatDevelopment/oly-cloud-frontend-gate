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
  document.addEventListener('olySdkInitDataReady', () => {
    utils.options = options;
    console.log('OLY GATE', window.Oly, window.Oly.meta.user, window.Oly.Permissions.loggedIn());
    if (window.Oly) {
      // Merge our options into the sdk options
      window.Oly.options = Object.assign({}, window.Oly.options, options);
      window.Oly.UI = new UIController(options);

      // If the parent event fired then we can assume we have logged in. It's safe to use the user object.
      if (window.Oly.meta.user) {
        window.Oly.UI.showCentralizer(
          window.Oly.meta.user,
          window.Oly.meta.activeApps
        );
      }
    }

    console.log(`${pjson.name} | version ${pjson.version}`);
  });
}

export {
  Gate
};