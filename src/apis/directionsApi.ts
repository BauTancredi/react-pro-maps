import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiYmF1dGFuY3JlZGkiLCJhIjoiY2t6emoyNTVmMGFyMTNrcXhydHk4aTd4eiJ9.eKwtcnskmvaZfL1_h00ECA',
  },
});

export default directionsApi;
