document.addEventListener("DOMContentLoaded", () => {
  const getQuoteButton = document.getElementById("getQuoteButton");
  const randomQuoteButton = document.getElementById("randomQuoteButton");
  const slokElement = document.getElementById("slok");
  const translationElement = document.getElementById("translation");
  const chapterSelect = document.getElementById("chapterSelect");
  const verseSelect = document.getElementById("verseSelect");


  // Populating chapter and verse options
  for (let i = 1; i <= 18; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    chapterSelect.appendChild(option);
  }


  for (let i = 1; i <= 20; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    verseSelect.appendChild(option);
  }

  getQuoteButton.addEventListener("click", async () => {
    const chapter = chapterSelect.value;
    const verse = verseSelect.value;

    try {
      const response = await fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      slokElement.textContent = `Slok: ${data.slok}`;
      translationElement.textContent = `Translation: ${data.purohit.et}`;
    }
    catch (error) {
      slokElement.textContent = "An error occurred while fetching the quote.";
      translationElement.textContent = "";
      console.error("Fetch error:", error);
    }
  });


  // Random button
  randomQuoteButton.addEventListener("click", async () => {
    const chapter = Math.floor(Math.random() * 18) + 1;
    const verse = Math.floor(Math.random() * 20) + 1;


    try {
      const response = await fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`);
      if (!response.ok) {
        throw new Error("Error!");
      }
      const data = await response.json();
      slokElement.textContent = `Slok: ${data.slok}`;
      translationElement.textContent = `Translation: ${data.purohit.et}`;
    }
    catch (error) {
      slokElement.textContent = "error while fetching the quote.";
      translationElement.textContent = "";
      console.error("error:", error);
    }
  });
});
