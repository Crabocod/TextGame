function apply() {
	var mage = document.getElementById('mage');
	var war = document.getElementById('war');

	if (mage.checked) {
		document.location.href = "mage.html";
	}
	if (war.checked) {
		document.location.href = "war.html";
	}
}
