
const sections = document.getElementsByTagName('section');
// console.log(sections);

const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		let entryClasses = entry.target.classList;
		if(entry.intersectionRatio > 0) {
			console.log(entryClasses);
			// intersectionObserver.unobserve(entry.target);
		}
	});
});

[...sections].forEach(section => {
	intersectionObserver.observe(section);
});