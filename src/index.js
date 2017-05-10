import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import todoApp from './reducers';
import './index.css';

const store = createStore(
  combineReducers({
    todoApp,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme({
  icon: {
    color: 'red',
  }
});

console.log(muiTheme);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={MainPage} />
            <Route path='edit/:id' component={EditPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

//(:categoryId)