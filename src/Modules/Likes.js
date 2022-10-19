import axios from 'axios';

export default class Likes {
  constructor() {
    this.involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.appID = 'XuUh3fcKVDAPOoTxKraP';
  }

  async getLikes() {
    const response = await fetch(`${this.involvementURL}${this.appID}/likes/`);
    const data = await response.json();
    return data;
  }

  async setLike(id) {
    const response = await axios.post(
      `${this.involvementURL}${this.appID}/likes/`,
      {
        item_id: id,
      },
    );
    return response;
  }
}
