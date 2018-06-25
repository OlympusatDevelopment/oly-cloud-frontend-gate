import React, { Component } from 'react';
import { default as styles } from './styles';
import headerStyles from '../headerStyles';
import { AppMenu } from '../AppMenu';
import { CentralizerFooter } from '../CentralizerFooter';
import { CentralizerHeader } from '../CentralizerHeader';
import { RoleSelector } from '../RoleSelector';
import utils from '../../utils';
import './style.scss';
 
const {
  APP_MENU,
  CENTRALIZER_ID
} = utils.constants;

export class Centralizer extends Component {
  constructor(props) {
    super(props);

    this._addStyleToHead(headerStyles);

    this.state = {
      user: this.props.user || [],
      apps: this.props.apps || [],
      roles: this.props.roles || [],
      interface: APP_MENU,
      showContainer: false,
      showAppContainer: false
    }

    this.setVisibleInterface = this.setVisibleInterface.bind(this);
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      user: nextState.user,
      apps: nextState.apps,
      roles: nextState.roles
    });
  } 

	/**
	 * BUILD the primary container
	 * @param Interface
	 * @param user
	 * @returns {XML} 
	 */
  makePrimaryContainer(Interface, user) {
    return (
      <div style={styles.container} className="olyauth__centralizerContainer top_arr">
        <CentralizerHeader options={this.props.options} user={user} />
        <div>{Interface}</div>
        <CentralizerFooter options={this.props.options} />
      </div>
    )
  }

	/**
	 * BUILD the app container
	 * @param Interface
	 * @param user
	 * @returns {XML}
	 */
  makeAppContainer(Interface, user) {
    return (
      <div style={styles.appContainer} className="olyauth__centralizerAppContainer top_arr">
        <div>{Interface}</div>
        <CentralizerFooter options={this.props.options} />
      </div>
    )
  }

  /**
   * The centralizer has the ability to swap out internal interfaces. 
   * The default interface is the roles menu, but others can be displayed if needed.
   * CONTROLS internal interface switching
   * @param {*} nterface 
   */
  setVisibleInterface(nterface){
    const {roles} = this.state;

    switch (nterface) {
      default:
        return (<RoleSelector roles={roles}/>);
    }
  }

  render() { 
    const { options } = this.props; 
    const { user } = this.state;
    const profileIsDefault = user.profileImage.indexOf('default_profile.jpg') > -1;
    const profileImg = profileIsDefault 
      ? (<p style={{ background: options.brandingColor }}>{user.email.charAt(0).toUpperCase()}</p>) 
      : (<img style={styles.gravatar} src={user.profileImage} alt={user.name} />);
    const gravatarClassnames = profileIsDefault 
      ? 'olyauth__centralizerGravatar olyauth__centralizerGravatar--cssGravatar' 
      : 'olyauth__centralizerGravatar';
    let Interface = this.setVisibleInterface(this.state.interface);

    return (
      <div className={CENTRALIZER_ID} id="olyauthCentralizer" style={styles.olyauth__centralizer}>
        <div className="olyauth__centralizerInner" style={styles.olyauth__centralizerInner}>
          {!options.hideAppCentralizer 
            && (<div className="olyauth__centralizerAppsIcon" style={styles.apps} onClick={() => this.setState({ showAppContainer: !this.state.showAppContainer, showContainer: false })}></div>)
          }
          <div className={gravatarClassnames} style={styles.entry} onClick={() => this.setState({ showContainer: !this.state.showContainer, showAppContainer: false })}>
            {profileImg}
          </div>
          
          {this.state.showContainer && this.makePrimaryContainer(Interface, user)}
          {(this.state.showAppContainer && !options.hideAppCentralizer) 
            && this.makeAppContainer(<AppMenu apps={this.state.apps} parentStyles={styles} user={user}> </AppMenu>, user)
          }
        </div>
      </div>
    )
  }

  _addStyleToHead(css) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) { 
      style.styleSheet.cssText = css;
    } else { 
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
}