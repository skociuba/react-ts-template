//const link = `http://webdeveloperblog.cba.pl`;

export const getLinkWithParameter = (param) =>
  process.env.REACT_APP_CHANNEL_TYPE === 'customer'
    ? `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}`
    : `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}/${param}`;

export const encodeQueryData = (paramsObject) => {
  if (!paramsObject) {
    return '';
  }

  const ret = [];
  for (const param in paramsObject) {
    ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(paramsObject[param]));
  }
  return ret.join('&');
};
