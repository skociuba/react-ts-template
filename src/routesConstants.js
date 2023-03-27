const generatePrefixedRootContext = (path) => `/${path}`;

const routes = {
  root: generatePrefixedRootContext(''),
  mainPage: {
    root: generatePrefixedRootContext('main-page'),
  },
  testPage: {
    root: generatePrefixedRootContext('test-page'),
  },
};

export {routes};
