import React, { Component } from 'react';
import { RoleItem } from '../RoleItem';
import './style.scss';

export class RoleSelector extends Component {

  onItemClick(){
    // assumeRole logic here
    alert('Role clicked: trigger assumeRole fn from this event')
  }

  render() {
    return (
      <div className="olyauth__roleSelector">
        <div className="olyauth__roleSelectorInner">
          <ul>
            { this.props.roles.map(role => (<RoleItem key={role.id} role={role} onItemClick={this.onItemClick}/>)) }
          </ul>
        </div>
      </div>
    )
  }
}