const atimport = require("postcss-import");
const presetenv = require('postcss-preset-env');
const nested = require('postcss-nested');
const atrule = require('postcss-extend-rule');
const short = require('postcss-short');

const config = {
  plugins: [
    atimport({
      path: ["src/styles"],
    }),
    nested,
    atrule,
    short,
    presetenv,
  ]
};

module.exports = config;
