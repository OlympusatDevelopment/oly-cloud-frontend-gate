import UIController from './controllers/UIController';
import { utils, CONSTANTS } from '@olympusat/oly-client-sdk';

/** 
 * ENTRY POINT for beginning the Gate behaviors & Auth flows
 * the config argument is the main configuration object passed to the instantitation
 * @param options 
 * @constructor      
 */ 
export default class Gate{
  constructor(options){
    this.bootstrap(options);
  }
 
  bootstrap(options){
    document.addEventListener(CONSTANTS.SDK_DATA_READY_EVT_NAME, () => {
      utils.options = options; //sdk Options
      
      if (window.Oly) {
        // Merge our options into the sdk options
        window.Oly.options.ui = options;
        window.Oly.UI = new UIController(options); 
  
        // If the parent event fired then we can assume we have logged in. It's safe to use the user object.
        // !@todo reenable user check after sdk api is functioning
        // if (window.Oly.meta.user) { 
          window.Oly.UI.showCentralizer(
            window.Oly.meta.user,
            window.Oly.meta.roles,
            window.Oly.meta.activeApps 
          );
        // }
      }
  
      if (window.Oly && window.Oly.debugMode) {
        const pjson = require('../package.json');
        
        console.log(`${pjson.name} | version ${pjson.version}`);
      }
    });
  }
} 
   