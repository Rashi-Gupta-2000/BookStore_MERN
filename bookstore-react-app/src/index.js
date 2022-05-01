import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import bookStore from "./Store/crud-store"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
