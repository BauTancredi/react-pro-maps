import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiYmF1dGFuY3JlZGkiLCJhIjoiY2t6emoyNTVmMGFyMTNrcXhydHk4aTd4eiJ9.eKwtcnskmvaZfL1_h00ECA',
  },
});

export default searchApi;
