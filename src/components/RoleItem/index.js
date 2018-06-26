import React, { Component } from 'react'; 
import './style.scss';
 
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
    const { role, onItemClick} = this.props;

    return ( 
      <li data-activemessage="active" className={this.state.classes} onClick={
        () => {
          onItemClick(role.id); 
        }
      }>
        <div>
          <img src={role.organization.logo} alt={role.organization.name}/>
        </div>
        <div>
          <p className="bold">{role.name}</p>
          <p>{role.organization.name}</p>
        </div>
      </li> 
    )
  }
}