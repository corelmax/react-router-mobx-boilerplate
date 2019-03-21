import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router'
import {Provider} from 'mobx-react'
import {createBrowserHistory} from 'history'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import App from './App'

const browserHistory = createBrowserHistory()

const {stores, history} = configureStore(browserHistory)

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
