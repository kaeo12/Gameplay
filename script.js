const likeButton = document.querySelector('.like-button');
const gameButton = document.querySelector('.game-button');

likeButton.addEventListener('click', () => {
  if (likeButton.textContent === 'Like') {
    likeButton.textContent = 'Unlike';
  } else {
    likeButton.textContent = 'Like';
  }
});

gameButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = prompt('Guess a number between 1 and 10');
  guess = parseInt(guess);

  if (guess === randomNumber) {
    alert('You guessed it!');
  } else {
    alert(`Sorry, the number was ${randomNumber}`);
  }
});
