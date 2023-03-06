import axiosClient from "../helpers/axiosClient";

class ApiFactory {
  constructor() {
    this.axios = axiosClient;
  }
}

export default ApiFactory;
