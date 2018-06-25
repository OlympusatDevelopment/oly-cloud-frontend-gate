const color = {
	overlay : '#333333',
	white: '#fff',
	offWhite : "#efefef",
	border : '#dedddf',
	text:'#333',
	textSecondary:'#888',
	button: '#5087c0',
	danger : '#c72f2c',
	link : '#5087c0'
};


export default{
	color,
	li: {
    display: 'block',
    padding: '18px 18px 18px 0',
    listStyleType: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    borderBottom: '1px solid ' + color.border,
    boxSizing: 'border-box'
  },
  column: {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '45px',
    paddingLeft: '12px'
  },
  columnP: {
    margin: '0',
    lineHeight: '1.2'
  },
  columnFirst: {
    width: '57px'
  },
  columnOrg: {
    fontSize: '12px'
  },
  img: {
    maxHeight: '45px',
    maxWidth: '59px'
  }
}