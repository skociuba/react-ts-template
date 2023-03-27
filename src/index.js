import React from 'react';
import ReactDOM from 'react-dom';

import Routing from './routing/routes';

if (process.env.NODE_ENV !== 'production') {
  const whyDidyouRender = require('@welldone-software/why-did-you-render');
  whyDidyouRender(React);
}

ReactDOM.render(<Routing />, document.getElementById('root'));
