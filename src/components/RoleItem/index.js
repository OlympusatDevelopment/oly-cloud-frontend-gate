import React, { Component } from 'react'; 
import './style.scss';
 
export class RoleItem extends Component {
  render() {
    const { role, onItemClick, activeRole } = this.props;
    return ( 
      <li className="olyauth__centralizerRoleItem" onClick={onItemClick}>
        <div>
          <img src={role.organization.logo} alt={role.organization.name}/>
        </div>
        <div>
          <p className="bold">{role.name}</p>
          <p>{role.organization.name}</p>
        </div>
      </li>
    )
  }
}