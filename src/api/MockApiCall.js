const MockAccount = require("../accounts/MockAccount.js");
const DELAY_TIME = 2000;

export const MockApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MockAccount);
    }, DELAY_TIME);
  });
};
