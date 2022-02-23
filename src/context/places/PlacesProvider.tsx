import { useEffect, useReducer } from 'react';
import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lgnLat) =>
      dispatch({
        type: 'setUserLocation',
        payload: lgnLat,
      })
    );
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};