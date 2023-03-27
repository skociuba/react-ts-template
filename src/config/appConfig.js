import {get} from 'lodash';

import {getAppEnv, getAppChannel, getRootPrefix} from './utils';
import dynamicConfig from './dynamicConfig.js';

export const appEnv = getAppEnv();
export const appChannel = getAppChannel();

const baseConfig = {
  rootPrefix: getRootPrefix(),
};

export const appBaseUrl = get(baseConfig, `environments.[${appEnv}.baseUrl]`);

export const overridableConfig = {};

export const getOverridableConfig = () =>
  get(overridableConfig, `${getAppEnv()}.${getAppChannel()}`, {});

export const getDynamicConfig = () => dynamicConfig;
