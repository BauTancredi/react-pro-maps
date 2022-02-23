import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import { MapsApp } from './MapsApp';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmF1dGFuY3JlZGkiLCJhIjoiY2t6emoyNTVmMGFyMTNrcXhydHk4aTd4eiJ9.eKwtcnskmvaZfL1_h00ECA';

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
