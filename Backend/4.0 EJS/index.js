import express from 'express';

import ejs from 'ejs';
const app = express();
const port = 3000;

function getDay() {
	const today = new Date();
	// let day = today.getDay();
	let day = 6;
	if (day > 0 && day < 6) return 'weekday';
	else return 'weekend';
}
let type;
let adv;

if (getDay() === 'weekday') {
	type = 'a weekday';
	adv = "it's time to work hard!";
} else {
	type = 'the weekend';
	adv = "it's time to have fun!";
}

app.get('/', (req, res) => {
	res.render('index.ejs', {
		dayType: type,
		advice: adv,
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
