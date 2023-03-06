import axios from "axios";

/** Default config for axios instance */
let config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

/** Creating the instance for axios */
const axiosClient = axios.create(config);

/** Adding the request interceptors */
axiosClient.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);
/** Adding the response interceptors */
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
