import {printError} from './utils/printConsoleError';
import {parsePayload} from './utils/parsePayload';

const getDefaultErrorMessage = (channel) =>
  require(`./content/${channel || 'customer'}/language.js`).default.DEFAULT;

const isErrorCodeSupported = (
  errorCode,
  errorMessage,
  DefaultErrorMessage,
  callCentrePrefixUsed,
) => {
  if (!(errorCode in errorMessage)) {
    printError(
      `Provided error code not supported by errorMessage module. Displaying defaultErrorMessage.\n ${errorCode}`,
    );
    return DefaultErrorMessage;
  }
  return errorMessage[errorCode].replace('${callCentrePrefix}', callCentrePrefixUsed);
};

const errorMessage = (context) => {
  const {payload, language, channel, callCentrePrefix} = context;
  const languageUsed = language || 'language';
  const channelUsed = channel || 'customer';
  const callCentrePrefixUsed = callCentrePrefix || '';

  const defaultErrorMessage = getDefaultErrorMessage(channelUsed);

  if (!payload) {
    printError(`API response property is required`);
    return defaultErrorMessage;
  }
  const errorCode = parsePayload(payload);
  let errorMessages = {};
  try {
    errorMessages = require(`./content/${channelUsed}/${languageUsed}.js`).default;
  } catch (error) {
    printError('Provided language not supported yet.');
    return defaultErrorMessage;
  }
  return isErrorCodeSupported(errorCode, errorMessages, defaultErrorMessage, callCentrePrefixUsed);
};

export default errorMessage;
