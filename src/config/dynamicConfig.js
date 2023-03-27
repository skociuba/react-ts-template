const {
  NODE_ENV,
  REACT_APP_URLS_TEST,
  REACT_APP_URLS_TEST2,
  REACT_APP_CHANNEL_TYPE,
  REACT_APP_ENV_TYPE,
  REACT_APP_URLS_MOCK_TEST,
} = process.env;

const dynamicConfig = {
  urls: {
    test: REACT_APP_URLS_TEST,
    test2: REACT_APP_URLS_TEST2,
    mockTest: REACT_APP_URLS_MOCK_TEST,
  },
  params: {},
  headers: {},
  envType: REACT_APP_ENV_TYPE,
  channelType: REACT_APP_CHANNEL_TYPE,
};
export const CHANNEL_TYPE = REACT_APP_CHANNEL_TYPE;
export const ENV_TYPE = NODE_ENV;
export const ROOT_PREFIX = '';

export default dynamicConfig;
