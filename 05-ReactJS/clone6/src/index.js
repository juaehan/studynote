import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';
import Meta from './Meta';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <GlobalStyles />
    <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>
  </React.StrictMode>
);
