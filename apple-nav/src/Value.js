import React from 'react';

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