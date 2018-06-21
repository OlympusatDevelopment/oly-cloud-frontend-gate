'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Centralizer = require('../components/Centralizer');

var _constants = require('../utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dummy = {
  user: {
    "id": "1bb3d0c0-62d4-4d08-8cb8-5c32acc56182",
    "olyId": "USR-BJWibxpWOz",
    "username": "adam@olympusat.com",
    "email": "adam@olympusat.com",
    "name": "Adam",
    "lastname": "Gedneys",
    "organization": {
      "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
      "name": "Olympusat"
    },
    "profileImage": "resources/users/adam@olympusat.com/paki.png",
    "roles": [],
    "groups": [{
      "id": "56cb0600-8a50-4ba5-afb9-f27103302168",
      "name": "Portal User"
    }, {
      "id": "f45ce7f8-37c2-43ed-a091-b44dd997dc6c",
      "name": "Portal Catalog Meta"
    }, {
      "id": "842f2f8f-6fc0-4caf-963f-30507aeb8d14",
      "name": "Portal Contracts Admin"
    }, {
      "id": "64a42400-6450-4498-8be5-2730932f873b",
      "name": "System Admin"
    }, {
      "id": "46f7a144-dada-4479-8a30-a493f84c6226",
      "name": "Marketspace Seller"
    }, {
      "id": "03ea47b0-6cef-4a1b-823a-27e8d93ceaf2",
      "name": "Portal Contracts User"
    }, {
      "id": "cdd52187-d8f0-4f98-abf2-280f86b12bad",
      "name": "Portal Catalog Admin"
    }, {
      "id": "e1987895-893e-417b-9aea-4d36c42ee07e",
      "name": "Portal Admin"
    }],
    "lastOnline": "2018-06-21T16:34:08.994Z"
  },
  apps: [{
    "id": "1918987a-5603-4527-82b5-24bdd864c1ec",
    "name": "OLYHUB",
    "slug": "olyhub",
    "googleUaId": null,
    "description": "The primary Olyhub app for buying/selling content",
    "domain": "https://stage.olyhub.tv",
    "logo": "resources/apps/olyhub/olyhub_logo_v1_blackx120.png",
    "secret": null,
    "isActive": true
  }, {
    "id": "24a7bee8-52fc-480d-8994-5eb164c98c6d",
    "name": "ACCOUNTS",
    "slug": "accounts",
    "googleUaId": null,
    "description": "The primary accounts application entity used for platform wide account policy permission provisioning.",
    "domain": "https://account.olyhub.tv",
    "logo": "resources/apps/accounts/circlecompass.png",
    "secret": null,
    "isActive": true
  }, {
    "id": "3740cf87-57b4-463d-8ea8-0a6ef5f4e733",
    "name": "OLYHUB CATALOG",
    "slug": "olyhub-catalog",
    "googleUaId": null,
    "description": null,
    "domain": "http://catalog.olyhub.tv",
    "logo": "resources/apps/default_logo.png",
    "secret": null,
    "isActive": false
  }, {
    "id": "3ef08019-f18b-4d1d-9378-c1e1bd6aaaf6",
    "name": "PORTAL",
    "slug": "portal",
    "googleUaId": "UA-82580319-1",
    "description": "The Olympusat Portal",
    "domain": "http://portal.olympusat.tech",
    "logo": "resources/apps/portal/news.png",
    "secret": null,
    "isActive": true
  }, {
    "id": "5f524ba0-357c-4f01-a4dd-308facd8e47f",
    "name": "CLOUDPLAT MANAGEMENT",
    "slug": "cloudplat-management",
    "googleUaId": "UA-101546919-1",
    "description": "CloudPlat management app",
    "domain": "https://admin.oly.cloud",
    "logo": "resources/apps/cloudplat-management/briefcase.png",
    "secret": null,
    "isActive": true
  }, {
    "id": "64a8a64e-35d0-46d7-a9e5-cd0dd1f109c1",
    "name": "SAMPLE OF SAMPLES",
    "slug": "sample-of-samples",
    "googleUaId": null,
    "description": "testy mc testy test",
    "domain": "http://www.de.rp",
    "logo": "http://www.de.rp/lo.ggo",
    "secret": null,
    "isActive": true
  }, {
    "id": "83cce79b-d13d-4423-94e2-5f713f562205",
    "name": "DERPERY UPDATEDDDDDDD",
    "slug": "derp",
    "googleUaId": null,
    "description": null,
    "domain": "http://domaindomain.com",
    "logo": null,
    "secret": null,
    "isActive": true
  }, {
    "id": "92d5042b-a3b4-4e3f-92a9-01e597f517f6",
    "name": "SAMPLE",
    "slug": "sample",
    "googleUaId": null,
    "description": "Sample created app",
    "domain": "http://sample.com",
    "logo": null,
    "secret": null,
    "isActive": true
  }, {
    "id": "b5a08456-535e-484c-91b7-e2fdaf9c92f1",
    "name": "REPORTS",
    "slug": "reports",
    "googleUaId": null,
    "description": "Reports app",
    "domain": "http://analytics.oly.cloud",
    "logo": "resources/apps/reports/magnifyingglass.png",
    "secret": null,
    "isActive": true
  }, {
    "id": "bb87dca2-cf9f-4d6f-87d8-2abc5896af7c",
    "name": "DISTRIBUTION",
    "slug": "distribution",
    "googleUaId": null,
    "description": "Olympusat cloud-based distribution app",
    "domain": "https://distribution.olympusat.tech",
    "logo": "resources/apps/distribution/tv.png",
    "secret": null,
    "isActive": true
  }],
  roles: [{
    "id": "8aba3f93-d2be-40cc-8e32-2aeeffac2e87",
    "name": "Testy mc test role",
    "organization": {
      "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
      "name": "Olympusat"
    },
    "defaultGroup": null,
    "groups": [{
      "id": "ffee375c-fb53-4978-a99b-b11be4996137",
      "name": "testy mc test sfsdfupdate group"
    }],
    "isActive": true
  }, {
    "id": "0000000000-d2be-40cc-8e32-2aeeffac2e87",
    "name": "Buyer Dummy",
    "organization": {
      "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
      "name": "Olympusat"
    },
    "defaultGroup": null,
    "groups": [{
      "id": "ffee375c-fb53-4978-a99b-b11be4996137",
      "name": "testy mc test sfsdfupdate group"
    }],
    "isActive": true
  }]
};
/**
 * CONTROLS interfacing with UI functionality ie. show/hide centralizer
 */

