import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
