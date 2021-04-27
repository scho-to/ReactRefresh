import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };
  
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(favs => {
        return favs.id !== meetupId;
      });
    });
  };
  
  function isFavoriteHandler(meetupId) {
    return userFavorites.some(favs => {
      return meetupId === favs.id;
    });
  };
  
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler
  };
  
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;