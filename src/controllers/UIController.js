import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from 'src/components/Centralizer';
import { BrowserDetectThresholdUI } from 'src/components/BrowserDetectThresholdUI';
import {CENTRALIZER_ID, BROWSER_DETECT_ID, BROWSER_DETECT_THRESHOLD_HIDE_FOREVER_LS_KEY} from 'src/utils/constants';
import utils from 'src/utils';

const _importedTheme = 'semanticui';
let notyOptions = {
  layout: 'bottomRight',
  type: 'info',
  theme: _importedTheme,
  animation: {
    open: 'animated bounceInRight', // Animate.css class names
    close: 'animated bounceOutRight' // Animate.css class names
  },
  timeout: 3000,
  progressBar: true
};

/**
 * CONTROLS interfacing with UI functionality ie. show/hide centralizer
 */
export default class UIController{
  constructor(options){
    this.options = options;
    this.showCentralizer = this.showCentralizer.bind(this);
    this.hideCentralizer = this.hideCentralizer.bind(this);
		this.showBrowserThresholdUI = this.showBrowserThresholdUI.bind(this);
		this.hideBrowserThresholdUI = this.hideBrowserThresholdUI.bind(this);
    this.notify = this.notify.bind(this);
   
    if (this.options.notifications) {
      notyOptions = Object.assign(
        {},
        notyOptions, 
        this.options.notifications, 
        {theme: _importedTheme}// Protect the theme because stylesheets have to be programmaticcaly imported in the styles.scss file
      );
    }

    utils.noty = require('noty');

    // If realtime is enabled on the sdk, init noty for push notifications
    if (window.Oly.options.realtime) {
      this._bootstrapPushNotifications(utils.noty);
    }
  }

  /**
   * INCLUDES the notification library and connects it to the socket stream.
   * STYLES are imported in the styles.scss file.
   * @param {*} Noty 
   */
  _bootstrapPushNotifications(Noty) {
    if (window.Oly.$tream) {
      window.Oly.$tream.subscribe(e => {
        if (e.header && e.header.name === 'notification') {
          if (e.payload && e.payload.message) {
            notyOptions.text = e.payload.message;

            new Noty(notyOptions).show();
          }
        }
      })
    }
  }

  /**
   * API for triggering a notification from the window.Oly.UI.notify command.
   * options arg takes a noty config object
   * @param {*} message 
   * @param {*} options 
   */
  notify(text, options={}) {
    new utils.noty(Object.assign(notyOptions, options, {text})).show();
  }
  
  
  getCentralizerInstance() {
  	return document.getElementById(CENTRALIZER_ID);
	}

  /**
  * CREATES an instance of the centralizer 
  * Centralizer is the user avatar and app centralizer that get put in the top corner of the user's screen.
  */
  showCentralizer(user, roles, apps, options){
    let self = this;
    let wrapper = document.createElement("div");
    let script = document.createElement('script');

    wrapper.id = CENTRALIZER_ID; 

    // Handle styles
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.right = '0';

    if(options.styles) {
      Object.entries(options.styles)
        .forEach(([style, value]) => wrapper.style[style] = value)
    }

    script.type = 'text/javascript';
    script.src = 'https://use.fontawesome.com/33c67670ff.js';// Includes fontawesome, a dependency of the Centralizer component

    document.body.appendChild(script);
    document.body.appendChild(wrapper);

    // Get the wrapper we just placed on the DOM
    const $injectElem = document.getElementById(CENTRALIZER_ID);
    // console.log('CENTRALIZER', user, apps, roles);

    if ($injectElem && user) {
      ReactDOM.render(<Centralizer user={user} apps={apps} roles={roles} options={this.options} />, $injectElem);
    }  
  } 

  /**
  * HOOK for destroying the centralizer.
  */
  hideCentralizer(){
    const $injectElem = document.getElementById(CENTRALIZER_ID);

    if ($injectElem) {
      document.body.removeChild($injectElem);
    }
  }
	
	/**
	 * RETURNS an in DOM element instance of the browser threshold ui.
	 */
	getBrowserThresholdUIInstance() {
		return document.getElementById(BROWSER_DETECT_ID);
	}
	/**
	 * CREATES an instance of the browser threshold ui
	 * Browser threshould ui display a warning alert when user's current browser version
	 *  is below/lt the configured browser detect threshold.
	 */
  showBrowserThresholdUI(threshold, browser, app, options) {
    const { display, versions, text } = threshold;
    const hideForever = window.Oly.utils.fun.storage_getItem(BROWSER_DETECT_THRESHOLD_HIDE_FOREVER_LS_KEY) || false;
    
		if (hideForever) {
    	console.info('User opted to hide browser upgrade notification forever');
			return false;
		}
    
		if(!Array.isArray(display)) {
			console.warn('browser detect threshold display must be an Array of display values.');
			return false;
		}
		
		if (display.length === 0) {
			console.warn('browser detect threshold display array is empty.');
		  return false;
    }
    
    const message = text || utils.browserDetect.getBrowserUIMessage(versions, browser, app)[0] || false;
		
    if (message) {
			display.map(value => {
				const _value = value.toLowerCase();
				if (_value === 'console') {
					console.log(message)
				}
		
				if (_value === 'ui') {
			
					let script = document.createElement('script');
					let wrapper = document.createElement('div');
					wrapper.id = BROWSER_DETECT_ID;
			
					script.type = 'text/javascript';
					script.src = 'https://use.fontawesome.com/33c67670ff.js';// Includes fontawesome, a dependency of the Centralizer component
					document.body.appendChild(script);
					document.body.prepend(wrapper);
			
					// Get the wrapper we just placed on the DOM
					const $injectElem = document.getElementById(wrapper.id);
			
					if ($injectElem) {
						ReactDOM.render(<BrowserDetectThresholdUI message={message}
															cssStyle={options.threshold.style}
															hide={this.hideBrowserThresholdUI}/>, $injectElem);
					}
			
				}
			});
		}
	}
	
	/**
	 * HOOK for destroying the browser threshold ui.
	 */
	hideBrowserThresholdUI(hideForEver){
		const $injectElem = document.getElementById(BROWSER_DETECT_ID);
		
		if ($injectElem) {
			document.body.removeChild($injectElem);
			if (hideForEver) {
				window.Oly.utils.fun.storage_setItem(BROWSER_DETECT_THRESHOLD_HIDE_FOREVER_LS_KEY, hideForEver)
			}
			
			// HACK: this is a temporary solution to move the top position
			// of the centralizer DOM instance.
			document.getElementById(CENTRALIZER_ID).style.top = this.options.styles.top;
		}
	}
	
	showBrowserInfoUI(display, browser) {
		if (!Array.isArray(display)) {
			throw new Error('browser detect display must be an Array of display values.');
			return false;
		}
		
		display.map(value => {
			const _value = value.toLowerCase();
			if (_value === 'console') {
				console.log(`browser detect: ${browser.name} v${browser.version}`)
			}
			if (_value === 'ui') {
				// Add browser detect in DOM
				console.log('display browser detect on DOM!');
			}
		});
	}
}
