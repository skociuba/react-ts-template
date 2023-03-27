import React from 'react';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteNotFound = ({children, path, redirectTo}) =>
  path === '*' ? <Navigate to={redirectTo} /> : children;

RouteNotFound.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RouteNotFound;
