"use strict";
const awsServerlessExpress = require("aws-serverless-express");
const getApp = require("./app");

exports.express = async (event, context) => {
  const app = await getApp();
  const server = awsServerlessExpress.createServer(app);
  return awsServerlessExpress.proxy(server, event, context);
};
