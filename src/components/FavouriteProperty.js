import React from 'react';

function useFavorite(listingId) {
  const Key = 'favorites';
  const savedJSON = JSON.parse(localStorage.getItem(Key));

  const [favoritesCollection, setFavoritesCollection] = React.useState({
    ...savedJSON,
  });
  const [isFavorite, setFavorite] = React.useState(
    savedJSON && savedJSON[listingId],
  );

  function toggleFavorite(listingId) {
    const favoritesToSave = {
      ...favoritesCollection,
    };

    if (favoritesCollection[listingId]) {
      favoritesToSave[listingId] = false;
      setFavoritesCollection({ favoritesCollection });
      setFavorite(false);
    } else {
      favoritesToSave[listingId] = true;
      setFavoritesCollection(favoritesToSave);
      setFavorite(true);
    }
  }
  React.useEffect(() => {
    localStorage.setItem(Key, JSON.stringify(favoritesCollection));
  }, [favoritesCollection]);

  return [isFavorite, toggleFavorite];
}

export default useFavorite;
