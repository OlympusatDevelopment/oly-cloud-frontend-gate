import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from 'src/components/Centralizer';
import {CENTRALIZER_ID} from 'src/utils/constants';
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

  /**
  * CREATES an instance of the centralizer
  * Centralizer is the user avatar and app centralizer that get put in the top corner of the user's screen.
  */
  showCentralizer(user, roles, apps, options){
    let self = this;
    let wrapper = document.createElement("div");
    let script = document.createElement('script');

    wrapper.id = CENTRALIZER_ID;
    wrapper.style.position = 'absolute';
    wrapper.style.top = (options.position && options.position.top) ? options.position.top.toString() : '0';
    wrapper.style.right = (options.position && options.position.right) ? options.position.right.toString() : '0';

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
}
