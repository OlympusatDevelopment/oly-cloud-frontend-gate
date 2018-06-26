import React, { Component } from 'react';
import { RoleItem } from 'src/components/RoleItem';
import 'src/components/RoleSelector/style.scss';

export class RoleSelector extends Component {
  constructor(props){
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }
  onItemClick(id){
    window.Oly.Modules.Roles.assumeRole(id);
    this.props.onRoleChange(id);
  }

  render() {
    const {assumedRole} = this.props;

    return ( 
      <div className="olyauth__roleSelector">
        <div className="olyauth__roleSelectorInner">
          <ul>
            { this.props.roles.map(role => (<RoleItem isActive={assumedRole === role.id} key={role.id} role={role} onItemClick={this.onItemClick}/>)) }
          </ul>
        </div>
      </div>
    )
  }
}