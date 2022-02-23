import { useContext } from 'react';
import { MapContext } from '../context';
import { PlacesContext } from '../context/places/PlacesContext';

export const ButtonMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Map not ready');
    if (!userLocation) throw new Error('No user location');

    map?.flyTo({ zoom: 14, center: userLocation });
  };

  return (
    <div
      className="btn btn-primary"
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
        backgroundColor: '#61DAFB',
        border: 0,
      }}
    >
      My location
    </div>
  );
};
