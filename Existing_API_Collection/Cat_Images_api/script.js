const url = 'https://api.thecatapi.com/v1/images/search';
let img = null;
let loader = null;

window.onload = () => {
    img = document.querySelector('img');
    loader = document.querySelector('.loader');
    document.querySelector('.button1')
        .addEventListener('click', clickHandlerES6);
    document.querySelector('.button2')
        .addEventListener('click', clickHandlerES7);
    img.addEventListener('load', hideLoader);
};

function showLoader() {
    img.classList.add('image--faded');
    loader.classList.add('loader--visible');
}

function hideLoader() {
    img.classList.remove('image--faded');
    loader.classList.remove('loader--visible');
}

function timeout(timeoutMs) {
    return new Promise(resolve => setTimeout(resolve, timeoutMs));
}

/* ------- ES6 ------- */

function clickHandlerES6() {
    showLoader();

    fetchDataES6()
        .then(data => {
            img.src = data[0].url;
        });
}

function fetchDataES6(timeoutMs = 1000) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => timeout(timeoutMs)
            .then(res => fetchDataES6())
        );
}

/* ------- ES7 ------- */

async function clickHandlerES7() {
    showLoader();

    const data = await fetchDataES7();
    img.src = data[0].url;
}

async function fetchDataES7(timeoutMs = 1000) {
    try {
        const response = await fetch(url);
        return response.json();

    } catch (e) {
        await timeout(timeoutMs);
        return fetchDataES7(timeoutMs);
    }
}