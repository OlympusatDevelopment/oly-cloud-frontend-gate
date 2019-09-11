import React, { Component } from 'react';
import 'src/components/HeaderUtils/style.scss';

export class BrowserDetectThresholdUI extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			centralizer: null,
			height: null,
			top: 10
		}
		// this.hide = this.hide.bind(this);
	}
	
	componentDidMount() {
		if(window.Oly) {
			this.setState({ centralizer: window.Oly.UI.getCentralizerInstance(),
				height: window.Oly.UI.getBrowserThresholdUIInstance().clientHeight }, function () {
				if( this.state.centralizer) {
					this.state.centralizer.style.top = `${(this.state.height + this.state.top)}px`;
				}
			});
		}
	}
	
	render() {
		const { message, cssStyle, hide } = this.props;
		const styles = cssStyle || {
			background: '#ffeeba',
			fontSize: '14px',
			color: '#333',
			textAlign: 'center',
			padding: '10px 0px'
		}
		
		
		return (
			<div className="olyutils__browserDetectThresholdUI" style={styles}>
				<i className="fa fa-exclamation-triangle fa-lg" style={{marginRight: '10px', color: '#fab005'}}></i>
				<span dangerouslySetInnerHTML={{__html: message}}></span>. &nbsp;
				<a style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={hide}>Ok, I understand.</a>
				&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
				<a style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => hide(true)}>Hide forever</a>
			</div>
		)
	}
}