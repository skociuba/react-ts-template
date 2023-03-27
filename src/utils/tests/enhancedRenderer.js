import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import Application from 'pages/Application';
import store from 'store';

const CommonProviders = ({children = []}, skipApplication = true) => (
  <Provider store={store}>
    <Router>{(skipApplication && children) || <Application>{children}</Application>}</Router>
  </Provider>
);
const enhancedRenderer = (ui, options) => render(ui, {wrapper: CommonProviders, ...options});

export default enhancedRenderer;

module.exports = enhancedRenderer;
