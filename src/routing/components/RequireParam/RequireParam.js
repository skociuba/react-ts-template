import React from 'react';
import {Navigate, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getParsedChildItemFromStorage} from 'utils/hooks/useLocationState';

const LOCATION_STATE_KEY = 'locationState';

const RequireParam = ({children, isLocationStateRequire, redirectTo}) => {
  if (!isLocationStateRequire) {
    return children;
  }

  try {
    const {id} = useParams();
    const hasStoredParam = !!(
      getParsedChildItemFromStorage(localStorage, LOCATION_STATE_KEY, id) ||
      sessionStorage.getItem(id)
    );
    return hasStoredParam ? children : <Navigate to={redirectTo} />;
  } catch (error) {
    console.error('localStorage or sessionStorage is unavailable:', error);
  }
};

RequireParam.propTypes = {
  children: PropTypes.element.isRequired,
  isLocationStateRequire: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RequireParam;
