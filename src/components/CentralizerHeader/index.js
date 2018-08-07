import React, { Component } from 'react';
import 'src/components/CentralizerHeader/style.scss';

export class CentralizerHeader extends Component {
  render() { 
    const { options, user } = this.props; 
   
    return (
      <div className="olyauth__centralizerHeader">
        <div>
          <div className="olyauth__centralizerHeaderGravatar">
            <img src={user.profileImage} alt={user.name} />
          </div>
        </div>
        <div>
          <p>
            <span className="bold" title={user.email}>{user.name} {user.lastname}</span>
          </p>
          <p>
            {(user.organization ? user.organization.name : '')}
          </p>
          <p>
            <span title={user.email}>{user.email}</span>
          </p>
        </div>
      </div>
    )
  }
}