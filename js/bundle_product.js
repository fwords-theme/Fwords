onload = function() {
    var mainImage = document.getElementById('product');
    if (this.window.innerWidth < 768) {
        mainImage.style.width = "80%";
    }
    else if (this.window.innerWidth < 1200) {
        mainImage.style.width = "25rem";
    }
    else {
        mainImage.style.width = "35rem";
    }

    const itemArr = document.getElementsByClassName('item');
    for (i = 0; i < itemArr.length; i++) {
        itemArr[i].style.margin = "0.5rem";
    }

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
            let slides = document.getElementsByClassName("recommended_card_wrapper");
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
            let slides = document.getElementsByClassName("recommended_card_wrapper");
            for (i = 0; i < slides.length; i += 1) {
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

    const slideshowContainer = document.querySelector('.recommended_card_container');
    slideshowContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    slideshowContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    slideshowContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    function loadBuyButtonScript(slideIndex) {
        const buyButtons = document.getElementsByClassName('recc_buy_button');
        if (slideIndex <= buyButtons.length) {
            const buyButton = buyButtons[slideIndex - 1];
            if (buyButton && !buyButton.hasAttribute('data-initialized')) {
                buyButton.setAttribute('data-initialized', 'true');
                const scriptSrc = `../js/item${slideIndex}_shopify.js`;
                const newScript = document.createElement('script');
                newScript.src = scriptSrc;
                document.body.appendChild(newScript);
            }
        }
    }
}

window.addEventListener('resize', onResize);
function onResize() {
    var mainImage = document.getElementById('product');
    if (this.window.innerWidth < 768) {
        mainImage.style.width = "80%";
    }
    else if (this.window.innerWidth < 1200) {
        mainImage.style.width = "25rem";
    }
    else {
        mainImage.style.width = "35rem";
        var productContainer = document.getElementsByClassName('product_container');
        productContainer[0].style.marginRight = '4rem';
    }
}

function changeMainImageBundle(n) {
    if (window.innerWidth < 768) {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "52%";
        }
        else if (n == 0) {
            mainImage.style.width = "80%";
        }
        else {
            mainImage.style.width = "37%";
        }
    }
    else if (window.innerWidth < 1200) {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "20rem";
        }
        else if (n == 0) {
            mainImage.style.width = "25rem";
        }
        else {
            mainImage.style.width = "15rem";
        }
    }
    else {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "25rem";
        }
        else if (n == 0) {
            mainImage.style.width = "35rem";
        }
        else {
            mainImage.style.width = "20rem";
        }
    }
}

// Add event listener for shop button click to scroll to products section
document.getElementById('shopbtn_nav').addEventListener('click', function () {
    const nextDiv = document.getElementById('recommended_text');
    nextDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

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

function sendId(n) {
    const productID = parseInt(n);
    localStorage.setItem("product_id", productID);
}