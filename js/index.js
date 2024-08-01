// Add event listener for shop button click to scroll to products section
document.getElementById('shopbtn_hero').addEventListener('click', scrollToProducts);
document.getElementById('shopbtn_nav').addEventListener('click', scrollToProducts);

function scrollToProducts() {
    const nextDiv = document.getElementById('product_text');
    nextDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        let slides = document.getElementsByClassName("product_card_wrapper");
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
const slideshowContainer = document.querySelector('.product_card_carousel');
slideshowContainer.addEventListener('touchstart', handleTouchStart, false);
slideshowContainer.addEventListener('touchmove', handleTouchMove, false);
slideshowContainer.addEventListener('touchend', handleTouchEnd, false);
