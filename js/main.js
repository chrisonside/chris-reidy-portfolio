
const sections = document.getElementsByTagName('section');
// console.log(sections);

const intersectionObserver = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		let entryClasses = entry.target.classList;
		if(entry.intersectionRatio > 0) {
			setTimeout(function(){
				entryClasses.add('is-in-view');
				intersectionObserver.unobserve(entry.target);
			}, 300);
		}
	});
});

[...sections].forEach(section => {
	intersectionObserver.observe(section);
});