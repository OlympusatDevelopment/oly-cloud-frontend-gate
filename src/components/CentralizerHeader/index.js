import React, { Component } from 'react';
import 'src/components/CentralizerHeader/style.scss';
import { HeaderUtils} from '../HeaderUtils';

export class CentralizerHeader extends Component {
  render() { 
    const { options, user } = this.props; 
    user.profileImage = false;
    const noProfileImg = !user.profileImage || (user.profileImage || '').indexOf('default_profile.jpg') > -1;
    const profileImg = noProfileImg 
      ? (<p style={{ background: options.brandingColor }}>{user.email.charAt(0).toUpperCase()}</p>) 
      : (<img src={`${options.assetsBucketUrl}${user.profileImage}`} alt={user.name} />);
    const gravatarClassnames = noProfileImg 
      ? 'olyauth__centralizerHeaderGravatar olyauth__centralizerHeaderGravatar--cssGravatar' 
      : 'olyauth__centralizerHeaderGravatar';

    return (
      <div className="olyauth__centralizerHeader">
        <div>
          <div className={gravatarClassnames}>
            {profileImg}
          </div>
        </div>
        <div>
          <p>
            <span className="bold" title={`${user.name} ${user.lastname || ''}`}>{user.name ? `${user.name} ${user.lastname || ''}` : ''}</span>
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