import React, { Component } from 'react';
import styles from './styles';
import { RoleItem } from '../RoleItem';
import './style.scss';

export class RoleSelector extends Component {

  onItemClick(){
    // assumeRole logic here
    alert('Role clicked: trigger assumeRole fn from this event')
  }

  render() {
    const { roles } = this.props
    return (
      <div className="olyauth__roleSelector" style={styles.olyauth__roleSelector}>
        <div className="olyauth__roleSelectorInner" style={styles.olyauth__roleSelectorInner}>
        <ul style={styles.ul}>
          { roles.map(role => (<RoleItem key={role.id} role={role} onItemClick={this.onItemClick}/>)) }
        </ul>
        </div>
      </div>
    )
  }
}