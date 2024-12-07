var cart = []

function add_to_cart(name, price) {
    cart.append({"name": name, "price": price})
}

counter = document.getElementById("cart-count")
if (counter != null) {
    counter.innerText = cart.length
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
