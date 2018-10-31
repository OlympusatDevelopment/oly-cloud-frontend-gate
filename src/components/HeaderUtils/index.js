import React, { Component } from 'react';
import 'src/components/HeaderUtils/style.scss';

export class HeaderUtils extends Component {
  render() { 
    const { options } = this.props; 

    return (
      <div className="olyauth__centralizerHeaderUtils">
        <a href={this.props.options.profileSettingsLink}>Settings</a>
        <button onClick={() => window.Oly.Services.Auth.logout()}>Sign out</button> 
      </div>
    )
  }
}