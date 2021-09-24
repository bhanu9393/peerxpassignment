import axios from "axios";

export default class Assesment {
  // https: //demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062&include=tags,authors
  // https://demo.ghost.io/ghost/api/v3/content/pages/?key=22444f78447824223cefc48062&include=tags,authors
  // https://demo.ghost.io/ghost/api/v3/content/authors/?key=22444f78447824223cefc48062&include=tags,authors
  baseUri = "https://demo.ghost.io/ghost/api/v3/content";
  getPosts() {
    return axios.get(
      `${this.baseUri}/posts/?key=22444f78447824223cefc48062&include=tags,authors`
    );
  }

  getPages() {
    return axios.get(
      `${this.baseUri}/pages/?key=22444f78447824223cefc48062&include=tags,authors`
    );
  }

  getAuthors() {
    return axios.get(
      `${this.baseUri}/authors/?key=22444f78447824223cefc48062&include=tags,authors`
    );
  }

  getTags() {
    return axios.get(
      `${this.baseUri}/tags/?key=22444f78447824223cefc48062&include=tags,authors`
    );
  }
}
