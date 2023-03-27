import {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';

const LOCATION_STATE_KEY = 'locationState';

export const getParsedItemFromStorage = (storage, key) => {
  const item = storage?.getItem(key);
  return item ? JSON.parse(item) : undefined;
};
export const getParsedChildItemFromStorage = (storage, parentKey, childKey) => {
  const parseItem = getParsedItemFromStorage(storage, parentKey);
  return parseItem ? parseItem[childKey] : undefined;
};

export const createLocationStateKey = (productAlternativeNumber) =>
  productAlternativeNumber ? productAlternativeNumber : null;

export const updateLocationState = (params) => {
  const {productAlternativeNumber} = params || {};
  const key = createLocationStateKey(productAlternativeNumber);

  if (!key) {
    return;
  }

  try {
    const locationState = localStorage.getItem(LOCATION_STATE_KEY);

    let updatedLocationState = {
      [key]: params,
    };

    if (locationState) {
      const currentLocationState = JSON.parse(locationState);
      updatedLocationState = {
        ...currentLocationState,
        [key]: params,
      };
    }
    localStorage.setItem(LOCATION_STATE_KEY, JSON.stringify(updatedLocationState));
  } catch (error) {
    console.error('locale storage is unavailable', error);
  }
};

export const useLocationState = () => {
  const [locationState, setLocationState] = useState(null);

  const location = useLocation();

  const {id} = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    try {
      const locationStateParamStoredInSessionStorage = getParsedItemFromStorage(sessionStorage, id);
      const locationStateParamStoredInLocalStorage = getParsedChildItemFromStorage(
        localStorage,
        LOCATION_STATE_KEY,
        id,
      );

      if (locationStateParamStoredInLocalStorage) {
        localStorage.removeItem(LOCATION_STATE_KEY);
        if (!locationStateParamStoredInSessionStorage) {
          sessionStorage.setItem(id, JSON.stringify(locationStateParamStoredInLocalStorage));
        }
      }
      setLocationState(
        locationStateParamStoredInLocalStorage || locationStateParamStoredInSessionStorage,
      );
    } catch (error) {
      console.error('locale storage is unavailable', error);
    }
  }, [location, id]);

  return {
    locationState,
    updateLocationState,
  };
};
