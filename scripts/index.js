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


    editProfileBtn.addEventListener('click', function()  {
    editProfileNameInput.value = profileNameElement.textContent;
    editProfileDescriptionInput.value = profileDescriptionElement.textContent;
    editProfileModal.classList.add('modal_is-opened');
    });
    editProfileCloseBtn.addEventListener('click', function()  {
    editProfileModal.classList.remove('modal_is-opened');
    });

        newPostBtn.addEventListener('click', function()  {
    newPostModal.classList.add('modal_is-opened');
    });
    newPostCloseBtn.addEventListener('click', function()  {
    newPostModal.classList.remove('modal_is-opened');
    });

    function handleEditProfileFormSubmit(event) {
        event.preventDefault();
    profileNameElement.textContent = editProfileNameInput.value;
    profileDescriptionElement.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove('modal_is-opened');
    }

    function handleNewPostFormSubmit(event) {
        event.preventDefault();
        const newPostItem = document.createElement('li');
        newPostItem.className = "card";
        const newPostImage = document.createElement('img');
        newPostImage.className = "card__image";
        const newPostContent = document.createElement('div');
        newPostContent.className = "card__content";
        const newPostCaption = document.createElement('h2');
        newPostCaption.className = "card__title";
        const newPostlikeBtn = document.createElement('button');
        newPostlikeBtn.className = "card__like-btn";
        newPostImage.src = postImageUrlInput.value;
        newPostCaption.textContent = newPostCaptionInput.value;
        newPostItem.appendChild(newPostImage);
        newPostItem.appendChild(newPostContent);
        newPostContent.appendChild(newPostCaption);
        newPostContent.appendChild(newPostlikeBtn);
        document.querySelector('.cards__list').appendChild(newPostItem);
    newPostModal.classList.remove('modal_is-opened');
    }

    editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
    newPostForm.addEventListener('submit', handleNewPostFormSubmit);