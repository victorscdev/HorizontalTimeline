$(document).ready(function () {
	var items = document.querySelectorAll(".timeline-item");
	const containerSize = document.querySelector(".timeline-events")
		.clientWidth;

	var first = 0;
	var last = defineLastItem();

	if (items.length) {
		items[0].classList.add("active");

		if (items.length <= 5) {
			const itemMargin = calculateMargin(containerSize, items.length);

			const dots = document.querySelectorAll(".dots");

			dots.forEach((dot) => {
				dot.setAttribute(
					"style",
					`margin-right: ${itemMargin}px; margin-left: ${itemMargin}px;`
				);
			});

			const navigations = document.querySelectorAll(".navigations");

			navigations.forEach((navigator) => {
				navigator.classList.add("disabled");
			});

			document
				.querySelector(".line")
				.setAttribute("style", "width: 100%");
		}
	}

	$("#foward").click(() => {
		foward();
	});

	$("#backward").click(() => {
		backward();
	});

	function calculateMargin(containerSize, qtdElements) {
		return containerSize / (qtdElements + 1) / 2;
	}

	function foward() {
		if (last + 1 < items.length) {
			first++;
			last++;
		}
	}

	function backward() {
		if (first - 1 >= 0) {
			first--;
			last--;
		}
	}

	function defineLastItem() {
		if (items.length > 5) {
			return 4;
		}
		return items.length;
	}
});
