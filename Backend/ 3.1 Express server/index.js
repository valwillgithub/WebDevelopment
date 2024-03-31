import express from 'express';
const app = express();
const port = 3005;

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});

app.get('/', (req, res) => {
	res.send('<h1> Hello Val</h1>');
	console.log(req.rawHeaders);
});

app.get('/about', (req, res) => {
	res.send('<h1> About Me</h1><p>My name is V Diddy</p>');
});

app.get('/contact', (req, res) => {
	res.send('<h1> Contact Me</h1><p>Phone +4412345678</p>');
});
