import {isPlainObject} from 'lodash';

//import { ENVS } from "config/constants"
import RequestError from './../errors/RequestError';

async function fetchWrapper(requestOptions) {
  const {url, body, method, headers, redirect, request} = requestOptions;

  let requestBody = body;
  let responseHeaders;
  let status;
  let responseUrl;

  if (isPlainObject(requestBody) || Array.isArray(requestBody)) {
    requestBody = JSON.stringify(requestBody);
  }

  const options = Object.assign(
    {
      method,
      body: requestBody,
      headers,
      redirect,
    },
    request,
  );

  try {
    const response = await fetch(url, options);
    responseHeaders = response.headers;
    status = response.status;
    responseUrl = response.url;

    for (const keyAndValue of response.headers) {
      responseHeaders[keyAndValue[0]] = keyAndValue[1];
    }
    if (status === 204 || status === 205) {
      return;
    }

    if (method === 'HEAD') {
      if (status < 400) {
        return;
      }
      throw new RequestError(response.statusText, status, {
        responseHeaders,
        request: requestOptions,
      });
    }
    if (status === 304) {
      throw new RequestError('not modified', status, {
        responseHeaders,
        request: requestOptions,
      });
    }
    if (status >= 400) {
      return await response.text().then((message) => {
        const error = new RequestError(message, status, {
          responseHeaders,
          request: requestOptions,
        });

        try {
          const responseBody = JSON.parse(error.message);
          const errors = responseBody.errors;
          error.message = error.message + ': ' + errors.map(JSON.stringify).join(',');
        } catch (e) {
          console.error(e);
          // if (process.env.NODE_ENV !== ENVS.PRODUCTION) {
          //   console.error(e)
          // }
        }
        throw error;
      });
    }
    let payload = response;
    const contentType = response.headers.get('content-type');
    if (/application\/json/.test(contentType)) {
      payload = await response.json();
    } else if (!contentType || /^text\/|charset=utf8$/.test(contentType)) {
      payload = await response.text();
    }
    return {
      status,
      responseUrl,
      responseHeaders,
      payload,
    };
  } catch (error_1) {
    if (error_1 instanceof RequestError) {
      throw error_1;
    }
    throw new RequestError('not modified', error_1.message, 500, {
      headers,
      request: requestOptions,
    });
  }
}
export const $get = (requestOptions) => {
  return fetchWrapper({...requestOptions, method: 'GET'});
};
export const $post = (requestOptions) => {
  return fetchWrapper({...requestOptions, method: 'POST'});
};
export const $put = (requestOptions) => {
  return fetchWrapper({...requestOptions, method: 'PUT'});
};
