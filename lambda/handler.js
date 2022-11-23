"use strict";

const app = require('./app');

module.exports.run = async (event) => {
  const result = await app.run();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
