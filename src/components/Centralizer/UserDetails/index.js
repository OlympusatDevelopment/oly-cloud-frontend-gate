import React, { Component } from 'react';
import { default as styles } from './styles';

export class UserDetails extends Component {
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
      <div className="olyauth__userDetails" style={styles.olyauth__userDetails}>
        <div className="olyauth__userDetailsInner" style={styles.olyauth__userDetailsInner}></div>
      </div>
    )
  }
}