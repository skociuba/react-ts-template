import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {render} from '@testing-library/react';

const renderWithRouter = (ui) => {
  const wrapperRender = render(<Router>{ui}</Router>);

  return {
    ...wrapperRender,
    rerender: (rerenderedUi) => wrapperRender.rerender(<Router>{rerenderedUi}</Router>),
  };
};

export default renderWithRouter;

module.export = renderWithRouter;
