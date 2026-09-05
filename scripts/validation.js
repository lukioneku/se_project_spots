const showInputError = (formEl, inputEl, errorMsg) => {
  const errorMsgID = inputEl.id + '-error';
  const errorMsgEl = formEl.querySelector("#" + errorMsgID);
  errorMsgEl.textContent = errorMsg;
  inputEl.classList.add('modal__input_type_error');
  errorMsgEl.classList.add('modal__error_visible');
};

const hideInputError = (formEl, inputEl) => {
  const errorMsgID = inputEl.id + '-error';
  const errorMsgEl = formEl.querySelector("#" + errorMsgID);
  inputEl.classList.remove('modal__input_type_error');
  errorMsgEl.classList.remove('modal__error_visible');
  errorMsgEl.textContent = '';
  console.log(errorMsgEl);
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  });

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    buttonEl.classList.add('modal__submit-btn_disabled');
  } else {
    buttonEl.classList.remove('modal__submit-btn_disabled');
  }
};

const checkInputValidity = (formEl, inputEl) => {
  console.log(inputEl.validity.valid);
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll('.modal__input'));
  const buttonEl = formEl.querySelector('.modal__submit-btn');


  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', function () {
      checkInputValidity(formEl, inputEl);
      //toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll('.modal__form'); 
  formList.forEach((formE) => {
    setEventListeners(formE);
    });
};

enableValidation();