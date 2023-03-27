const parseStringToJSON = (string) => {
  const stringToParse = string.message ? string.message : string;

  try {
    return JSON.parse(stringToParse);
  } catch (error) {
    return stringToParse;
  }
};

export const parsePayload = (payload) => {
  const parsedPayload = parseStringToJSON(payload);
  if (parsedPayload?.status && parsedPayload.status.constructor === Number) {
    return parsedPayload.status;
  } else if (parsedPayload?.error && parsedPayload.error.constructor === Array) {
    return parsedPayload?.error[0]?.reasonCode;
  } else if (parsedPayload?.reasonCode && parsedPayload.reasonCode.constructor === String) {
    return parsedPayload.reasonCode;
  } else {
    return parsedPayload;
  }
};
