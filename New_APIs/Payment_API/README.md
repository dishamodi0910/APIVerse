# PayPal Payment API

Welcome to the Payment API! This project demonstrates how to integrate PayPal API for online payments. Below are some useful links and information.

## Features
- Initiate PayPal payments securely.
- Handle payment success and cancellation scenarios.
- Simple frontend interface for payment initiation.

## Technologies Used
- Node.js
- Express.js
- PayPal REST SDK
- HTML
- CSS
- JavaScript

## Pre-Requisites
Before getting started, ensure you have the following:
- PayPal Sandbox Account (for testing purposes)
- Node.js installed on your machine
- Basic understanding of JavaScript and HTTP concepts

## Installation
Follow these steps to install and run the project locally:
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Configure PayPal credentials in the `.env` file:
4. Start the server using `npm start`.
5. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## PayPal API Integration
This project uses PayPal's REST API to facilitate payment transactions securely.

## Setup PayPal Sandbox Account
To obtain PayPal sandbox credentials:
1. Visit [PayPal Developer](https://developer.paypal.com/).
2. Log in with your PayPal account or create a new one.
3. Navigate to **My Apps & Credentials** and create a new sandbox app.
4. Obtain `CLIENT_ID` and `CLIENT_SECRET` from the sandbox app dashboard.
5. Use these credentials in your `.env` file as shown in the Installation section.

## Usage
- Click "Pay with PayPal" on the webpage to initiate a payment.
- Log in to your PayPal sandbox account when prompted.
- After payment approval or cancellation, you'll be redirected to appropriate pages.

## Troubleshooting
- Ensure your PayPal sandbox credentials are correctly configured.
- Check server logs (`console.log`) for any errors or issues during payment initiation.
- Review PayPal's API documentation for troubleshooting specific errors.

## Enjoy! 🌟

## Legal
By using PayPal's services, you agree to abide by [PayPal's Developer Agreement](https://www.paypal.com/us/webapps/mpp/ua/useragreement-full).