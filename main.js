/*
Phase 1
1. Use the fetchRecipe function to make a fetch request
to the Edamam API with 
the food that the function takes in 
entered as a search query. 
2. Use the first recipe from the hits array in the data that you receive.
3. Use .innerHTML to set the text contained in the a tag 
with the id #recipe-link to be the recipe label from the data you receive.
4. Then set the href of #recipe-link to be the recipe's url,
 also from the received data.

PSEUDOCODE
//Phase 1.1
IN FUNCTION FETCH_RECIPE
  - AWAIT FETCH RESPONSE WITH URL
    - USE STRING INTERPOLATION TO INJECT FOOD_TO_SEARCH
  - SET AS RESPONSE
  - AWAIT RESPONSE 
  - APPLY JSON() METHOD TO RETRIEVE JS OBJECT
  - SET AS DATA
  //Phase 1.2
  - RETURN FIRST HIT OF DATA ARRAY
  - SET ASS FIRST_RECIPE
  - RETURN FIRST_RECIPE
//Phase 1.3
SELECT A TAG WITH ID #recipe-link IN THE DOM
  SET AS RECIPE_LINK
  RETURN RECIPE LABEL FROM THE FUNCTION
  SET AS RECIPE_LABEL
  ASSIGN RECIPE_LABEL TO INNERHTML OF RECIPE_LINK
//Phase 1.4
ADD HREF TO A TAG WITH ID #recipe-link
GET RECIPE URL FROM DATA ARRAY
SET AS RECIPE_URL
SET HREF ATTRIBUTE TO RECIPE_URL





*/
const YOUR_APP_ID = "ac4c321f";
const YOUR_APP_KEY = "90ba872d5ada15d1e7ae658122a03d3b";

const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

let foodToSearch = null;

let recipeSection = document.querySelector("#recipe-section");

// let recipeLabel = document.querySelector("#recipe-label");
function handleRecipeClick() {
  recipeSection.innerHTML = "";
  fetchRecipe(foodToSearch);
  let recipeTypeTitle = document.querySelector(".recipe-type-title");
  recipeTypeTitle.innerHTML = `${foodToSearch.toUpperCase()} RECIPES`;
  let main = document.querySelector("main");
  main.classList.add("flex");
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  // Fetch data from API
  const response = await fetch(
    `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  let { hits } = await response.json();
  for (let i = 0; i < 9; i++) {
    displayRecipeResults(hits[i].recipe);
  }
}
function displayRecipeResults(recipe) {
  //create recipe card div
  let recipeCard = document.createElement("div");
  recipeCard.setAttribute("class", "recipe-card");
  recipeSection.appendChild(recipeCard);
  //create recipe card header div
  let recipeCardHeader = document.createElement("div");
  recipeCardHeader.setAttribute("class", "recipe-card-header");
  recipeCard.appendChild(recipeCardHeader);
  //create recipe h3element inside recipe card header div
  let recipeLabelH3 = document.createElement("h3");
  recipeCardHeader.appendChild(recipeLabelH3);
  //create link inside h2
  let recipeLabelLink = document.createElement("a");
  recipeLabelLink.setAttribute("href", `${recipe.url}`);
  recipeLabelLink.innerHTML = recipe.label;
  recipeLabelH3.appendChild(recipeLabelLink);
  //create recipe calories p element with span inside recipe card header div
  // create span
  let recipeCaloriesSpan = document.createElement("span");
  let recipeCaloriesSpanText = Math.floor(recipe.calories);
  let recipeCalories = document.createElement("p");
  recipeCalories.innerHTML = `${recipeCaloriesSpanText} Calories`;
  recipeCalories.setAttribute("class", "recipe-calories");
  recipeCardHeader.appendChild(recipeCalories);
  recipeCalories.appendChild(recipeCaloriesSpan);
  //create recipe card image div
  let recipeCardImageDiv = document.createElement("div");
  recipeCardImageDiv.setAttribute("class", "recipe-card-image");
  recipeCardImageDiv.setAttribute(
    "style",
    `background-image: url(${recipe.image});`
  );
  recipeCard.appendChild(recipeCardImageDiv);
  //create ingredient div
  let recipeCardIngredientDiv = document.createElement("div");
  let recipeCardIngredientList = document.createElement("ul");
  let recipeCardIngredientsArray = recipe.ingredients;
  for (let i = 0; i < recipeCardIngredientsArray.length; i++) {
    let ingredient = document.createElement("li");
    ingredient.innerHTML = recipeCardIngredientsArray[i].text;
    recipeCardIngredientList.appendChild(ingredient);
  }
  recipeCard.appendChild(recipeCardIngredientDiv);
  recipeCardIngredientDiv.appendChild(recipeCardIngredientList);
}
