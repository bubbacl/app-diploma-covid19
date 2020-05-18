function nextView() {
	var home = document.getElementById("homeView");
	var diploma = document.getElementById("diplomaView");
	home.style.display='none';
	diploma.style.display='block';
}

function generatePDF() {
	var personName = document.getElementById("inputName").value;

	var doc = new jsPDF({
		orientation: 'landscape'
	});

	doc.text(20, 20, personName);

	doc.save(personName + '.pdf');

	document.getElementById("resultado").innerHTML = personName;
}

