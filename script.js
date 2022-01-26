anime({
	targets: ".amazing path",
	translateX: 70,
	delay: anime.stagger(100),
	// increase delay by 100ms for each elements.
});

let scrollDown = document.querySelector(".scroll-down");
let scrollUp = document.getElementById("scroll-up");
let secondSection = document.getElementById("second-section");

scrollDown.addEventListener("click", function () {
	window.scrollBy({ top: 1000, left: 0, behavior: "smooth" });
});

scrollUp.addEventListener("click", function () {
	window.scrollBy({ top: -1000, left: 0, behavior: "smooth" });
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
