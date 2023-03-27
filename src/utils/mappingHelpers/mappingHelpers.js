import {shared} from 'sharedConstants';

const {statuses, errors} = shared;

export const simpleMappersExample = (statusCode) => statuses[statusCode];

export const getMapping = (mappedData) => {
  const getData = shared?.mapping?.find(({value}) => value === mappedData);
  return getData ? getData?.label : '';
};
export const getErrorCode = (mappedData) => errors[mappedData] || `unknown error:${mappedData}`;
