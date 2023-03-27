import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import i18n from 'i18n';
import {I18nextProvider} from 'react-i18next';

import store from '../store';

import {Routing} from './routes.config';

const Routes = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Routing />
      </HashRouter>
    </I18nextProvider>
  </Provider>
);

export default Routes;
