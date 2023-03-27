import '@testing-library/jest-dom/extend-expect';
require('regenerator-runtime/runtime');
global.React = require('react');
global.render = require('@testing-library/react').render;
global.act = require('@testing-library/react').act;
global.renderWithRouter = require('./utils/tests/renderWithRouter');
global.enhancedRender = require('./utils/tests/enhancedRenderer');

window.scroll = jest.fn();

process.env.TZ = 'UTC';

const crypto = require('crypto');

// const replaceAllInserter = require('string.prototype.replaceall');

// replaceAllInserter.shim(); //is removing from app- check that.

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), //deprecated
    removeListener: jest.fn(), //deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

jest.mock('react-i18next', () => ({
  __esModule: true,
  useTranslation: () => ({
    t: (key) => key?.replace(/^(.*?):/, ''),
    i18n: {
      language: 'en',
      addResourceBundle: () => {
        return;
      },
      options: {fallbackLng: 'en'},
      changeLanguage: () => {
        return;
      },
      exists: () => true,
    },
  }),

  initReactI18next: {
    type: '3rdParty',
    init: () => {
      return;
    },
  },
}));

jest.mock('utils/hooks/useTranslationResources', () => ({
  __esModule: true,
  useTranslationResource: () => ({loading: false}),
}));

jest.mock('components/Modules/validation', () => () => ({
  validateData: jest.fn(),
  convertData: jest.fn(),
}));

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    _esModule: true,
    ...originalModule,
    useSearchParams: () => [{get: () => jest.fn().mockReturnValue(5)}, jest.fn()],
    useNavigate: () => jest.fn(),
    useLocation: () => jest.fn(),
  };
});
