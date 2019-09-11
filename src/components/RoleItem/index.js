import React, { Component } from 'react'; 
import 'src/components/RoleItem/style.scss';
 
export class RoleItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      classes: this.determineClasses(props.isActive)
    };
  }

  componentWillReceiveProps(nextState){
    this.setState({classes:  this.determineClasses(nextState.isActive) });
  }

  determineClasses(active){
    return active 
      ? 'olyauth__centralizerRoleItem olyauth__centralizerRoleItem--active' 
      : 'olyauth__centralizerRoleItem';
  }

  render() {
    const { role, onItemClick, options} = this.props;
    const hasLogo = role.organization && !!role.organization.logo;
    const logoImg = !hasLogo
    ? (<p style={{ background: options.brandingColor }}>{role.name.charAt(0).toUpperCase()}</p>) 
    : (<img src={role.organization.logo} alt={role.organization.name}/>);
    const logoClassNames = !hasLogo 
      ? 'olyauth__centralizerRoleItem--cssLogo' 
      : '';

    return ( 
      <li data-activemessage="active" className={this.state.classes} onClick={
        () => {
          onItemClick(role.id); 
        }
      }>
        <div className={logoClassNames}>
          {logoImg}
        </div>
        <div>
          <p className="bold">{role.name}</p>

          {role.organization && 
          <p>{role.organization.name}</p>}
        </div>
      </li> 
    )
  }
}