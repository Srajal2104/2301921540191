export const logger = (message, data = null) => {
  console.log(
    `[LOG] ${new Date().toISOString()} : ${message}`,
    data
  );
};