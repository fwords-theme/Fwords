document.getElementById('product-component-1724120776527')
    .addEventListener('click', sendProductInfo('8646557303077', 'i love you so much my daal-ling', '7.99'));

document.getElementById('product-component-1724121027841')
    .addEventListener('click', sendProductInfo('8646619726117', 'lets make this moola', '7.99'));

document.getElementById('product-component-1724121584057')
    .addEventListener('click', sendProductInfo('8646623592741', 'you are naan-stoppable! happy birthday!', '7.99'));

if (window.innerWidth < 768) {
    document.getElementById('product-component-1724121810286')
        .addEventListener('click', sendProductInfo('9561411092773', 'fwords bundle', '21.99'));    
}
else {
    document.getElementById('desk-product-component-1724121810286')
        .addEventListener('click', sendProductInfo('9561411092773', 'fwords bundle', '21.99'));
}

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