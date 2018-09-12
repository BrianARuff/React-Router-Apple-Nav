import React from 'react';
import {Route, Link} from 'react-router-dom';
import Value from './Value';

export default class SubNavItem extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props.navItem.name)}
        {/* <Route path={`/${this.props.nav}/:name`} />
        <Link path={`/${this.props.nav}/:name`} component={Value}>{this.props.sub}</Link> */}
        {
          this.props.subNavItem.map(item => {
            return (
              <React.Fragment>
              <Route path={`${this.props.navItem.name}/${item.name}`} render={(props) => <Value {...props} item={item} />} />
              <Link to={`${this.props.navItem.name}/${item.name}`}>{item.name}</Link>
              <Value item={item} />
            </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}