window.axios = require("axios");

window.axios.interceptors.response.use(
  (response) => response,
  (error) => error.response || error
);
