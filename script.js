const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', () => {
  if (likeButton.textContent === 'Like') {
    likeButton.textContent = 'Unlike';
  } else {
    likeButton.textContent = 'Like';
  }
});
