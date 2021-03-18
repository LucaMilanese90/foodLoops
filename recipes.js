const recipes = [
    {
        country: 'Italy',
        name: 'risotto',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 4,
        picture: 'https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
        country: 'Italy',
        name: 'carbonara',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 2,
        picture: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
        country: 'Italy',
        name: 'lasagne',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 2,
        picture: 'https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    }
];

let portionSelection = 2;
let recipeName = 'another carbonara';
let recipeIndex = parseInt(Math.random() * (3 - 0) + 0);

function UpdateRecipeIndex() {
    recipes.findIndex(x => x.name === recipeName);
};

function updateIngredientList(recipeIndex, portionSelection) {
    for (let i = 0; i < recipes[recipeIndex].ingredients.length; i++) {
        let updatedQuantity;
        let updatedUnitMeasure = recipes[recipeIndex].unitMeasure[i];
        let updatedIngredient = recipes[recipeIndex].ingredients[i];

        if ((typeof recipes[recipeIndex].quantity[i]) != 'number') {
            updatedQuantity = recipes[recipeIndex].quantity[i];
        } else {
            updatedQuantity = parseInt(recipes[recipeIndex].quantity[i] * portionSelection / recipes[recipeIndex].portions);
        }

        const ingredientListDiv = document.body.querySelector('#ingredients');
        const listItem = document.createElement('li');
        listItem.classList.add('individual-ingredient');
        listItem.innerHTML = `${updatedQuantity}${updatedUnitMeasure} ${updatedIngredient}`;
        ingredientListDiv.appendChild(listItem);
    }
};

function updateMainImageAndTitle(recipeIndex) {
    const ingredientListDiv = document.body.querySelector('#recipe-main');
    const mainImage = ingredientListDiv.querySelector('img');
    mainImage.src = recipes[recipeIndex].picture;
    mainImage.alt = recipes[recipeIndex].name;
    const mainTitle = ingredientListDiv.querySelector('#recipe-main-title');
    mainTitle.innerHTML = recipes[recipeIndex].name;
}

function updateSecondaryImageAndTitle(recipeIndex) {
    const moreRecipes = document.body.querySelector('#more-recipes');
    const recipe1 = moreRecipes.querySelector('.recipe1');
    const recipe2 = moreRecipes.querySelector('.recipe2');
    recipe1.querySelector('img').src = recipes[(recipeIndex + 1) % 3].picture;
    recipe1.querySelector('h3').innerHTML = recipes[(recipeIndex + 1) % 3].name;
    recipe2.querySelector('img').src = recipes[(recipeIndex + 2) % 3].picture;
    recipe2.querySelector('h3').innerHTML = recipes[(recipeIndex + 2) % 3].name;
}



updateIngredientList(recipeIndex, portionSelection);
updateMainImageAndTitle(recipeIndex);
updateSecondaryImageAndTitle(recipeIndex);