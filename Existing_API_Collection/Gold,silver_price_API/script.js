var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-3loq1slwp56reh-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        document.getElementById("goldPrice").innerHTML = "<strong>Gold Price:</strong> $" + result.price.toFixed(2);
        document.getElementById("goldDetails").innerHTML = `
  <p><strong>Gold Details:</strong></p>
  <ul>
    <li>24k: $${result.price_gram_24k.toFixed(2)}</li>
    <li>22k: $${result.price_gram_22k.toFixed(2)}</li>
    <li>21k: $${result.price_gram_21k.toFixed(2)}</li>
    <li>20k: $${result.price_gram_20k.toFixed(2)}</li>
    <li>18k: $${result.price_gram_18k.toFixed(2)}</li>
    <li>16k: $${result.price_gram_16k.toFixed(2)}</li>
    <li>14k: $${result.price_gram_14k.toFixed(2)}</li>
    <li>10k: $${result.price_gram_10k.toFixed(2)}</li>
  </ul>`;
    })
    .catch(error => console.log('error', error));

fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
    .then(response => response.json())
    .then(result => {
        document.getElementById("silverPrice").innerHTML = "<strong>Silver Price:</strong> $" + result.price.toFixed(2);
    })
    .catch(error => console.log('error', error));