const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

const express = require("express");
const app = express();

const getApp = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await nextApp.prepare();

      require("./boot")(app, nextApp);

      resolve(app);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = getApp;
