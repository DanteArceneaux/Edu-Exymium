anime({
	targets: ".amazing path",
	translateX: 70,
	delay: anime.stagger(100),
	// increase delay by 100ms for each elements.
});

let scrollDown = document.querySelector(".scroll-down");

scrollDown.addEventListener("click", function () {
	window.scrollBy({ top: 1000, left: 0, behavior: "smooth" });
});
