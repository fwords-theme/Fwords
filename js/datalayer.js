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
