import TreeRepository from "./TreeRepository";

class Api {
  static tree(method, data) {
    return new TreeRepository()[method](data);
  }
}

export default Api;
