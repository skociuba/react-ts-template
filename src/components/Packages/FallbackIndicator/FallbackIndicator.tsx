import React from 'react';
import PropTypes from 'prop-types';

import {Props} from './model';
export const isValid = (value) => !!value || value === 0 || value === '0';

export const isChildrenValid = (children) => {
  const child = children?.props?.children || children;
  return isValid(child);
};

const FallbackIndicator = React.forwardRef<HTMLButtonElement, Props>(
  ({children, fallback, condition, testId, className}, ref) => {
    const shouldChildrenBeRendered =
      typeof condition === 'boolean' ? condition : isChildrenValid(children);

    return (
      <span ref={ref} className={className} data-testId={testId}>
        {shouldChildrenBeRendered ? children : fallback}
      </span>
    );
  },
);

FallbackIndicator.defaultProps = {
  fallback: '-',
  testId: 'fallbackIndicator',
};

FallbackIndicator.propTypes = {
  children: PropTypes.string,
  fallback: PropTypes.any,
  condition: PropTypes.bool,
  testId: PropTypes.string,
  className: PropTypes.string,
};

FallbackIndicator.displayName = 'FallbackIndicator';

export default FallbackIndicator;
