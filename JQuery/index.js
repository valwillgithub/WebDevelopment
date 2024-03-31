$(document).ready(function () {
	//$('h1').css('color', 'blue');
});

$('h1').addClass('big-title margin-50');

$('h1').text('Bye');

$('button').html('<em>Press</em> Me');

$('button').click(() => {
	$('h1').css('color', 'yellow');
});

$('a').attr('href', 'https://www.ghanaweb.com/');

// add an event listener
$('h1').on('click', () => {
	$('h1').css('color', 'blue');
});

$('body').on('keypress', (e) => {
	console.log(e.key);
	$('h1').text(e.key);
});

$('h1').before("<button class='before newbutton'>Before</button>");
$('h1').after("<button class='after newbutton'>After</button>");
$('h1').prepend("<button class='prepend newbutton'>Prepend</button>");
$('h1').append("<button class='append newbutton'>Append</button>");

//$('button').remove('.newbutton');

$('.after').on('click', () => {
	$('h1').hide();
	$('h1').show();
	$('h1').fadeToggle();
	$('h1').slideToggle();
});

$('.before').on('click', () => {
	$('h1').slideUp().slideDown().animate({ opacity: 0.5 });
});
