import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Main.css';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('main')
);

serviceWorker.unregister();
