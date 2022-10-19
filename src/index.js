/* eslint-disable linebreak-style */
import './styles/styles.css';
import './Modules/UIEvents.js';
import showPopup from './Modules/popup.js';


const openPopup = document.querySelector('.'); /* Add class from comment button */
const popupWindow = document.querySelector('.popup');
const closePopup = document.querySelector('.popup-close');

openPopup.addEventListener('click', () => {
    getProducts().then(data) => {
        allProducts = data;
        showPopup();
        popupWindow.style.display = 'block';
    }
});
closePopup.addEventListener('click', () => {
    popupWindow.style.display = 'none';
});