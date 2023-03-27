import React from 'react';
import {Navigate, useSearchParams} from 'react-router-dom';
import {shared} from 'sharedConstants';
import PropTypes from 'prop-types';

const paths = {...shared.routes};

const RequireSearchParam = ({children, path}) => {
  const [searchParam] = useSearchParams();

  if (path === paths.testPage.root) {
    try {
      const paramForUrl = searchParam.get('paramForUrl');
      const paramForComponent = searchParam.get('paramForComponent');
      if (paramForComponent && paramForUrl) {
        sessionStorage.setItem(
          paramForUrl,
          JSON.stringify({
            paramForUrl,
            paramForComponent,
          }),
        );
        return <Navigate to={`${paths.testPage.root}/${paramForUrl}`} />;
      } else {
        return <Navigate to={paths.mainPage.root} />;
      }
    } catch (error) {
      console.error('session storage is unavailable', error);
      return <Navigate to={paths.mainPage.root} />;
    }
  }

  return children;
};

RequireSearchParam.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default RequireSearchParam;
