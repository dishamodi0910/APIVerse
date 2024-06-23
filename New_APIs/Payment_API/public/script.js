window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
      document.getElementById('message').innerText = 'Payment successful!';
    }
    if (urlParams.has('cancel')) {
      document.getElementById('message').innerText = 'Payment cancelled.';
    }
  });
  
  document.getElementById('paypal-button').addEventListener('click', function () {
    fetch('/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(response => {
      if (response.ok) {
        return response.text(); // Expecting a redirect URL
      } else {
        throw new Error('Failed to initialize PayPal payment');
      }
    })
    .then(redirectUrl => {
      console.log('Redirect URL:', redirectUrl);
      window.location.href = redirectUrl; // Redirect to PayPal approval URL
    })
    .catch(err => {
      console.error('Fetch error:', err);
    });
  });
  
  