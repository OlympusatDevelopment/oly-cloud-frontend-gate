import React, { Component } from 'react';
import { AppMenu } from 'src/components/AppMenu';
import { CentralizerFooter } from 'src/components/CentralizerFooter';
import { CentralizerHeader } from 'src/components/CentralizerHeader';
import { RoleSelector } from 'src/components/RoleSelector';
import utils from 'src/utils';
import 'src/components/Centralizer/style.scss';
 
const {
  APP_MENU,
  CENTRALIZER_ID
} = utils.constants;

export class Centralizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user || {},
      apps: this.props.apps || [],
      roles: this.props.roles || [],
      interface: APP_MENU,
      showContainer: false,
      showAppContainer: false,
      assumedRole: window.Oly && window.Oly.meta ? window.Oly.meta.assumedRole : false
    }

    this.setVisibleInterface = this.setVisibleInterface.bind(this);
    this.onRoleChange = this.onRoleChange.bind(this);

    this.controlClickout();
  }

  /**
   * LISTEN FOR non centralizer body clicks to close interfaces on click out
   */
  controlClickout(){
    const self = this;
    document.body.onclick = function(e){
      if (e.target.closest('#olyauthCentralizer') === null) {
        self.setState({
          showContainer: false,
          showAppContainer: false,
        });
      }
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      user: nextState.user,
      apps: nextState.apps,
      roles: nextState.roles
    });
  } 

  onRoleChange(id){
    this.setState({assumedRole: id});
  }

	/**
	 * BUILD the primary container
	 * @param Interface
	 * @param user
	 * @returns {XML} 
	 */
  makePrimaryContainer(Interface, user) {
    return (
      <div className="olyauth__centralizerContainer top_arr">
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
      <div className="olyauth__centralizerAppContainer top_arr">
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
    const {roles, assumedRole} = this.state;

    switch (nterface) {
      default:
        return (<RoleSelector roles={roles} assumedRole={assumedRole} onRoleChange={this.onRoleChange} options={this.props.options}/>);
    }
  }

  render() { 
    const { options } = this.props; 
    const { user } = this.state;
    const profileIsDefault = user.profileImage.indexOf('default_profile.jpg') > -1;
    const profileImg = profileIsDefault 
      ? (<p style={{ background: options.brandingColor }}>{user.email.charAt(0).toUpperCase()}</p>) 
      : (<img src={`${options.assetsBucketUrl}${user.profileImage}`} alt={user.name} />);
    const gravatarClassnames = profileIsDefault 
      ? 'olyauth__centralizerGravatar olyauth__centralizerGravatar--cssGravatar' 
      : 'olyauth__centralizerGravatar';
    let Interface = this.setVisibleInterface(this.state.interface);

    return (
      <div className={CENTRALIZER_ID} id="olyauthCentralizer">
        <div className="olyauth__centralizerInner">
          {!options.hideAppCentralizer 
            && (<div style={{color: options.centralizerAppsIconColor}} className="olyauth__centralizerAppsIcon" onClick={() => this.setState({ showAppContainer: !this.state.showAppContainer, showContainer: false })}></div>)
          }
          <div className={gravatarClassnames} onClick={() => this.setState({ showContainer: !this.state.showContainer, showAppContainer: false })}>
            {profileImg}
          </div>
          
          {this.state.showContainer && this.makePrimaryContainer(Interface, user)}
          {(this.state.showAppContainer && !options.hideAppCentralizer) 
            && this.makeAppContainer(<AppMenu options={options} apps={this.state.apps} user={user}> </AppMenu>, user)
          }
        </div>
      </div>
    )
  }
}