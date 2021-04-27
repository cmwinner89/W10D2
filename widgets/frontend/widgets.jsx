import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  
  ReactDOM.render(<App />, root);
})