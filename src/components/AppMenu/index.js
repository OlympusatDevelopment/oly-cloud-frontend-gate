import React, { Component } from 'react';
import styles from './styles';

export class AppMenu extends Component {
  render() {
    const { apps } = this.props;

    return (
      <div className="olyauth__mainMenu" style={styles.olyauth__mainMenu}>
        <div className="olyauth__mainMenuInner" style={styles.olyauth__mainMenuInner}>
          <ul style={styles.ul}>
            {apps.map(app => {
              return (
                <li key={Math.random()} style={styles.li}>
                  <a style={styles.link} href={app.domain} >
                    <img style={styles.icon} src={app.logo} />
                    {app.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}