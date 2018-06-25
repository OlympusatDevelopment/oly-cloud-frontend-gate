import React, { Component } from 'react';
import styles from './styles'; 
import './style.scss';
 
export class RoleItem extends Component {
  render() {
    const { role, onItemClick, activeRole } = this.props;
    return ( 
      <li className="olyauth__centralizerRoleItem" style={styles.li} onClick={onItemClick}>
        <div style={Object.assign({},styles.column, styles.columnFirst)}>
          <img style={styles.img} src={role.organization.logo} alt={role.organization.name}/>
        </div>
        <div style={styles.column}>
          <p style={styles.columnP} className="bold">{role.name}</p>
          <p style={Object.assign({},styles.columnP, styles.columnOrg)} >{role.organization.name}</p>
        </div>
      </li>
    )
  }
}