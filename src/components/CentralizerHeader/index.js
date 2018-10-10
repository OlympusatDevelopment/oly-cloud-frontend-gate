import React, { Component } from 'react';
import 'src/components/CentralizerHeader/style.scss';
import { HeaderUtils} from '../HeaderUtils';

export class CentralizerHeader extends Component {
  render() { 
    const { options, user } = this.props; 
   
    return (
      <div className="olyauth__centralizerHeader">
        <div>
          <div className="olyauth__centralizerHeaderGravatar">
            <img src={`${options.assetsBucketUrl}${user.profileImage}`} alt={user.name} />
          </div>
        </div>
        <div>
          <p>
            <span className="bold" title={`${user.name} ${user.lastname}`}>{user.name ? `${user.name} ${user.lastname}` : ''}</span>
          </p>
          {user.organization && 
            (<p>user.organization.name</p>)
          }
          <p>
            <span title={user.email}>{user.email}</span>
          </p>
          <HeaderUtils options={options}></HeaderUtils>
        </div>
      </div>
    )
  }
}