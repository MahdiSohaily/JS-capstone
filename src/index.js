/* eslint-disable linebreak-style */
import axios from 'axios';
import './styles/styles.css';
import './Modules/navbar.js';

const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'XuUh3fcKVDAPOoTxKraP';
appendProducts();

/**
 * this function fire on the page load
 * and send a get request to an external API
 * and pass the received data to the @renderTemplate function
 */
 function appendProducts() {
  window.addEventListener('load', () => {
    getProducts().then((data) => {
      allProducts = data;
      renderTemplate();
    });
  });
}