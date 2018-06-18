import { 
  OPTIONS_LS_KEY
} from './constants';
import * as constants from './constants';

let options = JSON.parse(localStorage.getItem(OPTIONS_LS_KEY)) || (window.Oly ? window.Oly.options : null);

export default {
  constants,
  options,

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