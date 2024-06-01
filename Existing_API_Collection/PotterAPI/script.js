
const characters = document.getElementById("characters");

function addCharacter(char) {

    const div = document.createElement("div");
    div.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", char.image)

    const h2 = document.createElement("h2")
    h2.innerText = char.fullName;

    const h3 = document.createElement("h3")
    h3.innerText = char.hogwartsHouse;

    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(h3)
    characters.appendChild(div);
}


async function fetchCharacters() {

    try {

        const response = await (await fetch("https://potterapi-fedeperin.vercel.app/es/characters")).json()

        for (let item of response) {
            addCharacter(item);
        }

    } catch (error) {
        console.log(error.message);
    }


}


document.addEventListener("DOMContentLoaded", fetchCharacters)








