import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Nav_bar from './component/Nav_bar';
import Contact from './component/Contact';
import "../node_modules/bootstrap/dist/js/bootstrap"

ReactDOM.render(
  <React.StrictMode>
    <Nav_bar />
    <App />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);