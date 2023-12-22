//getting hold of all the buttons
const buttons = document.querySelectorAll('.button');

// console.log(buttons);

//getting hold of the body tag.
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const colour = e.target.id;
    if (colour === 'grey') {
      body.style.backgroundColor = colour;
    } else if (colour === 'yellow') {
      body.style.backgroundColor = colour;
    } else if (colour === 'white') {
      body.style.backgroundColor = colour;
    } else if (colour === 'blue') {
      body.style.backgroundColor = colour;
    }
  });
});
