import React, { Component } from 'react';
import { RoleItem } from 'src/components/RoleItem';
import 'src/components/RoleSelector/style.scss';

export class RoleSelector extends Component {
  constructor(props){
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }
  onItemClick(id){
    window.Oly.Services.Authorization.assumeRole(id);
    this.props.onRoleChange(id);
  }

  render() {
    const {assumedRole} = this.props;
    const _assumedRole = assumedRole.toString().replace(/["']/g, '')
    return ( 
      <div className="olyauth__roleSelector">
        <div className="olyauth__roleSelectorInner">
          <p>Enable Role...</p>
          <ul>
            { this.props.roles
							.filter(role => role.permissions && role.permissions.length > 0)
              .sort(function(a, b) {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              }).map(role => (<RoleItem options={this.props.options} isActive={_assumedRole === role.id} key={role.id} role={role} onItemClick={this.onItemClick}/>)) }
          </ul>
        </div>
      </div>
    )
  }
}