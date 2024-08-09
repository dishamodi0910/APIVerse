// Initialize Stripe
const stripe = Stripe('YOUR_PUBLIC_STRIPE_KEY');

// Create an instance of Elements
const elements = stripe.elements();

// Create an instance of the card Element
const card = elements.create('card');

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle real-time validation errors from the card Element
card.on('change', function(event) {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Handle form submission
const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {token, error} = await stripe.createToken(card);

    if (error) {
        // Inform the user if there was an error
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        // Send the token to your server
        const response = await fetch('/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token.id })
        });

        const data = await response.json();
        if (data.success) {
            alert('Payment Successful!');
        } else {
            alert('Payment Failed!');
        }
    }
});
