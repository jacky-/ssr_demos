import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Link } from 'react-router-dom'
import App from './pages/App.js';
import MainPage from './pages/MainPage.js';
import OrderDetail from './pages/OrderDetail.js';
import '_css/base.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/orderDetail" component={OrderDetail} />
    </Route>
  </Router>
), document.getElementById('app'));
