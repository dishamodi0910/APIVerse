let searchBtn = document.getElementById("search-btn");
let recipeinp = document.getElementById("recipe-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let recipeName = recipeinp.value;
  let finalURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        const meal = data.meals[0];
        result.innerHTML = `
                    <img src="${meal.strMealThumb}" class="flag-img">
                    <h2>${meal.strMeal}</h2>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Meal : </h4>
                            <span>${meal.strMeal}</span>
                        </div>
                        <div class="data-wrapper">
                            <h4>YouTube : </h4>
                            <a href="${meal.strYoutube}" target="_blank">Watch on YouTube</a>                        
                        </div>
                        <div class="data-wrapper">
                            <h4>Article : </h4>
                            <a href="${meal.strSource}" target="_blank">Read Artcile</a>                        
                        </div>
                    <div class="wrapper">
                        <div class data-wrapper">
                            <h4>Category : </h4>
                            <span>${meal.strCategory}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Area : </h4>
                            <span>${meal.strArea}</span>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="data-wrapper">
                            <h4>Instructions : </h4>
                            <span>${meal.strInstructions}</span>
                        </div>
                    </div>
                    <button id="clear-btn">Close</button>
                `;
      } else {
        result.innerHTML = `<h3>No results found for "${recipeName}"</h3>`;
      }
    })

    .catch((error) => {
      console.error(error);
      result.innerHTML = `<h3>An error occurred while fetching data.</h3>`;
    });
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "clear-btn") {
    result.innerHTML = "";
  }
});
