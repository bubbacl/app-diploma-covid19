const nextViewBtn = document.querySelector('#homeView button');
const generatePDFBtn = document.querySelector('#diplomaView button');
const result = document.querySelector("#resultado");
var diploma = document.querySelector("#diplomaView").style;

const nextView = (personName = document.querySelector("#inputName").value.trim()) => {
	if (!personName) return;
	const home = document.querySelector("#homeView").style;
	result.innerHTML = personName;
	home.display = 'none';
	diploma.display = 'block';
}

const generatePDF = () => {
	const options = { orientation: 'landscape' };
	const doc = new jsPDF(options);
	const { innerHTML } = result;
	doc.fromHTML(diploma, 20, 20);
	doc.save(`diploma-${ innerHTML }.pdf`);
}

nextViewBtn.addEventListener('click', () => nextView());
generatePDFBtn.addEventListener('click', () => generatePDF());