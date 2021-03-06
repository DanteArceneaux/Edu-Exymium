anime({
	targets: " .azmazing ",
	translateX: 10,
	delay: anime.stagger(100),
	// increase delay by 100ms for each elements.
});

anime({
	targets: ".svg-pricing path",
	strokeDashoffset: [anime.setDashoffset, 5],
	easing: "easeInOutSine",
	duration: 5600,
	delay: function (el, i) {
		return i * 0;
	},
	direction: "forwards",
});

let scrollDown = document.querySelector(".scroll-down");
let scrollUp = document.getElementById("scroll-up");
let secondSection = document.getElementById("second-section");

scrollDown.addEventListener("click", function () {
	window.scrollBy({ top: 1200, left: 0, behavior: "smooth" });
	var sound = new Howl({
		src: ["./sounds/whoosh.wav"],
	});

	// Clear listener after first call.
	sound.once("load", function () {
		sound.play();
	});

	// Fires when the sound finishes playing.
	sound.on("end", function () {
		console.log("Finished!");
	});
});

scrollUp.addEventListener("click", function () {
	window.scrollBy({ top: -1000, left: 0, behavior: "smooth" });
	var sound = new Howl({
		src: ["./sounds/whoosh.wav"],
	});

	// Clear listener after first call.
	sound.repeat("repeat", function () {
		sound.play();
	});

	// Fires when the sound finishes playing.
	sound.repeat("end", function () {
		console.log("Finished!");
	});
});

function sendEmail() {
	window.location = "mailto:dantearcene@gmail.com";
}

var lastScroll = 0;
$(window).scroll(function (event) {
	//Sets the current scroll position
	var st = $(this).scrollTop();
	//Determines up-or-down scrolling
	if (st < 100) {
		//secondaryNav disappears when scrolled down
		$(".scroll-up").css("display", "none");
	} else {
		//secondaryNav disappears when scrolled up
		$(".scroll-up").css("display", "block");
	}
	//Updates scroll position
	lastScroll = st;
});

// Changing background color by section	********************************************************************

let header = document.querySelector("header");

window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	let links = document.querySelectorAll("a");
	let li = document.querySelector("li");
	let logo = document.querySelector(".logo");

	let body = document.querySelector("body");

	let windowPosition = window.scrollY > 1;

	header.classList.toggle("scrolling-active", windowPosition);

	windowPosition === true
		? (header.style.height = "4rem")
		: (header.style.height = "6rem");
	windowPosition === true
		? (header.style.transition = "1s")
		: (header.style.height = "6rem");
	windowPosition === true
		? (logo.style.transition = "0.5s")
		: (header.style.height = "6rem");
	windowPosition === true
		? (header.style.transition = "0.5s")
		: (header.style.height = "6rem");
	if (windowPosition === true) {
		body.style.backgroundColor = "#f96353";
	} else {
		body.style.backgroundColor = "#fff";
	}
	windowPosition === true
		? (body.style.transition = "2s")
		: (body.style.transition = "2s");
});

// *******************audio***********************
