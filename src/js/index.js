/* Here goes your JS code */
'use strict';
var ESCAPE_KEY = 'Escape';
var SUBMIT_DELAY = 3000;

var popup = document.querySelector('.popup');
var clickMeButton = document.querySelector('#show-popup-form');
var closePopupButton = document.querySelector('.popup__close');
var submitFormButton = document.querySelector('.popup__submit')
var popupForm = document.querySelector('.popup__form');

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

var successMsgShow = function () {
  clickMeButton.style.display = 'none';
  var div = document.createElement('div');
  div.textContent = 'Thank you!';
  div.classList.add('success-msg');
  document.querySelector('.main').appendChild(div);
};

submitFormButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  successMsgShow();
  setTimeout(function () {
    hidePopup();
  }, SUBMIT_DELAY);
});

clickMeButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', hidePopup);