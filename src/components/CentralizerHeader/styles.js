const color = {
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
  border: `1px solid ${color.border}`,
  background: color.white,
  borderRadius: '3px',
  height: '27px',
  display: 'block',
  position: 'relative'
};

export default {
  color,
  header: {
    background: color.header,
    padding: '0 9px 9px',
    overflow: 'hidden',
    borderBottom: `1px solid ${color.border}`,
  },
  column:{
    float: 'left',
    paddingLeft: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '18px'
  },
  columnFirst:{
    width: '33%',
    paddingLeft: '0',
    paddingTop: '0'
  },
  headerText: {
    display: 'inline-block',
    // lineHeight: 1.25,
    marginTop: 0
  },
  headerName: {
    fontSize: '16px',
    marginTop: '3px'
  },
  headerUsername: {
    display: 'block',
    fontSize: '12px', 
    marginTop: '12px',
    opacity: '0.7'
  },
  headerGravatar: {
    display: 'inline-block',
    textAlign: 'right',
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: '9px'
  },
  headerGravatarImg: {
    textAlign: 'center',
    maxWidth: '100%',
    height: "auto"
  }
}