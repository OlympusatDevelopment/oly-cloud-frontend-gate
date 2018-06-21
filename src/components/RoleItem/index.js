import React, { Component } from 'react';
import styles from './styles'; 

export class RoleItem extends Component {
  render() {
    const { role, onItemClick } = this.props;
    return (
      <li style={styles.li} onClick={onItemClick}>
        <div style={styles.column}>
          <img style={styles.img} src={role.organization.logo} alt={role.organization.name}/>
        </div>
        <div style={styles.column}>
          <p class="bold">{role.organization.name}</p>
          <p>{role.name}</p>
        </div>
      </li>
    )
  }
}