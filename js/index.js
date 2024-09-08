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

// Google Analytics event tracking for adding product to cart
function sendProductInfo(productId, productName, productPrice) {
    gtag("event", "add_to_cart", {
        currency: "USD",
        value: productPrice,
        items: [
            {
                item_id: productId,
                item_name: productName,
                price: productPrice,
            }
        ]
    });
}
