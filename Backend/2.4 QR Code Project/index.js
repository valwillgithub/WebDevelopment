/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { error, log } from 'console';

inquirer
	.prompt([{ message: 'Type in your URL: ', name: 'URL' }])
	.then((answer) => {
		let url = answer.URL;
		console.log(url);
		let qr_png = qr.image(url, { type: 'png' });
		qr_png.pipe(fs.createWriteStream('./qrimages/bbc_qr_image.png'));
		fs.writeFile('./qrimages/bbc_url.txt', url, (error) => {
			if (error) throw error;
			console.log('the file has been saved');
		});
	})
	.catch((error) => {
		if (error.isTtyError) {
		} else {
		}
	});
