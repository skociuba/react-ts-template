import {$get} from '../../utils/transport';

export const getTestData = ({config}) => {
  const params = {
    url: config.urls.test,
    headers: {...config.headers},
  };
  return $get(params);
};
