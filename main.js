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
*/
const YOUR_APP_ID = "ac4c321f";
const YOUR_APP_KEY = "90ba872d5ada15d1e7ae658122a03d3b";

const requestUrl = `https://api.edamam.com/search?q=kale&app_id=ac4c321f&app_key=90ba872d5ada15d1e7ae658122a03d3b`;

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  let response = await fetch(
    "https://api.edamam.com/search?q=kale&app_id=ac4c321f&app_key=90ba872d5ada15d1e7ae658122a03d3b"
  );
  let data = await response.json();

  console.log(data.hits[3]);
  //--- write your code above ---
}
