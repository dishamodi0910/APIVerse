let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

// Replace with your actual public and private keys
const publicKey = '';
const privateKey = '';

let ts = "1681802982683";
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

function displayWords(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    listContainer.innerHTML = "";
}

input.addEventListener("keyup", async () => {
    removeElements();
    if (input.value.length < 4) {
        return false;
    }

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${input.value}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        jsonData.data["results"].forEach((result) => {
            let name = result.name;
            let div = document.createElement("div");
            div.style.cursor = "pointer";
            div.classList.add("autocomplete-items");
            div.setAttribute("onclick", `displayWords('${name}')`);
            let word = `<b>${name.substr(0, input.value.length)}</b>${name.substr(input.value.length)}`;
            div.innerHTML = `<p class="item">${word}</p>`;
            listContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

button.addEventListener("click", async () => {
    if (input.value.trim().length < 1) {
        alert("Input cannot be blank");
        return;
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${input.value}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        jsonData.data["results"].forEach((element) => {
            showContainer.innerHTML += `
                <div class="card-container">
                    <div class="container-character-image">
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" />
                    </div>
                    <div class="character-name">${element.name}</div>
                    <div class="character-description">${element.description}</div>
                </div>`;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

window.onload = async () => {
    if (input.value.trim().length > 0) {
        await getResult();
    }
};

async function getResult() {
    if (input.value.trim().length < 1) {
        alert("Input cannot be blank");
        return;
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${input.value}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        jsonData.data["results"].forEach((element) => {
            showContainer.innerHTML += `
                <div class="card-container">
                    <div class="container-character-image">
                        <img src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}" />
                    </div>
                    <div class="character-name">${element.name}</div>
                    <div class="character-description">${element.description}</div>
                </div>`;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
