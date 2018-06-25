import { OPTIONS_LS_KEY } from '../utils/constants';
const options = JSON.parse(localStorage.getItem(OPTIONS_LS_KEY)) || {};

export default `

  .olyauth__centralizer{
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 300;
  }
   
	.olyauth__centralizerGravatar:hover,
	.olyauth__centralizer button:hover,
	.olyauth__profileUploadInner input[type="file"]:hover,
	.olyauth__centralizerAppsIcon:hover:after{
		cursor: pointer !important;
		opacity: 0.7;
  }
  .olyauth__centralizerGravatar--cssGravatar{
    display: table;
  }
  .olyauth__centralizerGravatar--cssGravatar p{
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 0;
    font-size: 16px;
    text-align: center;
    font-weight: 100;
    line-height: 100%;
    display: table-cell;
    vertical-align: middle;
  }

	.olyauth__appMenuInner ul li:hover{
		background: #f7f7f7;
		color: #333;
		cursor: pointer;
		border-radius: 3px;
	}

	.olyauth__centralizerAppsIcon:after{
		content:"\\f00a";
		font-family:FontAwesome;
		color: ${options.centralizerAppsIconColor || '#efefef'}; 
		position: absolute;
		width: 45px;
		height: 45px;
		font-size: 18px;
	}

	.top_arr:after, .top_arr:before {
		bottom: 100%;
		right: 4px;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.top_arr:before {
		border-color: rgba(222, 221, 223, 0);
		border-bottom-color: #fff;
		border-width: 13px;
		margin-left: -13px;
	}

	.top_arr:after{
		border-color: rgba(222, 221, 223, 0);
		border-bottom-color: #fff;
		border-width: 13px;
		margin-left: -13px;
	}

	.olyauth__centralizerAppContainer.top_arr:before,
	.olyauth__centralizerAppContainer.top_arr:after{
		right: 43px;
  }
  
  .olyauth__centralizerRoleItem:hover{
    opacity: 0.7;  
    background: #ebebeb; 
    box-shadow: inset 0 0 3px rgba(0,0,0,0.3)   
  }
`

