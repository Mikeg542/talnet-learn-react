# Project requirements

-   Use the mealdb api https://www.themealdb.com/api.php for all data requests

-   On app load, return a grid of meal categories as images (www.themealdb.com/api/json/v1/1/categories.php)

-   On clicking one of the categories, render in a grid all meals in that category (www.themealdb.com/api/json/v1/1/filter.php?c=<category>) below the category

-   The meal list should have a close button that hides all meals of that category

-   multiple categories can have all meals rendered at the same time

-   the meal list should use its own subcomponent

# Extra challenges

-   Implement prop types to the subcomponents

-   When clicking a meal in the list, open a modal ontop of the page to disaply the meal name, ingredient list and instructions

-   add button to sort A->Z / Z->A for the meal list

-   Add an input field filter that hides categories that dont match the entered text (aka search Veg just displays vegetarian and vegan)
