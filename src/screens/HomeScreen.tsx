import { ButtonMyLocation, MapView, SearchBar } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <ButtonMyLocation />
      <SearchBar />
    </div>
  );
};
