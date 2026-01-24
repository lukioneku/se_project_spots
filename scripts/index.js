const editProfileBtn = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-btn');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editProfileForm = editProfileModal.querySelector('#editProfileForm');
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const newPostBtn = document.querySelector('.profile__add-btn');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');

const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');

const newPostForm = newPostModal.querySelector('#new-post-form');
const newPostCaptionInput = newPostModal.querySelector('#card-caption-input');
const postImageUrlInput = newPostModal.querySelector('#card-image-url-input');

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener('click', function() {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener('click', function() {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener('click', function()  {
openModal(newPostModal);
});
newPostCloseBtn.addEventListener('click', function()  {
closeModal(newPostModal);
});

function handleEditProfileFormSubmit(event) {
    event.preventDefault();
profileNameElement.textContent = editProfileNameInput.value;
profileDescriptionElement.textContent = editProfileDescriptionInput.value;
closeModal(editProfileModal);
}

const addCardFormElement = newPostModal.querySelector('#new-post-form');
const nameInput = newPostModal.querySelector('#card-image-url-input'); // or whatever your input name is
const linkInput = newPostModal.querySelector('#card-caption-input'); // or whatever your input name is

// Step 2: Create the simple form handler
function handleAddCardSubmit(evt) {
  // Prevent the form from actually submitting
  evt.preventDefault(); 
 
  // Just log the values - that's it!
  console.log('Name:', nameInput.value);
  console.log('Link:', linkInput.value);

  // Close the modal (using your reusable function)
  closeModal(newPostModal);
}

// Step 3: Add the event listener
addCardFormElement.addEventListener('submit', handleAddCardSubmit);

editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
newPostForm.addEventListener('submit', handleAddCardSubmit);