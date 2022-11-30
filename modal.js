function editNav() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelector('.close');
const formId = document.getElementById('form-id');
const modalBody = document.querySelector('.modal-body');
const confirmationBody = document.querySelector('.confirmation-body');
const closeConfirmationBtn = document.querySelector('.btn-close');
const submitBtn = document.querySelector('.btn-submit');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

// check length of first and last name
const isBetween = (length, min) => (length < min ? false : true);

const checkName = (name, childElement) => {
  let valid = false;
  const min = 3;
  const userName = name.value.trim();
  let childEl = childElement;

  if (!isBetween(userName.length, min, childEl)) {
    console.log('Name is should have 3 or more characters');
    childEl.parentElement.setAttribute('data-error-visible', 'true');
    childEl.parentElement.setAttribute(
      'data-error',
      'doit être au moins 3 caractères'
    );
  } else {
    childEl.parentElement.setAttribute('data-error-visible', '');
    childEl.parentElement.setAttribute('data-error', '');
    valid = true;
  }
  return valid;
};

// Form submit

formId.addEventListener('submit', function (e) {
  e.preventDefault();

  let isFirstNameValid = checkName(firstName, firstName);
  console.log('isFirstNameValid', isFirstNameValid);
  let isLastNameValid = checkName(lastName, lastName);
  console.log('isLastNameValid', isLastNameValid);

  let isFormValid = isFirstNameValid && isLastNameValid;
  console.log('isFormValid', isFormValid);

  if (isFormValid) {
    modalBody.style.display = 'none';
    confirmationBody.style.display = 'flex';
  }
});

// close confirmation

closeConfirmationBtn.addEventListener('click', closeModal);

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

// close MODAL Button
closeBtn.addEventListener('click', closeModal);

// close modal on click outside of form
window.addEventListener('click', function (e) {
  if (e.target.className === 'bground') {
    closeModal();
  }
});

// close modal on with escape key
window.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal
function closeModal() {
  modalbg.style.display = 'none';
}
