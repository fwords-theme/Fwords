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

document.getElementById('product-component-1724120776527').addEventListener('click', function() {
    console.log("gtag event fired");
    gtag("event", "add_to_cart", {
        currency: "USD",
        value: 7.99,
        items: [
            {
                item_id: "8646557303077",
                item_name: "i love you so much my daal-ling",
                price: 7.99
            }
        ]
    })
});
