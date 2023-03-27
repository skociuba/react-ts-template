import React from 'react';
import {Snackbar} from '@material/react-snackbar';
import {shared} from 'sharedConstants';

const {
  config: {channelType},
} = shared;

import {ErrorMessage} from '../../Modules/ErrorMessagesEnhancement';

const ErrorNotification = ({errors}) =>
  errors?.errors?.length
    ? errors?.errors?.map(
        (error, i) =>
          error && (
            <p key={i}>
              <Snackbar
                message={ErrorMessage({
                  payload: error,
                  channel: channelType,
                  callCentrePrefix: 'GB',
                })}
                actionText="X"
              />
            </p>
          ),
      )
    : null;

export default ErrorNotification;
