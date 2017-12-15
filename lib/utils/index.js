'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var options = JSON.parse(localStorage.getItem(_constants.OPTIONS_LS_KEY)) || (window.Oly ? window.Oly.options : null);

exports.default = {
  constants: constants,
  options: undefined,
  OlyAuthMeta: {
    logo: options ? options.logo : '',
    brandingColor: options ? options.brandingColor : '',
    title: options ? options.title : ''
  },

  form: {
    diffPasswords: function diffPasswords(p1, p2) {
      return p1 === p2;
    },
    parse: function parse(form) {
      var $inputs = Array.prototype.slice.call(document.getElementsByTagName('input')); // COnvert to iterable array
      var obj = {};

      $inputs.forEach(function (input) {
        var name = input.getAttribute('name');

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
  displaySuccessFailMessage: function displaySuccessFailMessage(message, subMessage) {
    var event = document.createEvent('Event');

    window.location.href = document.location.origin + '/auth#slug=' + _constants.INTERFACE_MESSAGE;

    event.initEvent('interfaceChange', true, true);
    event.slug = _constants.INTERFACE_MESSAGE;
    event.message = message;
    event.subMessage = subMessage;

    document.dispatchEvent(event);
  },
  handleLinkClick: function handleLinkClick(e) {
    e.preventDefault();
    var $target = e.target,
        link = $target.getAttribute('href');

    /**
     * Set the url & fire an event to be picked up by the parent component to
     * switch the interface according to the link clicked
     * @type {string}
     */
    window.location.href = document.location.origin + link;
    var event = document.createEvent('Event');
    event.initEvent('interfaceChange', true, true);
    event.slug = link.split('#slug=')[1];

    document.dispatchEvent(event);
  },


  /**
   * Change the Gate interface
   * @param slug
   */
  sendToInterface: function sendToInterface(slug, data) {
    /**
     * Set the url & fire an event to be picked up by the parent component to
     * switch the interface according to the link clicked
     * @type {string}
     */
    window.location.href = document.location.origin + '/auth#slug=' + slug;
    var event = document.createEvent('Event');
    event.initEvent('interfaceChange', true, true);
    event.slug = slug;

    if (data) {
      event.d = data;
    }

    document.dispatchEvent(event);
  },
  removeQuotesFromJSONKeys: function removeQuotesFromJSONKeys(str) {
    return str.replace(/\"([^(\")"]+)\":/g, "$1:");
  },
  getMessageFromOptions: function getMessageFromOptions(key) {
    return window.Oly && window.Oly.options && window.Oly.options.messages && window.Oly.options.messages[key] ? window.Oly.options.messages[key] : false;
  },
  getTitleFromOptions: function getTitleFromOptions(rootKey, key) {
    return window.Oly && window.Oly.options && window.Oly.options.titles && window.Oly.options.titles[rootKey] && window.Oly.options.titles[rootKey][key] ? window.Oly.options.titles[rootKey][key] : false;
  }
};