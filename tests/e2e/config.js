import {routes} from '../../src/routesConstants';

const config = {
  GET_APP_URL: (path) => `http://127.0.0.1:3000/#${path}`,
  routes: routes,
};

module.exports = config;
