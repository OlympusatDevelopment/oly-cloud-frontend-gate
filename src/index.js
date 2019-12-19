import UIController from 'src/controllers/UIController';
import { CONSTANTS } from '@olympusat/oly-cloud-frontend-sdk';
import utils from 'src/utils';
import 'src/style.scss';
 
const defaultOptions = {
  brandingColor: '#103463',
  centralizerAppsIconColor: '#efefef',
  hideAppCentralizer: false,
  profileSettingsLink: false, // or url to link to
  reloadPageOnRoleChange: true,
  notifications: {// All noty options can be passed in here..
    layout: 'bottomRight',
    type: 'info',
    animation: {
      open: 'animated bounceInRight', // Animate.css class names
      close: 'animated bounceOutRight' // Animate.css class names
    },
    timeout: 3000,
    progressBar: true
  },
  styles: {top: '12px', right: 0, position: 'absolute'} // Where the ui lays out absolute to the page
};
 
/** 
 * ENTRY POINT for beginning the Gate behaviors & Auth flows...
 * the config argument is the main configuration object passed to the instantitation
 * @param options  
 * @constructor       
 */ 
export default class Gate{
  constructor(_options = {}){ 
    const options = Object.assign({}, defaultOptions, _options);

    this.bootstrap(options);
  }
 
  bootstrap(options){
    document.addEventListener(CONSTANTS.SDK_DATA_READY_EVT_NAME, () => {
      utils.options = options;
      
      if (window.Oly) {

        // Merge our options into the sdk options
        window.Oly.options.ui = options;
        window.Oly.UI = new UIController(options); 
  
        // If the parent event fired then we can assume we have logged in. It's safe to use the user object.
        if (window.Oly.meta.user) { 
          window.Oly.UI.showCentralizer(
            window.Oly.meta.user,
            window.Oly.meta.roles,
            window.Oly.meta.apps,
            options
          );
        }
        
        // Display browser information from sdk options
        const { browserDetect } = window.Oly.options;
        if (browserDetect) {
          const { display, threshold } = browserDetect;
          const { browserdetect } = window.Oly.utils.fun;
          
          // get broswerDetect display
          if (display) {
						window.Oly.UI.showBrowserInfoUI(display, browserdetect)
					}
					
					if(threshold) {
            window.Oly.UI.showBrowserThresholdUI(threshold, browserdetect, window.Oly.meta.app, browserDetect);
          }
          
        }
      }
  
      if (window.Oly && window.Oly.debugMode) {
        const pjson = require('../package.json');
        
        console.log(`${pjson.name} | version ${pjson.version}`);
      }
    });
  }
} 
   