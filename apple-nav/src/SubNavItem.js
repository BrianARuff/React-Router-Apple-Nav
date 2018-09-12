import React from 'react';
import {Route, Link} from 'react-router-dom';
import Value from './Value';

export default class SubNavItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.subNavItem.map(item => {
            return (
              <React.Fragment>
                <Value name={this.props.navItem.name} item={item} />
                {/* IM STOPPING THE NESTING HERE, TOO SICK TO CONITNUE */}
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}