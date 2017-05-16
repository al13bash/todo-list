/*  eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__",
"_REDUX_DEVTOOLS_EXTENSION__"] }]*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './pages/MainPage.jsx';
import EditPage from './pages/EditPage.jsx';
import todoApp, { initialState } from './reducers';
import './index.css';

const store = createStore(
  combineReducers({
    todoApp,
    initialState,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const location = Object.assign({}, browserHistory.getCurrentLocation());
Object.assign(location.query, { showDone: true });
browserHistory.push(location);

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          <Route path='/(category/:categoryId)' component={MainPage} />
          <Route path='edit/:id' component={EditPage} />
        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
