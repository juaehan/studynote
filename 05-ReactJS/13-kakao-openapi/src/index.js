import React from 'react';
import ReactDOM from 'react-dom/client';

/**/
import App from './App';
/*/
import App from './Test';
/**/

import Meta from './Meta';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Meta/>
      <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>
);

