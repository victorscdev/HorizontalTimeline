$(document).ready(function () {
	const items = document.querySelectorAll(".timeline-item");

	if (items.length) {
		init(items);
	}

	function init(items) {
		const line = document.querySelector(".line");

		if (items.length <= 5) {
			definedMarginDotsAtFiveItems();
			setLineMaximumWidth(line);
			return;
		}

		definedMarginDots(items, line);
	}

	function definedMarginDots(items, line) {
		const breakPoint = getBreakpoint();
		setBreakPoint(breakPoint);
	}

	function definedMarginDotsAtFiveItems() {
		const itemMargin = calculateMargin();

		const dots = document.querySelectorAll(".dots");

		dots.forEach((dot) => {
			dot.setAttribute(
				"style",
				`margin-right: ${itemMargin}px; margin-left: ${itemMargin}px;`
			);
		});
	}

	function setLineMaximumWidth(line) {
		line.setAttribute("style", "width: 100%");
	}

	function calculateMargin() {
		const containerSize = document.querySelector(".timeline-events")
			.clientWidth;

		const qtdElements = document.querySelectorAll(".timeline-item").length;

		return containerSize / (qtdElements + 1) / 2;
	}

	function setBreakPoint(breakpoint) {
		const dots = document.querySelectorAll(".dots");

		dots.forEach((dot) => {
			dot.setAttribute(
				"style",
				`margin-right: ${breakpoint.size}px; margin-left: ${breakpoint.size}px;`
			);
		});
	}

	function getBreakpoint() {
		const breakPoints = {
			xl: {
				size: 80,
				check: window.matchMedia("(min-width: 1200px)"),
			},
			lg: {
				size: 70,
				check: window.matchMedia("(max-width: 1199px)"),
			},
			md: {
				size: 60,
				check: window.matchMedia("(max-width: 991px)"),
			},

			sm: {
				size: 50,
				check: window.matchMedia("(max-width: 767px)"),
			},
		};

		let breakpoint = breakPoints.md;

		Object.keys(breakPoints).forEach((key) => {
			if (breakPoints[key].check.matches) {
				breakpoint = breakPoints[key];
			}
		});

		return breakpoint;
	}
});
