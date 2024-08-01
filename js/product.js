// Change main image from item selector
function changeMainImage(n) {
    const collectionImages = document.getElementsByClassName("item_img");
    var mainImage = document.getElementById("product");
    mainImage.src = collectionImages[n].src;
}

// Product item counter
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
  
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
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