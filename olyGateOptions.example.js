export default () => ({
  logo: '/images/olyhub_logo_v1_text_blackx200.png',
  brandingColor: '#103463',
  centralizerAppsIconColor: '#efefef',
  hideAppCentralizer: false,
  profileSettingsLink: '/account',
  appSlug: 'cloudplat-management',
  debugMode: false, // boolean | turns internal console logs on and off
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
  }
});