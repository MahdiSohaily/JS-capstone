import axios from 'axios';

export default class Comments {
  constructor() {
    this.involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.appID = 'XuUh3fcKVDAPOoTxKraP';
  }

  async getComments() {
    const response = await fetch(`${this.involvementURL}${this.appID}/comments/`);
    const data = await response.json();
    return data;
  }

  async setComments(id, name, message) {
    const response = await axios.post(
      `${this.involvementURL}${this.appID}/comments/`,
      {
        item_id: id,
        username: name,
        comment: message,
      },
    );
    return response;
  }
}