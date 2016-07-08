import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* application components */

@connect (
    state => state
)
export class AppContainer extends Component {

  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
