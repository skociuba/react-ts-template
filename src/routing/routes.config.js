import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const TestPage = lazy(() => import('../pages/Test/Test'));
const paths = {...shared.routes};

let routes = [
  {
    path: paths.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.testPage.root,
    element: TestPage,
    exact: true,
  },
  {
    path: '*',
    element: MainPage,
    exact: true,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route
        path={route.path}
        key={i}
        element={
          <RouteNotFound path={route.path} redirectTo={paths.mainPage.root}>
            <Application>
              <route.element />
            </Application>
          </RouteNotFound>
        }
      />
    ))}
  </Routes>
);

export default Routing;
