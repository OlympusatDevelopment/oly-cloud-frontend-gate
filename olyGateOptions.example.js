export const sdkGate = {
  brandingColor: '#103463',
  centralizerAppsIconColor: '#efefef',
  hideAppCentralizer: false,
  profileSettingsLink: false, // or url to link to
  reloadPageOnRoleChange: true,
  notifications: {// All noty options can be passed in here
    layout: 'bottomRight',
    type: 'info',
    animation: {
      open: 'animated bounceInRight', // Animate.css class names
      close: 'animated bounceOutRight' // Animate.css class names
    },
    timeout: 3000,
    progressBar: true
  },
  position: {top: '12px', right: 0} // Where the ui lays out absolute to the page
};