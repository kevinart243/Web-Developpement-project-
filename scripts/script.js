var cart = []

function add_to_cart(name, price) {
    cart.append({"name": name, "price": price})
}

function load_cart() {
    
}

counter = document.getElementById("cart-count")
if (counter != null) {
    counter.innerText = cart.length
}