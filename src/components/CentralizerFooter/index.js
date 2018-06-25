import React, { Component } from 'react';
import './style.scss';

export class CentralizerFooter extends Component {
  render() { 
    const { options } = this.props; 

    return (
      <div className="olyauth__centralizerFooter">
        <button className="fa fa-cog">
          <a href={this.props.options.profileSettingsLink}></a>
        </button>
        <div>
          {window.Oly.options.ui.logo &&
            (<img src={window.Oly.options.ui.logo} alt={window.Oly.options.ui.appSlug} />)
          }
        </div>
        <button onClick={() => window.Oly.Services.Auth.logout()}>Sign out</button>
      </div>
    )
  }
}