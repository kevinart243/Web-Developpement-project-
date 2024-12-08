var cart = []

add_to_cart("Black Shoe", 19.99);
add_to_cart("Red Shoe", 39.99);

function add_to_cart(name, price) {
    cart.push({"name": name, "price": price});
}

function remove_from_cart(name) {
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        if (element.name === name) { cart.splice(index, 1); }
    }
    load_cart();
}

function load_cart() {
    html = "";
    total = 0;
    cart.forEach(item => {
        html += '<p>' + item.name +'<span onclick="remove_from_cart(\'' + item.name + '\')" style="color:gray"> [X]</span><span style="float:right">$' + item.price + '</span></p>\n';
        total += item.price
    });
    document.getElementById("cart-items").innerHTML = html;
    document.getElementById("total").innerText = '$' + total.toFixed(2).toString();
}

function checkout() {
    if (cart.length === 0) { alert("Your cart is empty!") }
    else { window.location.href = "index.html" }
}

counter = document.getElementById("cart-count");
if (counter != null) {
    counter.innerText = cart.length;
}