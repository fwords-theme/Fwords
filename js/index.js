// Gesture scroll through the containers
onload = function() {
    let slideIndex = 1;
    let touchStartX = 0;
    let touchEndX = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
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
            loadBuyButtonScript(slideIndex);
        }
        else {
            let i;
            let slides = document.getElementsByClassName("product_card_wrapper");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "block";
                loadBuyButtonScript(i);
            }
            loadBuyButtonScript(i++);
        }
    }
        
    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }
        
    function handleTouchMove(event) {
        touchEndX = event.touches[0].clientX;
    }
        
    function handleTouchEnd() {
        if (touchStartX && touchEndX) {
            let swipeDistance = touchStartX - touchEndX;
            if (Math.abs(swipeDistance) > 100) {
                if (swipeDistance > 0) {
                    plusSlides(1);
                } else {
                    plusSlides(-1);
                }
            }
        }
        swipeDistance = 0;
        touchStartX = 0;
        touchEndX = 0;
    }

    const slideshowContainer = document.querySelector('.product_card_carousel');
    slideshowContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    slideshowContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    slideshowContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    function loadBuyButtonScript(slideIndex) {
        const buyButtons = document.getElementsByClassName('buy_button');
        if (slideIndex <= buyButtons.length) {
            const buyButton = buyButtons[slideIndex - 1];
            if (buyButton && !buyButton.hasAttribute('data-initialized')) {
                buyButton.setAttribute('data-initialized', 'true');
                const scriptSrc = `js/item${slideIndex}_shopify.js`;
                const newScript = document.createElement('script');
                newScript.src = scriptSrc;
                document.body.appendChild(newScript);
            }
        }
    }

    //Gesture scroll for the review section
    let reviewSlideIndex = 1;
    let reviewTouchStartX = 0;
    let reviewTouchEndX = 0;
    showReviewSlides(reviewSlideIndex);

    function plusReviewSlides(n) {
        showReviewSlides(reviewSlideIndex += n);
    }
        
    function showReviewSlides(n) {
        if (window.innerWidth < 768) {
            let j;
            let reviewSlides = document.getElementsByClassName("review_card_wrapper");
            let reviewDots = document.getElementsByClassName("review_dots");
            if (n > reviewSlides.length) { reviewSlideIndex = 1 }
            if (n < 1) { reviewSlideIndex = reviewSlides.length }
            for (j = 0; j < reviewSlides.length; j++) {
                reviewSlides[j].style.display = "none";
            }
            for (j = 0; j < reviewDots.length; j++) {
                reviewDots[j].className = reviewDots[j].className.replace(" review_active", "");
            }
            reviewSlides[reviewSlideIndex - 1].style.display = "block";
            reviewDots[reviewSlideIndex - 1].className += " review_active";
        }
        else {
            let j;
            let reviewSlides = document.getElementsByClassName("review_card_wrapper");
            for (j = 0; j < reviewSlides.length; j++) {
                reviewSlides[j].style.display = "block";
            }
        }
    }
        
    function handleReviewTouchStart(event) {
        reviewTouchStartX = event.touches[0].clientX;
    }
        
    function handleReviewTouchMove(event) {
        reviewTouchEndX = event.touches[0].clientX;
    }
        
    function handleReviewTouchEnd() {
        if (reviewTouchStartX && reviewTouchEndX) {
            let reviewSwipeDistance = reviewTouchStartX - reviewTouchEndX;
            if (Math.abs(reviewSwipeDistance) > 100) {
                if (reviewSwipeDistance > 0) {
                    plusReviewSlides(1);
                } else {
                    plusReviewSlides(-1);
                }
            }
        }
        reviewSwipeDistance = 0;
        reviewTouchStartX = 0;
        reviewTouchEndX = 0;
    }

    const reviewContainer = document.querySelector('.review_card_carousel');
    reviewContainer.addEventListener('touchstart', handleReviewTouchStart, { passive: true });
    reviewContainer.addEventListener('touchmove', handleReviewTouchMove, { passive: true });
    reviewContainer.addEventListener('touchend', handleReviewTouchEnd, { passive: true });
}

// Add event listener for shop button click to scroll to products section
document.getElementById('shopbtn_hero').addEventListener('click', scrollToProducts);
document.getElementById('shopbtn_nav').addEventListener('click', scrollToProducts);

function scrollToProducts() {
    const nextDiv = document.getElementById('product_text');
    nextDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Store product ID and send it to product page
function sendId(n) {
    const productID = parseInt(n);
    localStorage.setItem("product_id", productID);
}
