// Exhibition Tabs
function exhibitionToggle(evt, tabName) {
	var exhibitionSection = document.getElementsByClassName(
		'exhibition__container'
	);
	for (var i = 0; i < exhibitionSection.length; i++) {
		exhibitionSection[i].style.display = 'none';
	}

	// Get all elements with class="archiveTab" and remove the class "active"
	var exhibitionTab = document.getElementsByClassName('exhibitionTab');
	for (var i = 0; i < exhibitionTab.length; i++) {
		exhibitionTab[i].classList.remove('active');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
	var defaultExhibition = document.getElementById('defaultExhibition');
	if (defaultExhibition) {
		defaultExhibition.click();
	}
});

// Archive Tabs
function archiveToggle(evt, tabName) {
	var archiveSection = document.getElementsByClassName('archive__container');
	for (var i = 0; i < archiveSection.length; i++) {
		archiveSection[i].style.display = 'none';
	}

	// Get all elements with class="archiveTab" and remove the class "active"
	var archiveTab = document.getElementsByClassName('archiveTab');
	for (var i = 0; i < archiveTab.length; i++) {
		archiveTab[i].classList.remove('active');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
	var defaultArchive = document.getElementById('defaultArchive');
	if (defaultArchive) {
		defaultArchive.click();
	}
});

// Printed Tabs
function printedToggle(evt, tabName) {
	var printedSection = document.getElementsByClassName('printed__container');
	for (var i = 0; i < printedSection.length; i++) {
		printedSection[i].style.display = 'none';
	}

	// Get all elements with class="printedTab" and remove the class "active"
	var printedTab = document.getElementsByClassName('printedTab');
	for (var i = 0; i < printedTab.length; i++) {
		printedTab[i].classList.remove('active');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
	var defaultPrinted = document.getElementById('defaultPrinted');
	if (defaultPrinted) {
		defaultPrinted.click();
	}
});

// Artists Tabs
function artistsToggle(evt, tabName) {
	var artistsSection = document.getElementsByClassName('artists__container');
	for (var i = 0; i < artistsSection.length; i++) {
		artistsSection[i].style.display = 'none';
	}

	// Get all elements with class="printedTab" and remove the class "active"
	var artistsTab = document.getElementsByClassName('artistsTab');
	for (var i = 0; i < artistsTab.length; i++) {
		artistsTab[i].classList.remove('active');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
	var defaultArtists = document.getElementById('defaultArtists');
	if (defaultArtists) {
		defaultArtists.click();
	}
});
