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
  styles: {top: '12px', right: 0, position: 'fixed'} // For overall layout, react syntax styles, ie. zIndex instead of z-index
};