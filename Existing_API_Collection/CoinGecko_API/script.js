let allCoins = [];
let displayedCoins = [];
const rowsPerPage = 10;
let currentPage = 1;
let currency = 'usd';
const currencySymbols = {
    usd: '$',
    inr: '₹'
};

async function fetchCoins() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`);
    allCoins = await response.json();
    displayedCoins = [...allCoins];
    displayCoins();
}

function displayCoins() {
    const tableBody = document.getElementById('cryptoTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedCoins = displayedCoins.slice(start, end);

    paginatedCoins.forEach(coin => {
        const row = tableBody.insertRow();
        const cellIcon = row.insertCell(0);
        const img = document.createElement('img');
        img.src = coin.image;
        img.alt = coin.name;
        img.width = 20;
        img.height = 20;
        cellIcon.appendChild(img);

        const coinNameSymbol = `${coin.name} ⁌ ${coin.symbol.toUpperCase()}`;
        row.insertCell(1).innerText = coinNameSymbol;
        row.insertCell(2).innerText = `${currencySymbols[currency]}${coin.current_price.toLocaleString()}`;
        row.insertCell(3).innerText = `${currencySymbols[currency]}${coin.market_cap.toLocaleString()}`;

        const change24h = coin.price_change_percentage_24h.toFixed(2);
        const cellChange = row.insertCell(4);
        cellChange.innerText = `${change24h}%`;
        cellChange.style.color = change24h >= 0 ? '#07df07' : '#df2707';
    });

    setupPagination();
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const pageCount = Math.ceil(displayedCoins.length / rowsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('span');
        pageLink.innerText = i;
        pageLink.className = 'page-link';
        if (i === currentPage) {
            pageLink.style.fontWeight = 'bold';
        }
        pageLink.addEventListener('click', () => {
            currentPage = i;
            displayCoins();
        });
        pagination.appendChild(pageLink);
    }
}

function searchCoins() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    if (input === '') {
        displayedCoins = [...allCoins];
    } else {
        displayedCoins = allCoins.filter(coin => coin.name.toUpperCase().includes(input));
    }
    currentPage = 1;
    displayCoins();
}

function changeCurrency() {
    currency = document.getElementById('currencySelector').value;
    fetchCoins();
}

// Fetch coins on page load
fetchCoins();