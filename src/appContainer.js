import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.less'
/* application components */

@connect (
    state => state
)
export class AppContainer extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
