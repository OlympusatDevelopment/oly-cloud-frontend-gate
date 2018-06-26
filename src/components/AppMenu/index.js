import React, { Component } from 'react';
import 'src/components/AppMenu/style.scss';
 
export class AppMenu extends Component {
  render() {
    return (
      <div className="olyauth__appMenu">
        <div className="olyauth__appMenuInner">
          <ul>
            {this.props.apps.map(app => (
                <li key={Math.random()}>
                  <a href={app.domain} >
                    <img src={app.logo} />
                    <span>{app.name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}