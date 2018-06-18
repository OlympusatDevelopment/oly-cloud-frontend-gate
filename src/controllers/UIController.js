/**
 * Handles interfacing with UI functionality ie. show/hide gate & centralizer
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from '../components/Centralizer';

export function UIController(options) {

  /**
 * Centralizer is the user avatar and decentralized app centralizer that get put in the top corner of the user's screen.
 */
  this.showCentralizer = (user, apps) => {
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

    const $injectElem = document.getElementById('olyauth__centralizer');
    if ($injectElem) {
      if (user) {
        ReactDOM.render(<Centralizer user={user} apps={apps} options={options} />, $injectElem);
      }
    }
  };

  this.hideCentralizer = () => {
    const $injectElem = document.getElementById('olyauth__centralizer');

    if ($injectElem) {
      document.body.removeChild($injectElem);
    }
  };

  return {
    showCentralizer: this.showCentralizer,
    hideCentralizer: this.hideCentralizer
  }
}