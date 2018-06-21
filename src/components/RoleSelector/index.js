import React, { Component } from 'react';
import { default as styles } from './styles';

export class RoleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillReceiveProps() {
    this.setState({ user: this.props.user });
  }

  render() {
    return (
      <div className="olyauth__roleSelector" style={styles.olyauth__roleSelector}>
        <div className="olyauth__roleSelectorInner" style={styles.olyauth__roleSelectorInner}></div>
      </div>
    )
  }
}