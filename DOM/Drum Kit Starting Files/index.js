for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
	document.querySelectorAll('button')[i].addEventListener('click', function () {
		let buttonInnerHTML = this.innerHTML;
		console.log('buttonInnerHTML => ' + buttonInnerHTML);
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

document.addEventListener('keydown', (event) => {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case 'w':
			let tom1 = new Audio('./sounds/tom-1.mp3');
			tom1.play();
			break;
		case 'a':
			let tom2 = new Audio('./sounds/tom-2.mp3');
			tom2.play();
			break;
		case 's':
			let tom3 = new Audio('./sounds/tom-3.mp3');
			tom3.play();
			break;
		case 'd':
			let tom4 = new Audio('./sounds/tom-4.mp3');
			tom4.play();
			break;
		case 'j':
			let crush = new Audio('./sounds/crash.mp3');
			crush.play();
			break;
		case 'k':
			let snare = new Audio('./sounds/snare.mp3');
			snare.play();
			break;
		case 'l':
			let kick = new Audio('./sounds/kick-bass.mp3');
			kick.play();
			break;
		default:
			console.log(key);
			break;
	}
}
//==============================================================

function buttonAnimation(currentKey) {
	document.querySelector('.' + currentKey).classList.add('pressed');
	setTimeout(() => {
		document.querySelector('.' + currentKey).classList.remove('pressed');
	}, 500);
}
function anotherAddEventListener(typeOfEvent, callback) {
	let eventthatHappened = {
		eventType: 'keydown',
		key: 'p',
		duration: 2,
	};
	if (typeOfEvent === eventthatHappened.eventType) {
		callback(eventthatHappened);
	}
}
debugger;
anotherAddEventListener('keydown', function (event) {
	console.log(event);
});
