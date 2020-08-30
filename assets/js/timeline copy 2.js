$(document).ready(function () {
	var items = document.querySelectorAll(".timeline-item");
	const containerSize = document.querySelector(".timeline-events")
		.clientWidth;

	if (items.length) {
		items[0].classList.add("active");

		if (items.length <= 5) {
			document
				.querySelector(".line")
				.setAttribute("style", "width: 100%");
			const navigations = document.querySelectorAll(".navigations");

			navigations.forEach((navigator) => {
				navigator.classList.add("disabled");
			});
		}

		// items.setAttribute("style", "max-width: 100px");

		const itemMargin = calculateMargin(containerSize, items.length);

		const dots = document.querySelectorAll(".dots");

		dots.forEach((dot) => {
			dot.setAttribute(
				"style",
				`margin-right: ${itemMargin}px; margin-left: ${itemMargin}px;`
			);
		});
		console.log("dots");
	}

	$("#foward").click(() => {});

	$("#backward").click(() => {});

	function calculateMargin(containerSize, qtdElements) {
		return containerSize / (qtdElements + 1) / 2;
	}
});
