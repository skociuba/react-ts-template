import React from 'react';
import {getErrorCode} from 'utils/mappingHelpers/index';
import {Snackbar} from '@material/react-snackbar';

import {errorContainer} from './ErrorMessage.style';

const ErrorMessage = (error) =>
  error?.length ? (
    <div className={errorContainer}>
      <Snackbar message={getErrorCode(error)} actionText="X" />
    </div>
  ) : null;

export default ErrorMessage;