var UIController = function () {
  function UIController(options) {
    _classCallCheck(this, UIController);

    this.options = options;

    this.showCentralizer = this.showCentralizer.bind(this);
    this.hideCentralizer = this.hideCentralizer.bind(this);
  }

  /**
  * CREATES an instance of the centralizer
  * Centralizer is the user avatar and app centralizer that get put in the top corner of the user's screen.
  */


  _createClass(UIController, [{
    key: 'showCentralizer',
    value: function showCentralizer(user, roles, apps) {
      var self = this;
      var wrapper = document.createElement("div");
      var script = document.createElement('script');

      wrapper.id = _constants.CENTRALIZER_ID;
      wrapper.style.position = 'absolute';
      wrapper.style.top = '0';
      wrapper.style.right = '0';

      script.type = 'text/javascript';
      script.src = 'https://use.fontawesome.com/33c67670ff.js'; // Includes fontawesome, a dependency of the Centralizer component

      document.body.appendChild(script);
      document.body.appendChild(wrapper);

      // Get the wrapper we just placed on the DOM
      var $injectElem = document.getElementById(_constants.CENTRALIZER_ID);
      console.log('CENTRALIZER', user, apps, roles);

      // @todo comment user check back in after dev
      // if ($injectElem && user) {
      if ($injectElem) {
        _reactDom2.default.render(_react2.default.createElement(_Centralizer.Centralizer, { user: dummy.user, apps: dummy.apps, roles: dummy.roles, options: this.options }), $injectElem);
        // ReactDOM.render(<Centralizer user={user} apps={apps} roles={roles} options={this.options} />, $injectElem);
      }
    }

    /**
    * HOOK for destroying the centralizer.
    */

  }, {
    key: 'hideCentralizer',
    value: function hideCentralizer() {
      var $injectElem = document.getElementById(_constants.CENTRALIZER_ID);

      if ($injectElem) {
        document.body.removeChild($injectElem);
      }
    }
  }]);

  return UIController;
}();

exports.default = UIController;