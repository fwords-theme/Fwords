function sendProductInfo(productId, productName, productPrice) {
    gtag("event", "add_to_cart", {
        currency: 'USD',
        value: productPrice,
        items: [
            {
                id: productId,
                name: productName,
                price: productPrice,
            }
        ]
    });
}
