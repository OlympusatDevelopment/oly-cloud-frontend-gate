/**
 * Handles interfacing with UI functionality ie. show/hide gate & centralizer
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from '../components/Centralizer';
import {
  Events,
  Controllers,
  Models 
} from '@olympusat/oly-client-sdk';

const { UserController } = Controllers;
const { AppsModel } = Models; 

export function UIController(options) {
  const userController = new UserController(options);
  const appsModel = new AppsModel(options);
  const events = new Events(options);

  /**
 * Centralizer is the user avatar and decentralized app centralizer that get put in the top corner of the user's screen.
 */
  this.showCentralizer = () => {
    let self = this,
      wrapper = document.createElement("div"),
      script = document.createElement('script');

    wrapper.id = 'olyauth__centralizer';
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.right = '0';

    script.type = 'text/javascript';
    script.src = 'https://use.fontawesome.com/33c67670ff.js';// Includes fontawesome, a dependency of the Centralizer component

    document.body.appendChild(script);
    document.body.appendChild(wrapper);

    // Get the user before we render anything
    userController.getCurrentUser()
      .then(user => {
        user.profile = user.picture;// Map for Legacy
        return appsModel.listActive()
          .then(apps => {
            const $injectElem = document.getElementById('olyauth__centralizer');

            // console.log('SDK USer',user,apps);
            if ($injectElem) {
              ReactDOM.render(<Centralizer user={user} apps={apps} options={options} />, $injectElem);

              events.onCentralizerShow({ user, apps });//HOOK
            }
          });
      });
  };

  this.hideCentralizer = () => {
    const $injectElem = document.getElementById('olyauth__centralizer');

    if ($injectElem) {
      document.body.removeChild($injectElem);

      events.onCentralizerHide(true);//HOOK 
    }
  };

  return {
    showCentralizer: this.showCentralizer,
    hideCentralizer: this.hideCentralizer
  }
}