async function searchDishes() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (searchInput === "") {
    return;
  }

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`
    );
    const data = await response.json();

    if (!data.meals) {
      console.log(data);
      if (data.meals === null) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      } else {
        resultsDiv.innerHTML = "<p>Error: Unexpected response format.</p>";
      }
      return;
    }

    for (const meal of data.meals) {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");

      const mealImage = document.createElement("img");
      mealImage.src = meal.strMealThumb;
      mealImage.alt = meal.strMeal;
      resultItem.appendChild(mealImage);

      const mealName = document.createElement("p");
      mealName.textContent = meal.strMeal;
      resultItem.appendChild(mealName);

      

      resultsDiv.appendChild(resultItem);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    resultsDiv.innerHTML = "<p>An error occurred while fetching data.</p>";
  }
}

// Add event listener to search button
document.getElementById("searchButton").addEventListener("click", searchDishes);
document.getElementById('searchInput').addEventListener('keypress', (event)=> {
  if (event.keyCode === 13) {
    searchDishes();
  }
});

const categories = [
  "Beef",
  "Chicken",
  "Dessert",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];
let examples = document.querySelector(".options");
examples.innerHTML = ``;
categories.forEach((category) => {
  examples.innerHTML += `<p>${category}</p>`;
});
