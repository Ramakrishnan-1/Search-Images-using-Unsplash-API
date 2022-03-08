var slideIndex = 1;
var userSearchTag = document.getElementById("queryText");

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


userSearchTag.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        fnGetImages(userSearchTag.value)
    }
});