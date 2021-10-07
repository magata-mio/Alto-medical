// Navbar sticky
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
// Navbar Show hide 
$(document).ready(function () {
    $("#hide").click(function () {
        $("#navbar").hide();
    });
    $("#show").click(function () {
        $("#navbar").show();
    });
});
// Get started Button
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener("scroll", function () {
    var main = document.querySelector("main");
    const started = document.getElementById('getstarted');
    main.classList.toggle("block", window.scrollY > 700 && !isInViewport(started));
});

// Show Password
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Slider
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
})