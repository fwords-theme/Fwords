// Change main image from item selector
function changeMainImage(n) {
    const collectionImages = document.getElementsByClassName("item_img");
    var mainImage = document.getElementById("product");
    mainImage.src = collectionImages[n].src;
}

// Read more button
function readMore() {
    var dots = document.getElementById("dots");
    var moreDescription = document.getElementById("more_description");
    var btnText = document.getElementById("read_more");
  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "read more";
        moreDescription.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "read less";
        moreDescription.style.display = "block";
    }
}

// Gesture scroll through the container
let slideIndex = 1;
showSlides(slideIndex);

let touchStartX = 0;
let touchEndX = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (window.innerWidth < 768) {
        let i;
        let slides = document.getElementsByClassName("recommended_card_wrapper")
        let dots = document.getElementsByClassName("dots");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

// Swipe detection functions
function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (touchStartX && touchEndX) {
        let swipeDistance = touchStartX - touchEndX;
        if (Math.abs(swipeDistance) > 50) { // Detect a significant swipe distance
            if (swipeDistance > 0) {
                // Swipe left
                plusSlides(1);
            } else {
                // Swipe right
                plusSlides(-1);
            }
        }
    }
    swipeDistance = 0;
    touchStartX = 0;
    touchEndX = 0;
}

// Adding event listeners for touch events
const slideshowContainer = document.querySelector('.recommended_card_container');
slideshowContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
slideshowContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
slideshowContainer.addEventListener('touchend', handleTouchEnd, { passive: true });