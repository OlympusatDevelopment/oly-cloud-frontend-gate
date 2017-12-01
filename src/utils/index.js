import Promise from 'bluebird';
import _ from 'underscore';
// import axios from 'axios';
var xhr = require("xhr");
import memoize from 'fast-memoize';

import {
  OPTIONS_LS_KEY,
  INTERFACE_MESSAGE
} from './constants';
import * as constants from './constants';

let options = JSON.parse(localStorage.getItem(OPTIONS_LS_KEY)) || (window.Oly ? window.Oly.options : null);

// const call = memoize((url,data,key)=>new Promise((resolve,reject)=>{
const call = (url, data, opts = {}) => new Promise((resolve, reject) => {
  //Reason :  // Re establish options if needed
  if (!options) {
    options = JSON.parse(localStorage.getItem(OPTIONS_LS_KEY)) || (window.Oly ? window.Oly.options : null);
  }
 
  const debugLogger = options && options.debugMode ? console.log : () => { };

  window.Oly.Session.checkAndOrRenewToken()
    .then(rq)
    .catch(resolve);

  // Only allow tokened requests. Non-token requests will be rejected by the API
  function rq(token) {
    const method = opts.method || 'POST';
    const key = opts.key;// For returning the proper graphql request structure
    const baseHeaders = {
      'Content-type': 'application/json',
      'Authorization': token
    };
    const headers = opts.hasOwnProperty('headers')
      ? opts.headers
      : baseHeaders;

    debugLogger('SDK ARGS', url, key, JSON.stringify(data), opts);

    if (token) {
      xhr(url, {
        method,
        url,
        body: (opts.hasOwnProperty('raw') && opts.raw) ? data : JSON.stringify(data) || '',
        headers
      }, (err, res, body) => {
        if (err) {
          debugLogger('SDK CALL ERROR **** ', err.toString(), typeof err, err.Error, url, data, opts);

          if (err.toString().indexOf('Error: Network Error') > -1) {
            resolve({ Error: err });
          } else if (err.toString().indexOf('Error: [object ProgressEvent]') > -1) {
            // This is an API Gateway timeout
            resolve({ Error: err });
          } else {
            resolve({ Error: err });
          }

          return false;
        }

        let response = body;
        try {
          response = JSON.parse(body)
        } catch (e) { }

        // publish responses to the observable Subject
        if (window && window.Oly && window.Oly.$tream) {
          window.Oly.$tream.next(response);
        }

        debugLogger('SDK CALL RESPONSE ', key, response);
        if (response) {
          if (response.hasOwnProperty('data')) {
            if (response.data.hasOwnProperty('message') && response.message === 'Identity token has expired') {
              resolve(response.data.message);
              return true;
            } else if (response.data.hasOwnProperty('errorMessage') || response.data.hasOwnProperty('errors')) {
              resolve({ Error: response.data.errorMessage || response.data.errors, request: data });
            } else if (response.data.hasOwnProperty('data')) {
              // Attempt to handle singular and plural version of key
              if (key && response.data.data.hasOwnProperty(key) || key && response.data.data.hasOwnProperty(key.slice(0, -1))) {
                if (response.data.data[key.slice(0, -1)]) {
                  resolve(response.data.data[key.slice(0, -1)]);
                } else {
                  resolve(response.data.data[key]);
                }
                return true;
              } else {
                resolve(response.data.data);
                return true;
              }
            }
            else {
              // Attempt to handle singular and plural version of key
              if (key && response.data.hasOwnProperty(key) || key && response.data.hasOwnProperty(key.slice(0, -1))) {
                if (response.data[key.slice(0, -1)]) {
                  resolve(response.data[key.slice(0, -1)]);
                } else {
                  resolve(response.data[key]);
                }
                return true;
              } else {
                resolve(response.data);
                return true;
              }
            }
          } else {
            resolve(response);
            return true;
          }
        } else {
          resolve({ Error: 'sdk call error', request: data });
        }
      });
    } else {
      resolve({ Error: 'Client Token is null. Reauthenticate.' });
    }
  }
});

//USAGE: import utils,{l} from './utils';
export const l = window.location.hostname === 'localhost' ? console.log : () => { };

export default {
  constants,
  options: undefined,
  OlyAuthMeta: {
    logo: options ? options.logo : '',
    brandingColor: options ? options.brandingColor : '',
    title: options ? options.title : ''
  },

  call: (url, data, opts) => call(url, data, opts),// memoized requests

  form: {
    diffPasswords(p1, p2) {
      return p1 === p2;
    },
    parse(form) {
      const $inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));// COnvert to iterable array
      let obj = {};

      $inputs.forEach(input => {
        const name = input.getAttribute('name');

        // If it has a name, send it to our object
        if (name) {
          obj[name.split('.')[1]] = input.value;
        }
      });

      return obj;
    }
  },

	/**
	 * Used for user feedback after a form submit
	 * Fires the message event to the parent to uinstruct it display the Message component
	 * @param message
	 * @param subMessage
	 */
  displaySuccessFailMessage(message, subMessage) {
    let event = document.createEvent('Event');

    window.location.href = `${document.location.origin}/auth#slug=${INTERFACE_MESSAGE}`;

    event.initEvent('interfaceChange', true, true);
    event.slug = INTERFACE_MESSAGE;
    event.message = message;
    event.subMessage = subMessage;

    document.dispatchEvent(event);
  },

  handleLinkClick(e) {
    e.preventDefault();
    const $target = e.target,
      link = $target.getAttribute('href');

		/**
		 * Set the url & fire an event to be picked up by the parent component to
		 * switch the interface according to the link clicked
		 * @type {string}
		 */
    window.location.href = document.location.origin + link;
    let event = document.createEvent('Event');
    event.initEvent('interfaceChange', true, true);
    event.slug = link.split('#slug=')[1];

    document.dispatchEvent(event);
  },

	/**
	 * Change the Gate interface
	 * @param slug
	 */
  sendToInterface(slug, data) {
		/**
		 * Set the url & fire an event to be picked up by the parent component to
		 * switch the interface according to the link clicked
		 * @type {string}
		 */
    window.location.href = `${document.location.origin}/auth#slug=${slug}`;
    let event = document.createEvent('Event');
    event.initEvent('interfaceChange', true, true);
    event.slug = slug;

    if (data) {
      event.d = data;
    }

    document.dispatchEvent(event);
  },

  removeQuotesFromJSONKeys(str) {
    return str.replace(/\"([^(\")"]+)\":/g, "$1:");
  },

  getMessageFromOptions(key) {
    return (window.Oly
      && window.Oly.options
      && window.Oly.options.messages
      && window.Oly.options.messages[key])
      ? window.Oly.options.messages[key]
      : false;
  },

  getTitleFromOptions(rootKey, key) {
    return (window.Oly
      && window.Oly.options
      && window.Oly.options.titles
      && window.Oly.options.titles[rootKey]
      && window.Oly.options.titles[rootKey][key])
      ? window.Oly.options.titles[rootKey][key]
      : false;
  }
};