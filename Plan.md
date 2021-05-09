/\*
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

\*/
