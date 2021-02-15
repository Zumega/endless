import axios from "axios";
// var join = require('url-join');

// https://github.com/sindresorhus/is-absolute-url/blob/master/index.js#L7
// var isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use(config => {
  // Concatenate base path if not an absolute URL
  // if (!isAbsoluteURLRegex.test(config.url)) {
  config.url = `http://localhost:3000/${config.url}`;
  // }

  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  response => {
    console.log("error", response);
    return response;
  }
);
