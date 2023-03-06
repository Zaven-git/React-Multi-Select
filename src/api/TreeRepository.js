import ApiFactory from "./ApiFactory";

class TreeRepository extends ApiFactory {
  constructor(props) {
    super()
    this.prefix_string = "api.user.tree";
  }
  get prefix() {
    return this.prefix_string;
  }
  addTree(credentials) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(`${this.prefix}.node.create`, null,{params:credentials})
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response ? err.response.data.message : "Adding Tree failed"));
    });
  }
  editTree(credentials) {
    console.log(credentials,'credentials')
    return new Promise((resolve, reject) => {
      this.axios
        .post(`${this.prefix}.node.rename`,null, {params:credentials})
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response ? err.response.data.message : "Adding Tree failed"));
    });
  }

  removeTree(credentials) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(`${this.prefix}.node.delete`,null, {params:credentials})
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response ? err.response.data.message : "Removing Tree failed"));
    });
  }

  getTrees(credentials) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(`${this.prefix}.get`,{params:credentials} )
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response ? err.response.data.message : "Getting Trees List failed"));
    });
  };

}

export default TreeRepository;
