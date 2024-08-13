onload = function() {
    var mainImage = document.getElementById('product');
    if (this.window.innerWidth < 768) {
        mainImage.style.width = "90vw";
    }
    else if (this.window.innerWidth < 1200) {
        mainImage.style.width = "28rem";
    }
    else {
        mainImage.style.width = "40rem";
    }

    const itemArr = document.getElementsByClassName('item');
    for (i = 0; i < itemArr.length; i++) {
        itemArr[i].style.margin = "0.5rem";
    }
}

function changeMainImageBundle(n) {
    if (window.innerWidth < 768) {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "58vw"
        }
        else if (n == 0) {
            mainImage.style.width = "90vw"
        }
        else {
            mainImage.style.width = "42vw"
        }
    }
    else if (window.innerWidth < 1200) {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "20rem"
        }
        else if (n == 0) {
            mainImage.style.width = "28rem"
        }
        else {
            mainImage.style.width = "15rem"
        }
    }
    else {
        const collectionImages = document.getElementsByClassName("item_img");
        var mainImage = document.getElementById("product");
        mainImage.src = collectionImages[n].src;
        if (n == 4) {
            mainImage.style.width = "25rem"
        }
        else if (n == 0) {
            mainImage.style.width = "40rem"
        }
        else {
            mainImage.style.width = "20rem"
        }
    }
}