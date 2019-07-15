import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Link } from 'react-router-dom'
import NavPage from './pages/NavPage.js';
import MainPage from './pages/MainPage.js';
import CommentSubmit from './pages/CommentSubmit.js';
import '_css/base.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={NavPage}>
      <Route exact path="/MainPage" component={MainPage} />
      <Route exact path="/CommentSubmit" component={CommentSubmit} />
    </Route>
  </Router>
), document.getElementById('app'));
