/* eslint-disable */
export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export default function RecipeList() {
  let totalRecipe = recipes.map((recipe) => {
    let recipeIngredients = recipe.ingredients.map((ingredient) => {
      return <li>{ingredient}</li>;
    });
    return (
      <>
        <h2 key={recipe.id}>{recipe.name}</h2>
        <ul>{recipeIngredients}</ul>
      </>
    );
  });
  return (
    <div>
      <h1>Recipes:</h1>
      {totalRecipe}
    </div>
  );
}
