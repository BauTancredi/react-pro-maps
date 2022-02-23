import React from 'react';
import ReactDOM from 'react-dom';

import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('Your browser has no geolocation option');
  throw new Error('Your browser has no geolocation option');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
