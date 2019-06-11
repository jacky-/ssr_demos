import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Link } from 'react-router-dom'
import App from './pages/App.js';
import MainPage from './pages/MainPage.js';
import '_css/base.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route exact path="/" component={MainPage} />
    </Route>
  </Router>
), document.getElementById('app'));
