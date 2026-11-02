```javascript
let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(name + " added to cart successfully!");
}

function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    let message = "YOUR SHOPPING CART\n\n";

    cart.forEach(function(item, index) {

        message += (index + 1) + ". " +
                   item.name + " - ₹" +
                   item.price + "\n";

        total += item.price;

    });

    message += "\nTotal Amount: ₹" + total;

    alert(message);
}

function searchProducts() {

    let input = document.getElementById("search")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let name = product.querySelector("h3")
            .innerText.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}
```
