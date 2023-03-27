import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    translation: {},
  },
  fallbackLng: 'en',
  debug: false,
  interpolation: {},
  ns: 'translations',
  defaultNS: 'translations',
  keySeparator: ' ',
});

export default i18n;
