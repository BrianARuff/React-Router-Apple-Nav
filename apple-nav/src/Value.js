import React from 'react';
import {Route, Link} from 'react-router-dom';

export default class Value extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.item
        }
      </div>
    )
  }
}