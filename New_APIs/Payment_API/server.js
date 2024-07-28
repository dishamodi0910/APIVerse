const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

paypal.configure({
  'mode': 'sandbox', // sandbox or live
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.error('PayPal create payment error:', error);
      return res.status(500).send('Failed to create PayPal payment');
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          return res.send(payment.links[i].href);
        }
      }
      console.error('No approval URL found in PayPal response');
      return res.status(500).send('Failed to find PayPal approval URL');
    }
  });
});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.error('PayPal execute payment error:', error);
      res.redirect('/cancel');
    } else {
      console.log(JSON.stringify(payment));
      res.redirect('/success.html'); // Redirect to a success page
    }
  });
});

app.get('/cancel', (req, res) => {
  res.send('Cancelled');
  });

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});