import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from '../components/Centralizer';

/**
 * CONTROLS interfacing with UI functionality ie. show/hide centralizer
 */
export class UIController{
  constructor(options){
    this.options = options;
  }

  /**
  * CREATES an instance of the centralizer
  * Centralizer is the user avatar and app centralizer that get put in the top corner of the user's screen.
  */
  showCentralizer(user, roles, apps){
    let self = this;
    let wrapper = document.createElement("div");
    let script = document.createElement('script');

    wrapper.id = 'olyauth__centralizer';
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.right = '0';

    script.type = 'text/javascript';
    script.src = 'https://use.fontawesome.com/33c67670ff.js';// Includes fontawesome, a dependency of the Centralizer component

    document.body.appendChild(script);
    document.body.appendChild(wrapper);

    // Get the wrapper we just placed on the DOM
    const $injectElem = document.getElementById('olyauth__centralizer');

    if ($injectElem && user) {
      ReactDOM.render(<Centralizer user={user} apps={apps} roles={roles} options={this.options} />, $injectElem);
    }
  }

  /**
  * HOOK for destroying the centralizer.
  */
  hideCentralizer(){
    const $injectElem = document.getElementById('olyauth__centralizer');

    if ($injectElem) {
      document.body.removeChild($injectElem);
    }
  }
}
