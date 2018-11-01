import React from 'react';
import ReactDOM from 'react-dom';
import { Centralizer } from 'src/components/Centralizer';
import {CENTRALIZER_ID} from 'src/utils/constants';
import utils from 'src/utils';

// const dummy = {
//   user: {
//     "id": "1bb3d0c0-62d4-4d08-8cb8-5c32acc56182",
//     "olyId": "USR-BJWibxpWOz",
//     "assumedRole": "8aba3f93-d2be-40cc-8e32-2aeeffac2e87",
//     "username": "adam@olympusat.com",
//     "email": "adam@olympusat.com",
//     "name": "Adam",
//     "lastname": "Eli is mini-me",
//     "organization": {
//       "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
//       "name": "Olympusat"
//     },
//     "profileImage": "https://assets-prod.oly.cloud/resources/users/adam@olympusat.com/paki.png",
//     "roles": [],
//     "groups": [
//       {
//         "id": "56cb0600-8a50-4ba5-afb9-f27103302168",
//         "name": "Portal User"
//       },
//       {
//         "id": "f45ce7f8-37c2-43ed-a091-b44dd997dc6c",
//         "name": "Portal Catalog Meta"
//       },
//       {
//         "id": "842f2f8f-6fc0-4caf-963f-30507aeb8d14",
//         "name": "Portal Contracts Admin"
//       },
//       {
//         "id": "64a42400-6450-4498-8be5-2730932f873b",
//         "name": "System Admin"
//       },
//       {
//         "id": "46f7a144-dada-4479-8a30-a493f84c6226",
//         "name": "Marketspace Seller"
//       },
//       {
//         "id": "03ea47b0-6cef-4a1b-823a-27e8d93ceaf2",
//         "name": "Portal Contracts User"
//       },
//       {
//         "id": "cdd52187-d8f0-4f98-abf2-280f86b12bad",
//         "name": "Portal Catalog Admin"
//       },
//       {
//         "id": "e1987895-893e-417b-9aea-4d36c42ee07e",
//         "name": "Portal Admin"
//       }
//     ],
//     "lastOnline": "2018-06-21T16:34:08.994Z"
//   },
//   apps:[
//     {
//       "id": "1918987a-5603-4527-82b5-24bdd864c1ec",
//       "name": "OLYHUB",
//       "slug": "olyhub",
//       "googleUaId": null, 
//       "description": "The primary Olyhub app for buying/selling content",
//       "domain": "https://olyhub.tv",
//       "logo": "https://assets-prod.oly.cloud/resources/apps/olyhub/olyhub_logo_v1_blackx120.png",
//       "secret": null,
//       "isActive": true
//     },
//     {
//       "id": "3ef08019-f18b-4d1d-9378-c1e1bd6aaaf6",
//       "name": "PORTAL",
//       "slug": "portal",
//       "googleUaId": "UA-82580319-1",
//       "description": "The Olympusat Portal",
//       "domain": "http://portal.olympusat.tech",
//       "logo": "https://assets-prod.oly.cloud/resources/apps/portal/news.png",
//       "secret": null,
//       "isActive": true
//     },
//     {
//       "id": "5f524ba0-357c-4f01-a4dd-308facd8e47f",
//       "name": "CLOUDPLAT MANAGEMENT",
//       "slug": "cloudplat-management",
//       "googleUaId": "UA-101546919-1",
//       "description": "CloudPlat management app",
//       "domain": "https://admin.oly.cloud",
//       "logo": "https://assets-prod.oly.cloud/resources/apps/cloudplat-management/briefcase.png",
//       "secret": null,
//       "isActive": true
//     }
//   ],
//   roles:[
//     {
//       "id": "8aba3f93-d2be-40cc-8e32-2aeeffac2e87",
//       "name": "Testy mc test role",
//       "organization": {
//         "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
//         "name": "Olympusat",
//         "logo": "https://image4.owler.com/logo/olympusat_owler_20160421_110829_original.png"
//       },
//       "defaultGroup": null,
//       "groups": [
//         {
//           "id": "ffee375c-fb53-4978-a99b-b11be4996137",
//           "name": "testy mc test sfsdfupdate group"
//         }
//       ],
//       "isActive": true
//     },
//     {
//       "id": "0000000000-d2be-40cc-8e32-2aeeffac2e87",
//       "name": "Buyer Dummy",
//       "organization": {
//         "id": "a27d0c36-915d-450d-8401-c7e27f3b6a13",
//         "name": "Fake Co.",
//         "logo": "",
//       },
//       "defaultGroup": null,
//       "groups": [
//         {
//           "id": "ffee375c-fb53-4978-a99b-b11be4996137",
//           "name": "testy mc test sfsdfupdate group"
//         }
//       ],
//       "isActive": true
//     }
//   ]
// };

const _importedTheme = 'semanticui';
let notyOptions = {
  layout: 'bottomRight',
  type: 'alert',
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
    wrapper.style.top = (options.position && options.position.top) ? options.position.top : '0';
    wrapper.style.right = (options.position && options.position.right) ? options.position.right : '0';

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
