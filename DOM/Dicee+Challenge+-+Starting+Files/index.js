let randonNumber1 = Math.floor(Math.random() * 6) + 1;
let randonNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = './images/dice' + randonNumber1 + '.png';
let randomImageSource2 = './images/dice' + randonNumber2 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1);
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);
let message = '';
if (randonNumber1 > randonNumber2) {
	message = 'Player 1 Won !!!';
} else if (randonNumber2 > randonNumber1) {
	message = 'Player 2 Won !!!';
} else {
	message = "It's a Draw !!!";
}

let winner = document.createElement('h1');
winner.style.color = 'blue';
winner.textContent = message;
document.querySelector('h1').appendChild(winner);
