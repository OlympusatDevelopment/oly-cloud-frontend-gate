import React, { Component } from 'react';
import 'src/components/HeaderUtils/style.scss';

export class HeaderUtils extends Component {
  render() { 
    const { options } = this.props; 
    const settingsLink = this.props.options.profileSettingsLink 
      ? (<a href={this.props.options.profileSettingsLink}>Settings</a>)
      : '';

    return (
      <div className="olyauth__centralizerHeaderUtils">
        {settingsLink}
        <button onClick={() => window.Oly.Services.Auth.logout()}>Sign out</button> 
      </div>
    )
  }
}