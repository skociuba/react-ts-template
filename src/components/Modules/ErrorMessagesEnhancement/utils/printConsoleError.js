export const printError = (message) => {
  if (console && process.env.NODE_ENV !== 'production') {
    console.error(`${message}`);
  }
};
