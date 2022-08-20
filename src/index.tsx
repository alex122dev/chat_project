import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import './styles/style.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /* Hashrouter only for normal working app on github pages */
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
