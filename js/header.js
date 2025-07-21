var sixteensixteens = [
	'images/1616-logo/sixteen.svg',
	'images/1616-logo/sixteensixteeeeeen.svg',
	'images/1616-logo/sixteensixteeeeen.svg',
	'images/1616-logo/sixteensixteeeen.svg',
	'images/1616-logo/sixteensixteeen.svg',
	'images/1616-logo/sixteensixteen.svg',
];

// Dropdown Page Navigation (jQuery):
$(document).ready(function () {
	var randomNumber = Math.floor(Math.random() * sixteensixteens.length);
	$('#sixteen').attr('src', sixteensixteens[randomNumber]);

	$('.page-toggle').on('change', function () {
		var selectedClass = $(this).find(':selected').attr('data-show');

		// hide-show page sections accordingly
		$('.page-section').hide();
		$(selectedClass).fadeIn();
	});

	$('.navigate-to-tab').on('click', function () {
		var targetArchive = $(this).data('value');
		$('.page-toggle').val(targetArchive).change();
	});

	$('.page-section').hide();
	$('.page-toggle option:selected').each(function () {
		var selectedClass = $(this).attr('data-show');
		$(selectedClass).show();
	});
});
