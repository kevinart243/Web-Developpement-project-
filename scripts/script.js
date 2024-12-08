var cart = []

add_to_cart("Black Shoe", 19.99);
add_to_cart("Red Shoe", 39.99);

function add_to_cart(name, price) {
    cart.push({"name": name, "price": price});
    update_cart_count();
}

function remove_from_cart(name) {
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        if (element.name === name) { cart.splice(index, 1); }
    }
    load_cart();
    update_cart_count();
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

function update_cart_count() {
    counter = document.getElementById("cart-count");
    if (counter != null) {
        counter.innerText = cart.length;
    }
}

// Open the modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Buttom on shoes for sizes
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // If the clicked button is already selected, unselect it (toggle)
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
        } else {
            // If the button is not selected, select it and unselect others
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        }
    });
});