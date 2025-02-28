document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutButton = document.getElementById('checkout');
    const closeCartModal = document.getElementById('close-cart-modal');
    const clearCartButton = document.getElementById('clear-cart');
    const cashAppInstructions = document.getElementById('cash-app-instructions');
    const paymentMethodSelect = document.getElementById('payment-method');

    // Update Cart display
    function updateCart() {
        // Clear the cart items list first
        cartItemsList.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(cartItem);
            total += parseFloat(item.price);
        });

        // Update total price and cart count
        cartTotalPrice.textContent = total.toFixed(2);
        cartCountElement.textContent = cart.length;
    }

    // Add to Cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            const productPrice = e.target.getAttribute('data-price');
            cart.push({ name: productName, price: productPrice });
            updateCart();
        });
    });

    // Open cart modal
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    // Close cart modal
    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Clear Cart
    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCart();
    });

    // Show Checkout form
    checkoutButton.addEventListener('click', () => {
        checkoutForm.style.display = 'block'; // Show checkout form
        document.getElementById('cart-items-list').style.display = 'none'; // Hide cart items
        document.getElementById('cart-total').style.display = 'none'; // Hide total
        document.getElementById('clear-cart').style.display = 'none'; // Hide clear cart
    });

    // Show Cash App instructions when Cash App is selected
    paymentMethodSelect.addEventListener('change', (e) => {
        if (e.target.value === 'cash-app') {
            cashAppInstructions.style.display = 'block'; // Show Cash App instructions
        } else {
            cashAppInstructions.style.display = 'none'; // Hide Cash App instructions
        }
    });

    // Submit Order (for now just console log the order details)
    document.getElementById('submit-order').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const name = document.getElementById('checkout-name').value;
        const email = document.getElementById('checkout-email').value;
        const address = document.getElementById('checkout-address').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const creditCard = document.getElementById('checkout-credit-card').value;

        console.log('Order Submitted:', {
            name,
            email,
            address,
            paymentMethod,
            creditCard, // Only if credit card is chosen
            cart
        });

        if (paymentMethod === 'cash-app') {
            // Show a message or confirmation that the user has to pay manually
            alert('Please send the payment to your Cash App account and then confirm here.');
        }

        // After submitting, reset cart and hide checkout
        cart = [];
        updateCart();
        alert("Order submitted successfully!");
        cartModal.style.display = 'none';
        checkoutForm.style.display = 'none';
        document.getElementById('cart-items-list').style.display = 'block';
        document.getElementById('cart-total').style.display = 'block';
        document.getElementById('clear-cart').style.display = 'block';
    });
});
