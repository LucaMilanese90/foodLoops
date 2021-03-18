const recipes = [
    {
        country: 'Italy',
        name: 'another carbonara',
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
        name: 'third recipe',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 2,
        picture: 'https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    }
];

let portionSelection = 2;
let recipeName = 'another carbonara';

const recipeIndex = recipes.findIndex(x => x.name === recipeName);

function createIngredientList(index, portionSelection) {
    for (let i = 0; i < recipes[index].ingredients.length; i++) {
        let updatedQuantity;
        let updatedUnitMeasure = recipes[index].unitMeasure[i];
        let updatedIngredient = recipes[index].ingredients[i];

        if ((typeof recipes[index].quantity[i]) != 'number') {
            updatedQuantity = recipes[index].quantity[i];
        } else {
            updatedQuantity = parseInt(recipes[index].quantity[i] * portionSelection / recipes[recipeIndex].portions);
        }

        const ingredientListDiv = document.body.querySelector('#ingredients');
        const listItem = document.createElement('li');
        listItem.classList.add('individual-ingredient');
        listItem.innerHTML = `${updatedQuantity}${updatedUnitMeasure} ${updatedIngredient}`;
        ingredientListDiv.appendChild(listItem);
    }
};

function addImageAndTitle(index) {
    const ingredientListDiv = document.body.querySelector('#recipe-main');
    const mainImage = ingredientListDiv.querySelector('#recipe-main-image');
    mainImage.src = recipes[index].picture;
    mainImage.alt = recipes[index].name;
    const mainTitle = ingredientListDiv.querySelector('#recipe-main-title');
    mainTitle.innerHTML = recipes[index].name;
}


createIngredientList(recipeIndex, portionSelection);
addImageAndTitle(recipeIndex);