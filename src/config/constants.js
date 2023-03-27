import actionNames from 'utils/actionNames';

export const valueToLower = (v) => v.toLowerCase();
export const LOCAL_SESSION_DURATION_SEC = 15 * 60;
export const ENVS = actionNames(['PRODUCTION', 'DEVELOPMENT', 'TESTING', 'QA'], valueToLower);
export const APP_ENVS = actionNames(['LOCAL', 'TESTING'], valueToLower);
export const APP_CHANNELS = actionNames(['STAFF', 'CUSTOMER'], valueToLower);
export const IS_STAFF = process.env.REACT_APP_CHANNEL_TYPE === 'staff';
export const IS_CUSTOMER = process.env.REACT_APP_CHANNEL_TYPE === 'customer';

export const TEALIUM_TRACK = actionNames(['VIEW', 'EVENT']);
