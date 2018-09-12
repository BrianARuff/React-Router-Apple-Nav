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
        {
          this.props.navItem.subNav.map(subItem => {
            return (
              <Link to="/asdf">{subItem}</Link>
            )
          })
        }
        <Route path={`/${this.props.navItem.name}`} render={(props) => <SubNavItem subNavItem={this.props.navItem.subNav} {...props} navItem={this.props.navItem} /> } />
      </div>
    )
  }
}