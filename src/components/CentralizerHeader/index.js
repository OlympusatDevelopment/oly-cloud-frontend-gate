import React, { Component } from 'react';
import styles from './styles';

export class CentralizerHeader extends Component {
  render() { 
    const { options, user } = this.props; 
    console.log('UUUser',user); 
    return (
      <div className="olyauth__centralizerHeader" style={styles.header}>
        <div style={Object.assign({}, styles.column, styles.columnFirst)} >
          <div style={styles.headerGravatar} className="olyauth__centralizerHeaderGravatar">
            <img style={styles.headerGravatarImg} src={user.profileImage} alt={user.name} />
          </div>
        </div>
        <div style={styles.column} >
          <p style={styles.headerText}>
            <span style={styles.headerName} className="bold" title={user.email}>{user.name} {user.lastname}</span>
          </p>
          <p style={styles.headerText}>
            {(user.organization ? user.organization.name : '')}
          </p>
          <p style={styles.headerText}>
            <span style={styles.headerUsername} title={user.email}>{user.email}</span>
          </p>
        </div>
      </div>
    )
  }
}