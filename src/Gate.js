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
  document.addEventListener('olySdkInitDataReady', ()=>{
    utils.options = options; 
  
    if (window.Oly) {
      // Merge our options into the sdk options
      window.Oly.options = Object.assign({}, window.Oly.options, options);
      window.Oly.UI = new UIController(options);

      if(window.Oly.Permissions.loggedIn()){
        window.Oly.UI.showCentralizer();
      }
    } 
  
    console.log(`${pjson.name} | version ${pjson.version}`);
  });
} 

export {
  Gate
};