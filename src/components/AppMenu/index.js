import React, { Component } from 'react';
import 'src/components/AppMenu/style.scss';
 
export class AppMenu extends Component {
  render() {
    const {options} = this.props;
    const logoImg = app => !app.logo
      ? (<div className="olyauth__appMenu--cssLogo"><p style={{ background: options.brandingColor }}>{app.name.charAt(0).toUpperCase()}</p></div>) 
      : (<img src={`${app.logo}`} />);

    return (
      <div className="olyauth__appMenu">
        <div className="olyauth__appMenuInner">
          <ul>
            {this.props.apps.map(app => (
                <li key={Math.random()}>
                  <a href={app.domain} >
                    {logoImg(app)}
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