const API = {
  searchByName: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  mealDetails: " https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
  randomMeal: "https://www.themealdb.com/api/json/v1/1/random.php",
  categories: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
  areas: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  ingredients: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  byCategory: "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
  byArea: "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
  Image: "https://www.themealdb.com/images/ingredients",
  filterByIngredient: "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
};

const latestMeals = [
  {
    idMeal: "53038",
    strMeal: "Mustard champ",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Side",
  },
  {
    idMeal: "53037",
    strMeal: "Coddled pork with cider",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Pork",
  },
  {
    idMeal: "53036",
    strMeal: " Boxty Breakfast",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Side",
  },
  {
    idMeal: "53035",
    strMeal: "Ham hock colcannon",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg",
    strTags: "",
    strArea: "Irish",
    strCategory: "Pork",
  },
  {
    idMeal: "53034",
    strMeal: "Japanese Katsudon",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Side",
  },
  {
    idMeal: "53033",
    strMeal: "Japanese gohan rice",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Side",
  },
  {
    idMeal: "53032",
    strMeal: "Tonkatsu pork",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
    strTags: "",
    strArea: "Japanese",
    strCategory: "Pork",
  },
  {
    idMeal: "53031",
    strMeal: "Egyptian Fatteh",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg",
    strTags: "",
    strArea: "Egyptian",
    strCategory: "Beef",
  },
];

// search meal name
const searchMealByName = async (meal) => {
  const res = await fetch(`${API.searchByName}${meal}`);
  const data = await res.json();
  return data.meals;
};

// fetch meal details by id
const mealDetails = async (id) => {
  const res = await fetch(`${API.mealDetails}${id}`);
  const data = await res.json();
  return data;
};

//fetch 8 random meals from API
const getMeals = async () => {
  let temp_meals = [];
  while (temp_meals.length !== 8) {
    let res = await fetch(API.randomMeal);
    let data = await res.json();
    let isDup = !!temp_meals.find(
      (meal) => JSON.stringify(meal) === JSON.stringify(data.meals[0])
    );
    if (!isDup) {
      temp_meals.push(data.meals[0]);
    }
  }
  return temp_meals;
};

// ? To be use in autocomplete search filter
const getAreas = async () => {
  const res = await fetch(API.areas);
  const data = res.json();
  return data.meals;
};

const getIngredientImg = (ingredient) => {
  let imgThumbnail = `${API.Image}/${ingredient}.png`;
  return imgThumbnail;
};

const listOfIngredients = async () => {
  const res = await fetch(API.ingredients);
  const data = await res.json();
  return data.meals;
};

const filterByMainIngredient = async (ingredientName) => {
  const res = await fetch(`${API.filterByIngredient}${ingredientName}`);
  const data = await res.json();
  return data.meals;
};

export {
  searchMealByName,
  getMeals,
  getAreas,
  mealDetails,
  latestMeals,
  getIngredientImg,
  listOfIngredients,
  filterByMainIngredient,
};
export default API;
