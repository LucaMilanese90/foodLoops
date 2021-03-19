const recipes = [
    {
        country: 'italy',
        name: 'risotto',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 4,
        picture: 'https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
        country: 'italy',
        name: 'carbonara',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'guanciale', 'black pepper'],
        quantity: [2, 35, 200, 80, ''],
        unitMeasure: ['', 'g', 'g', 'g', ''],
        portions: 1,
        picture: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
        country: 'italy',
        name: 'lasagne',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, 'qb', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 3,
        picture: 'https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    }
];

// setting the main recipe randomly on pageload
let recipeIndex = parseInt(Math.random() * (3 - 0) + 0);
let recipeName = recipes[recipeIndex].name;
let portionSelection = recipes[recipeIndex].portions;

const portionDiv = document.body.querySelector('#portions');
const portionsButtons = portionDiv.querySelectorAll('.portions-button');



// cycling through each portion button
portionsButtons.forEach(item => {
    // adding the class '.selected-button' on page load to the default portion size
    if (item.innerHTML == portionSelection) {
        item.classList.add('selected-button');
    };
    //  added event listener to lokk for clik for all buttons with class '.portions-button' 
    item.addEventListener('click', () => {
        // retriving user selection for number of portion after click
        portionSelection = parseInt(item.innerHTML);
        // running function to update ingredient list quantity
        updateIngredientList(recipeIndex, portionSelection);
        // removing the class '.selected-button' from every '.portions-button'
        portionsButtons.forEach(item => {
            item.classList.remove('selected-button');
        })
        // adding the class '.selected-button' only to the button clicked
        item.classList.add('selected-button');
    })
})


// currently NOT IN USE
// refresh the index of the recipe object inside the recipes array
// searching a match in every object.name with the recipe name
function UpdateRecipeIndex(recipeName) {
    return recipes.findIndex(x => x.name === recipeName);
};

// creating string for recipe ingredient list
function updateIngredientList(recipeIndex, portionSelection) {
    const ingredientListDiv = document.body.querySelector('#ingredients');
    // resetting current ingredient list content
    ingredientListDiv.innerHTML = '';
    for (let i = 0; i < recipes[recipeIndex].ingredients.length; i++) {
        let updatedQuantity;
        let updatedUnitMeasure = recipes[recipeIndex].unitMeasure[i];
        let updatedIngredient = recipes[recipeIndex].ingredients[i];

        // excluding quantity update for non-numeric quantity i.e. black pepper
        if ((typeof recipes[recipeIndex].quantity[i]) != 'number') {
            updatedQuantity = recipes[recipeIndex].quantity[i];
        } else {
            updatedQuantity = parseInt(recipes[recipeIndex].quantity[i] * portionSelection / recipes[recipeIndex].portions);
        }

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

// function updateSecondaryImageAndTitle(recipeIndex) {
//     const moreRecipes = document.body.querySelector('#more-recipes');
//     const recipe1 = moreRecipes.querySelector('.recipe1');
//     const recipe2 = moreRecipes.querySelector('.recipe2');
//     recipe1.querySelector('img').src = recipes[(recipeIndex + 1) % 3].picture;
//     recipe1.querySelector('h3').innerHTML = recipes[(recipeIndex + 1) % 3].name;
//     recipe2.querySelector('img').src = recipes[(recipeIndex + 2) % 3].picture;
//     recipe2.querySelector('h3').innerHTML = recipes[(recipeIndex + 2) % 3].name;
// }

function updateSecondaryImageAndTitle(recipeIndex) {
    const moreRecipes = document.body.querySelector('#more-recipes');
    const alternativeRecipes = moreRecipes.querySelectorAll('.alternative-recipes');
    let i = 1;
    alternativeRecipes.forEach(item => {
        item.querySelector('img').src = recipes[(recipeIndex + i) % recipes.length].picture;
        item.querySelector('h3').innerHTML = recipes[(recipeIndex + i) % recipes.length].name;
        i++;
    })
}


const moreRecipes = document.body.querySelector('#more-recipes');
const alternativeRecipes = moreRecipes.querySelectorAll('.alternative-recipes');

//  added event listener to lokk for clik for all divs with class '.alternative-recipes' 
alternativeRecipes.forEach(item => {
    item.addEventListener('click', () => {
        // retriving user selection for the recipe name after click
        recipeName = item.querySelector('h3').innerHTML;
        // running function to update the index of the recipe in recipes array
        recipeIndex = (UpdateRecipeIndex(recipeName));
        // updating secondary and main section
        updateSecondaryImageAndTitle(recipeIndex);
        updateMainImageAndTitle(recipeIndex);
        // !!!REMEMBER TO COME BACK TO THIS LINE!!!
        portionSelection = recipes[recipeIndex].portions;
        updateIngredientList(recipeIndex, portionSelection);
        // scroll the window to the beginning of recipe-main div
        const ingredientListDiv = document.body.querySelector('#recipe-main');
        window.scrollTo({
            top: ingredientListDiv.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})



updateIngredientList(recipeIndex, portionSelection);
updateMainImageAndTitle(recipeIndex);
updateSecondaryImageAndTitle(recipeIndex);







// TODO LIST:

// Modify function to account for single and plural i.e egg - eggs
// Modify function to avoid 0 quantity output on signle portion