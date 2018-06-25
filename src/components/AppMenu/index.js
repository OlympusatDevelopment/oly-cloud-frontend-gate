import React, { Component } from 'react';
import './style.scss';
 
export class AppMenu extends Component {
  render() {
    const { apps } = this.props; 
    
    return (
      <div className="olyauth__appMenu">
        <div className="olyauth__appMenuInner">
          <ul>
            {apps.map(app => {
              return (
                <li key={Math.random()}>
                  <a href={app.domain} >
                    <img src={app.logo} />
                    <span>{app.name}</span>
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