import {APP_ENVS, APP_CHANNELS} from './constants';
import {ENV_TYPE, CHANNEL_TYPE, ROOT_PREFIX} from './dynamicConfig';

export const getAppEnv = () => ENV_TYPE || APP_ENVS.LOCAL;
export const getAppChannel = () => CHANNEL_TYPE || APP_CHANNELS.STAFF;
export const getRootPrefix = () => ROOT_PREFIX || '/';
export const getLocationPathname = (pathname) => `${getRootPrefix()}${pathname}`;
export const isSessionValid = (entitlements) => {
  return entitlements && entitlements.authToken > '';
};
