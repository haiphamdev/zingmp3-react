import axios from "axios";

// console.log(process.env.REACT_APP_SERVER_URL);

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_SERVER_URL,
  // baseURL: "http://localhost:5000/api",
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
