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

const requestUrl = `https://api.edamam.com/search?q=kale&app_id=ac4c321f&app_key=90ba872d5ada15d1e7ae658122a03d3b`;

let foodToSearch = null;
let recipeLabel = document.querySelector("#recipe-label");
let recipeCalories = document.querySelector("span");

let hrefOfRecipeLabel = document.querySelector("#recipe-label");
function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  // Fetch data from API
  const response = await fetch(
    `https://api.edamam.com/search?q=${foodToSearch}&app_id=ac4c321f&app_key=90ba872d5ada15d1e7ae658122a03d3b`
  );
  const data = await response.json();
  //First recipe
  let firstRecipe = data.hits[0];
  //Display recipe label
  let recipeLabelText = firstRecipe.recipe.label;
  recipeLabel.innerHTML = recipeLabelText;
  //Set href attribute of recipe label
  let recipeUrl = firstRecipe.recipe.url;
  recipeLabel.setAttribute("href", recipeUrl);
  console.log(recipeUrl);
  //Change innerText of span
  recipeCalories.innerHTML = Math.round(firstRecipe.recipe.calories);
  console.log(data.hits[0].recipe.calories);
  //--- write your code above ---
}
