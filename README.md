# commerical_website
# Ex02 Commercial Website
## Date:

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
## html.css

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voltix Electronics Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h2 class="logo">VOLTIX.</h2>

        <nav>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
        </nav>

        <button class="cart-btn" onclick="showCart()">
            🛒 Cart (<span id="cartCount">0</span>)
        </button>
    </header>

    <section class="hero" id="home">
        <div>
            <h1>Upgrade Your Everyday Tech.</h1>
            <p>Discover the latest electronics and gadgets at affordable prices.</p>
            <a href="#products" class="shop-btn">Shop Now →</a>
        </div>
    </section>

    <section class="products" id="products">

        <h2>Our Products</h2>
        <p>Explore our latest electronics collection.</p>

        <input
            type="text"
            id="search"
            placeholder="Search products..."
            onkeyup="searchProducts()"
        >

        <div class="product-container" id="productList">

            <div class="product">
                <div class="product-image">🎧</div>
                <h3>Wireless Headphones</h3>
                <p>₹2,499</p>
                <button onclick="addToCart('Wireless Headphones',2499)">
                    Add to Cart
                </button>
            </div>

            <div class="product">
                <div class="product-image">📱</div>
                <h3>Smartphone</h3>
                <p>₹18,999</p>
                <button onclick="addToCart('Smartphone',18999)">
                    Add to Cart
                </button>
            </div>

            <div class="product">
                <div class="product-image">💻</div>
                <h3>Laptop</h3>
                <p>₹54,999</p>
                <button onclick="addToCart('Laptop',54999)">
                    Add to Cart
                </button>
            </div>

            <div class="product">
                <div class="product-image">⌚</div>
                <h3>Smart Watch</h3>
                <p>₹2,999</p>
                <button onclick="addToCart('Smart Watch',2999)">
                    Add to Cart
                </button>
            </div>

        </div>
    </section>

    <section class="offers" id="offers">
        <h2>Special Offers!</h2>
        <p>Get exciting deals on selected electronics.</p>
        <h1>UP TO 30% OFF</h1>
        <a href="#products">Explore Deals</a>
    </section>

    <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: voltix@example.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Chennai, Tamil Nadu</p>
    </section>

    <footer>
        <h2>VOLTIX.</h2>
        <p>© 2026 Voltix Electronics. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>
```
## style.css
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f5f7fb;
    color: #17212b;
}

/* Header */

header {
    background: #ffffff;
    padding: 20px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: #315efb;
    font-size: 28px;
}

nav a {
    text-decoration: none;
    color: #17212b;
    margin: 0 15px;
    font-weight: bold;
}

nav a:hover {
    color: #315efb;
}

.cart-btn {
    background: #315efb;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

/* Hero Section */

.hero {
    min-height: 400px;
    background: linear-gradient(120deg, #172a55, #315efb);
    color: white;
    display: flex;
    align-items: center;
    padding: 60px 10%;
}

.hero h1 {
    font-size: 48px;
    max-width: 550px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
}

.shop-btn {
    background: white;
    color: #315efb;
    padding: 15px 25px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
}

/* Products */

.products {
    padding: 60px 8%;
    text-align: center;
}

.products h2 {
    font-size: 32px;
    margin-bottom: 15px;
}

#search {
    width: 300px;
    max-width: 100%;
    padding: 12px;
    margin: 30px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
}

.product {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px #00000010;
    transition: 0.3s;
}

.product:hover {
    transform: translateY(-8px);
}

.product-image {
    background: #edf1ff;
    height: 150px;
    display: grid;
    place-items: center;
    font-size: 65px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.product h3 {
    margin-bottom: 15px;
}

.product p {
    color: #315efb;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.product button {
    background: #315efb;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
}

.product button:hover {
    background: #172a55;
}

/* Offers */

.offers {
    background: #172a55;
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.offers h2 {
    font-size: 35px;
}

.offers h1 {
    color: #ffbd59;
    margin: 20px;
    font-size: 45px;
}

.offers a {
    display: inline-block;
    background: white;
    color: #315efb;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 6px;
    margin-top: 15px;
}

/* Contact */

.contact {
    padding: 50px;
    text-align: center;
    line-height: 2;
}

/* Footer */

footer {
    background: #101a2b;
    color: white;
    text-align: center;
    padding: 30px;
}

footer h2 {
    color: #6f8cff;
    margin-bottom: 10px;
}

/* Responsive */

@media (max-width: 800px) {

    header {
        flex-wrap: wrap;
        gap: 15px;
    }

    nav {
        width: 100%;
        text-align: center;
    }

    nav a {
        margin: 5px;
    }

    .product-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero h1 {
        font-size: 35px;
    }
}

@media (max-width: 480px) {

    .product-container {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 30px;
    }
}
```

## script.js
```
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


## OUTPUT
![alt text](<Screenshot 2026-11-02 233223.png>)
![alt text](<Screenshot 2026-11-02 233527.png>)
![alt text](<Screenshot 2026-11-02 232951.png>)

## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
