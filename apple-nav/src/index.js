import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import data from './data';

ReactDOM.render(
  
  <Router>
    <App data={data} />
  </Router>, document.getElementById('root'));
registerServiceWorker();
