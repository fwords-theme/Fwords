function sendProductInfo(id, name, amount) {
    console.log("data layer being sent");
    gtag('event', 'add_to_cart', {
        currency: 'USD',
        value: amount,
        items: [
            {
                item_id: id,
                item_name: name
            }
        ]
    });
}