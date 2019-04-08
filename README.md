#### Usage
To add the Authentication gate and the Centralizer to your project:
1. Include the oly-sdk & react-oly-gate package
2. Import the Gate & instantiate it with your branding info and credentials

```
npm i -S @olympusat/oly-cloud-frontend-sdk oly-cloud-frontend-gate
```


```
  import {Oly} from '@olympusat/oly-cloud-frontend-sdk';
  import {Gate} from '@olympusat/oly-cloud-frontend-gate';

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
  profileSettingsLink: '/account', // or false to hide the link in the ui
  reloadPageOnRoleChange: true,
  notifications: {// Optional: All noty options can be passed in here for push notification display
    layout: 'bottomRight',
    type: 'alert',
    animation: {
      open: 'animated bounceInRight', // Animate.css class names
      close: 'animated bounceOutRight' // Animate.css class names
    },
    timeout: 3000,
    progressBar: true
  },
  position: {top: 0, right: 0}
});
```