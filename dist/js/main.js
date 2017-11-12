'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sections = document.getElementsByTagName('section');
// console.log(sections);

var intersectionObserver = new IntersectionObserver(function (entries) {
	entries.forEach(function (entry) {
		var entryClasses = entry.target.classList;
		if (entry.intersectionRatio > 0) {
			console.log(entryClasses);
			// intersectionObserver.unobserve(entry.target);
		}
	});
});

[].concat(_toConsumableArray(sections)).forEach(function (section) {
	intersectionObserver.observe(section);
});
//# sourceMappingURL=main.js.map
