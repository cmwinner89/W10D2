import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const h1 = <h1>Widgets</h1>;
  ReactDOM.render(<Clock />, root);
})