let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).on('keydown', () => {
	if (!started) {
		$('h1').text('Level ' + level);
		nextSequence();
		started = true;
	}
});

$('.btn').on('click', function () {
	console.log(this.id);
	let userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);
	console.log('userClickedPattern', userClickedPattern);

	animatePress(userChosenColour);
	playSound(userChosenColour);
	console.log(
		'userClickedPattern.length - 1 ==> ',
		userClickedPattern.length - 1
	);

	checkAnswer(userClickedPattern.length - 1);
	//$(this).fadeOut(100).fadeIn(100);
});

function nextSequence() {
	userClickedPattern = [];
	level++;
	$('h1').text('Level ' + level);
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	console.log('gamePattern', gamePattern);
	animatePress(randomChosenColour);
	playSound(randomChosenColour);
}

function animatePress(currentColour) {
	$('#' + currentColour).addClass('pressed');
	setTimeout(() => {
		$('#' + currentColour).removeClass('pressed');
	}, 100);
	//});
}

function playSound(name) {
	let sound = new Audio(`./sounds/${name}.mp3`);
	sound.play();
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}

function checkAnswer(currentLevel) {
	let gcl = gamePattern[currentLevel];
	let ucl = userClickedPattern[currentLevel];
	let uLength = userClickedPattern.length;
	let gLength = gamePattern.length;

	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(() => {
				nextSequence();
			}, 500);
		}
	} else {
		playSound('wrong');
		$('body').addClass('game-over');
		$('h1').text('Game Over, Press Any Kvey To Restart');

		setTimeout(() => {
			$('body').removeClass('game-over');
		}, 200);
		startOver();
	}
}

function rand() {
	return Math.floor(Math.random() * 4) + 1;
}

function rand2() {
	return Math.floor(Math.random() * 4);
}
