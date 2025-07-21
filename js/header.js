var sixteensixteens = [
	'1616-header/sixteen.svg',
	'1616-header/sixteensixteeeeeen.svg',
	'1616-header/sixteensixteeeeen.svg',
	'1616-header/sixteensixteeeen.svg',
	'1616-header/sixteensixteeen.svg',
	'1616-header/sixteensixteen.svg',
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
