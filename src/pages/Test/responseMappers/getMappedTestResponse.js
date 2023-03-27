export const getMappedTestResponse = (response) => {
  if (!response?.payload?.data) {
    return null;
  }
  const {
    payload: {data},
  } = response;

  return {data, example: 'hello'};
};
