import React, { Component } from 'react';
import styles from './styles';

export class CentralizerHeader extends Component {
  render() { 
    const { options, user } = this.props; 
    console.log('UUUser',user);
    return (
      <div className="olyauth__centralizerHeader" style={styles.header}>
        <p style={styles.headerText}>
          <span style={styles.headerName} className="bold" title={user.email}>{user.name} {user.lastname}</span>
          <br />
          {(user.organization ? user.organization.name : '')}
          <br />
          <span style={styles.headerUsername} title={user.email}>{user.email}</span>
        </p>
        <div style={styles.headerGravatar} className="olyauth__centralizerHeaderGravatar">
          <img style={styles.headerGravatarImg} src={user.profileImage} alt={user.name} />
        </div>
      </div>   
    )
  }
}