/* Here goes your JS code */
'use strict';
var ESCAPE_KEY = 'Escape';
var popup = document.querySelector('.popup');
var clickMeButton = document.querySelector('#show-popup-form');
var closePopupButton = document.querySelector('.popup__close');

var hidePopupWithEscape = function (evt) {
  if (evt.key === ESCAPE_KEY) {
    hidePopup();
  }
};

var showPopup = function () {
  popup.classList.add('popup-show');
  document.addEventListener('keydown', hidePopupWithEscape);
}

var hidePopup = function () {
  if (popup.classList.contains('popup-show')) {
    popup.classList.remove('popup-show');
  }
  document.removeEventListener('keydown', hidePopupWithEscape);
};

clickMeButton.addEventListener("click", showPopup);
closePopupButton.addEventListener('click', hidePopup);