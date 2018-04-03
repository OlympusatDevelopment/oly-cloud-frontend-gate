'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Observable = require('rxjs/Observable');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = undefined;

//https://accounts.realtime.co/
// Must be in head (see below inject Fn):  <script src="//messaging-public.realtime.co/js/2.1.0/ortc.js"></script>
function init(options) {
  injectScriptToHead(function () {
    if (window.RealtimeMessaging) {
      var ortcClient = window.RealtimeMessaging.createClient();
      ortcClient.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
      ortcClient.connect('JsqM1a', 'testToken');

      ortcClient.onConnected = function (ortc) {
        if (options && options.debugMode) {
          console.log("Connected to " + ortcClient.getUrl());
        }

        // Original
        ortcClient.subscribe(options.IoT.topicName, false, onMessage);

        user = options.IoT.appUser || localStorage.getItem(options.IoT.appUserLSKey);
        try {
          user = JSON.parse(user);
        } catch (e) {
          console.log(e);
        }

        //genres=gnr-SyG5NwWrZ
        //{"url":"?genres=gnr-SyG5NwWrZ"}
        //{"url":"?genres=gnr-SyG5NwWrZ","message":"Eli likes sawdust","from":"Adam","to":"adam.gedney@gmail.com"}
        //{"message":"Eli likes sawdust","from":"Adam"}
        //{"message":"Eli likes sawdust","from":"Adam","to":"adam.gedney@gmail.com"}

        // alexa/query
        //{"message":"Eli likes sawdust","from":"Adam","to":"adam.gedney@gmail.com","payload":"{\"helloWorld\":{\"externalId\":\"1234\",\"title\":\"My Title\"}}"}
      };
    }
  });
}

function onMessage(ortc, channel, message) {
  var body = {};

  try {
    body = JSON.parse(message);
  } catch (err) {
    console.log(err);
  }

  if (body.hasOwnProperty('payload')) {
    try {
      body.payload = JSON.parse(body.payload);
    } catch (err) {
      console.log(err);
    }
  }

  // Block non broadcast or specific pushes
  if (body.to === user.email || body.to === 'broadcast') {
    if (body.url && options && options.IoT && options.IoT.beforeRedirect) {
      var route = options.IoT.beforeRedirect(body.url);

      window.location.href = route;
    }

    if (body.message) {
      // publish responses to the observable Subject
      if (window && window.Oly && window.Oly.$tream) {
        window.Oly.$tream.next(body);
      }
    }
  }
}

function injectScriptToHead(cb) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = cb;
  script.src = '//messaging-public.realtime.co/js/2.1.0/ortc.js';
  head.appendChild(script);
}

exports.default = {
  init: init
};