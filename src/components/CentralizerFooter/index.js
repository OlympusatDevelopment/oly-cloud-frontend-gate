import React, { Component } from 'react';
import styles from './styles';

export class CentralizerFooter extends Component {
  render() { 
    const { options } = this.props; 

    return (
      <div className="olyauth__centralizerFooter" style={styles.footer}>
        <button className="fa fa-cog" style={styles.buttonIcon} >
          <a style={styles.profileAnchor} href={this.props.options.profileSettingsLink}></a>
        </button>
          <div style={styles.branding} >
            {window.Oly.options.ui.logo &&
              (<img style={styles.logo} src={window.Oly.options.ui.logo} alt={window.Oly.options.ui.appSlug} />)
            }
          </div>
        <button style={styles.buttonSignout} onClick={() => window.Oly.Services.Auth.logout()}>Sign out</button>
      </div>
    )
  }
}