import React from 'react';
import {Route, Link} from 'react-router-dom';
import SubNavItem from './SubNavItem';

export default class NavItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route path={`/${this.props.navItem.name}`} render={(props) => <SubNavItem subNavItem={this.props.navItem.subNav} {...props} navItem={this.props.navItem} /> } />
      </div>
    )
  }
}