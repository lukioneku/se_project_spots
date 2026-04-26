const initialCards = [
  {
    name: 'Val Thorens',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg'
   },
  {
  name: 'Restaurant terrace',
  link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg'
   },
  {
  name: 'An outdoor cafe',
  link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg'
   },
  {
  name: 'A very long bridge, over the forest and through the trees',
  link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg'
},
  {
  name: 'Tunnel with morning light',
  link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg'
},
  {
  name: 'Mountain house',
  link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg'
}
];

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

initialCards.forEach(function(card) {
  console.log('Name:', card.name);
  console.log('Link:', card.link);
});