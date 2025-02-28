// cart.js
let cart = []; // Array to store cart items

// Get elements
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPrice = document.getElementById('cart-total-price');
const clearCartButton = document.getElementById('clear-cart');
const checkoutButton = document.getElementById('checkout');

// Event listener for adding products to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        // Add the product to the cart
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Update cart icon and modal content
function updateCart() {
    // Update cart count
    cartCount.textContent = cart.length;

    // Update cart items in modal
    cartItemsList.innerHTML = ''; // Clear existing cart items
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });

    // Update total price
    cartTotalPrice.textContent = total.toFixed(2);
}


// Show cart modal when cart icon is clicked
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Close cart modal when close button is clicked
closeCartModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Clear the cart
clearCartButton.addEventListener('click', () => {
    cart = []; // Empty the cart
    updateCart(); // Update cart display
});

// Checkout (Placeholder for actual checkout functionality)
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // You can add the checkout process here
});
