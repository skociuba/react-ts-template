import {createContext} from 'react';

const ThemeContext = createContext('light');

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}
export default ThemeContext;
