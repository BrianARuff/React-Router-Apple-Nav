import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import NavItem from './NavItem';
console.log(NavItem);
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="App">
       {
         this.state.data.map(navItem => {
           return (
             <div>
             <Link to={`/${navItem.name}`}>{navItem.name}</Link>
              <Route path={`/${navItem.name}`} render={(props) => {
                return (
                  <NavItem {...props} navItem={navItem}/>
                )}
              }/>
             </div>
           )
         })
       }
      </div>
    );
  }
}

export default App;
