function sendProductInfo(id, name, amount) {
    gtag("event", "add_to_cart", {
        currency: "USD",
        value: amount,
        items: [
            {
                item_id: id,
                item_name: name
            }
        ]
    });
}