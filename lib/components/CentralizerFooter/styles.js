'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var color = {
  overlay: '#333333',
  white: '#fff',
  offWhite: "#efeff1",
  border: '#dedddf',
  text: '#333',
  textSecondary: '#888',
  button: '#5087c0',
  danger: '#c72f2c',
  link: '#5087c0',
  icon: '#9c9c9c',
  header: '#fff',
  footer: '#f5f5f5'
},
    button = {
  minWidth: '27px',
  border: '1px solid ' + color.border,
  background: color.white,
  borderRadius: '3px',
  height: '27px',
  display: 'block',
  position: 'relative'
};

exports.default = {
  color: color,
  footer: {
    background: color.footer,
    padding: '9px',
    overflow: 'hidden',
    height: '45px'
  },
  button: button,
  buttonIcon: Object.assign({}, button, {
    color: color.icon,
    float: 'left'
  }),
  buttonSignout: Object.assign({}, button, {
    float: 'right'
  }),
  profileAnchor: {
    width: '100px',
    height: '100%',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0'
  },
  branding: {
    display: 'block',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '13px'
  },
  logo: {
    // width: '90px',
    maxHeight: '33px',
    margin: '-6px auto',
    display: 'block',
    filter: 'grayscale(100%)',
    opacity: '0.6'
  }
};