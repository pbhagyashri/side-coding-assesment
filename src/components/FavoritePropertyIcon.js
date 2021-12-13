import React, { useState, useEffect } from 'react';

import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

import {
  saveProperty,
  getFaoritedPropertiesFromStorage,
} from '../utils/helper';

const FavoritePropertyIcon = ({ mlsId }) => {
  const [propertyFavorated, setPropertyFavorated] = useState(false);

  useEffect(() => {
    //check if there are favorited properties in localStorage. If yes, set propertyFavorated to true
    const favoritedProperties =
      getFaoritedPropertiesFromStorage('savedProperties');
    if (favoritedProperties && favoritedProperties[mlsId]) {
      setPropertyFavorated(true);
    }
  }, [mlsId]);

  const handleCLick = () => {
    setPropertyFavorated(!propertyFavorated);

    saveProperty(mlsId, 'savedProperties');
  };

  return (
    <div>
      {propertyFavorated ? (
        <button
          className="property-listing-container__button"
          onClick={() => handleCLick()}
        >
          <img src={heartFill} alt="save property as favorite" />
        </button>
      ) : (
        <button
          className="property-listing-container__button"
          onClick={() => handleCLick()}
        >
          <img src={heartStroke} alt="save property as favorite" />
        </button>
      )}
    </div>
  );
};

export default FavoritePropertyIcon;
