#### Usage
To add the Authentication gate and the Centralizer to your project:
1. Include the oly-sdk & react-oly-gate package
2. Import the Gate & instantiate it with your branding info and credentials

```
npm i -S @olympusat/oly-client-sdk oly-client-gate
```


```
  import {Oly} from '@olympusat/oly-client-sdk';
  import {Gate} from '@olympusat/oly-client-gate';

  import getOlySdkOptions from "./olySdkOptions";
  import getOlyGateOptions from "./olyGateOptions";

  new Oly(getOlySdkOptions());
  new Gate(getOlyGateOptions());
```

## Example config file

```
export default () => ({
  logo: '/images/olyhub_logo_v1_text_blackx200.png',
  brandingColor: '#103463',
  centralizerAppsIconColor: '#efefef',
  hideAppCentralizer: false,
  profileSettingsLink: '/account',
  appSlug: 'cloudplat-management',
  debugMode: false, // boolean | turns internal console logs on and off
  notifications: {// Optional: All noty options can be passed in here for push notification display
    layout: 'bottomRight',
    type: 'alert',
    animation: {
      open: 'animated bounceInRight', // Animate.css class names
      close: 'animated bounceOutRight' // Animate.css class names
    },
    timeout: 3000,
    progressBar: true
  }
});
```