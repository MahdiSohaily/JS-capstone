import axios from 'axios';

export default class Comments {
  constructor() {
    this.involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.appID = 'XuUh3fcKVDAPOoTxKraP';
  }

  async getComments(id) {
    const response = await fetch(`${this.involvementURL}${this.appID}/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  }

  async setComment(id, userName, comment) {
    const response = await axios.post(
      `${this.involvementURL}${this.appID}/comments/`,
      {
        item_id: id,
        username: userName,
        comment,
      },
    );
    return response;
  }
}