function apply() {
	var mage = document.getElementById('mage');
	var war = document.getElementById('war');

	if (mage.checked) {
		window.open('mage.html?&'+"mage");
		window.close();
	}
	if (war.checked) {
		window.open('war.html?&'+"war");
		window.close();
	}
}
