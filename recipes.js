const italian = [
    {
        cuisine: 'italian',
        intro: 'Italian cuisine is bla bla bla...',
        name: 'risotto',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, '', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 4,
        directions: [
            'Do something',
            'Now do something else',
            'Almost there, stirr it once more',
            'Cross your fingers',
            'Ready to go!',
        ],
        picture: 'https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    {
        name: 'carbonara',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'guanciale', 'black pepper'],
        quantity: [2, 35, 200, 80, ''],
        unitMeasure: ['', 'g', 'g', 'g', ''],
        portions: 1,
        directions: [
            'If you see some green stuff between your ingredients you are already doing it wrong, start again',
            'I\'m serious, NO green stuff',
            'Make sure you are not making scrumbled eggs',
            'Enjoy',
        ],
        picture: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
        name: 'lasagne',
        ingredients: ['eggs', 'pecorino cheese', 'pasta', 'pepper', 'guanciale'],
        quantity: [2, 35, 200, '', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 3,
        directions: [
            'Do something',
            'Now do something else',
            'Almost there, stirr it once more',
            'Cross your fingers',
            'Ready to go!',
        ],
        picture: 'https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    }];

const greek = [
    {
        cuisine: 'greek',
        intro: 'Greek cuisine is bla bla bla...',
        name: 'something yummy',
        ingredients: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
        quantity: [2, 35, 200, '', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 2,
        directions: [
            'Do something',
            'Now do something else',
            'Almost there, stirr it once more',
            'Cross your fingers',
            'Ready to go!',
        ],
        picture: 'https://images.unsplash.com/photo-1537215781824-73d7761029e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1515&q=80'
    },
    {
        name: 'something more yummy',
        ingredients: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
        quantity: [2, 35, 200, '', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 3,
        directions: [
            'Do something',
            'Now do something else',
            'Almost there, stirr it once more',
            'Cross your fingers',
            'Ready to go!',
        ],
        picture: 'https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80'
    },
    {
        name: 'something even more yummy',
        ingredients: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
        quantity: [2, 35, 200, '', 80],
        unitMeasure: ['', 'g', 'g', '', 'g'],
        portions: 4,
        directions: [
            'Do something',
            'Now do something else',
            'Almost there, stirr it once more',
            'Cross your fingers',
            'Ready to go!',
        ],
        picture: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'
    }];



let cuisineSelection = italian;
// setting the main recipe randomly on pageload
let recipeIndex = parseInt(Math.random() * (3 - 0) + 0);
let recipeName = cuisineSelection[recipeIndex].name;
let portionSelection = cuisineSelection[recipeIndex].portions;

const portionDiv = document.body.querySelector('#portions');
const portionsButtons = portionDiv.querySelectorAll('.portions-button');


function updateDefaultButtonQuantity() {
    const portionDiv = document.body.querySelector('#portions');
    const portionsButtons = portionDiv.querySelectorAll('.portions-button'); portionsButtons.forEach(item => {
        // adding the class '.selected-button' on page load to the default portion size
        if (item.innerHTML == portionSelection) {
            item.classList.add('selected-button');
        } else {
            item.classList.remove('selected-button');
        }
    })
};

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
        updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
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
    return cuisineSelection.findIndex(x => x.name === recipeName);
};


// creating strings for recipe ingredient list
function updateIngredientList(cuisineSelection, recipeIndex, portionSelection) {
    const ingredientListDiv = document.body.querySelector('#ingredients');
    // resetting current ingredient list content
    ingredientListDiv.innerHTML = '';
    for (let i = 0; i < cuisineSelection[recipeIndex].ingredients.length; i++) {
        let updatedQuantity;
        // excluding quantity update for non-numeric quantity i.e. black pepper
        if ((typeof cuisineSelection[recipeIndex].quantity[i]) != 'number') {
            updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
            // setting minimun quantity to 1 so the parseInt rounding will never output 0
        } else if (parseInt(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions) === 0) {
            updatedQuantity = 1;
        } else {
            updatedQuantity = parseInt(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
        };

        let updatedUnitMeasure = cuisineSelection[recipeIndex].unitMeasure[i];
        let updatedIngredient = cuisineSelection[recipeIndex].ingredients[i];

        const listItem = document.createElement('li');
        listItem.classList.add('individual-ingredient');
        listItem.innerHTML = `${updatedQuantity}${updatedUnitMeasure} ${updatedIngredient}`;
        ingredientListDiv.appendChild(listItem);
    }
};


function updateCookDirections(cuisineSelection, recipeIndex) {
    const cookingDirectionsDiv = document.body.querySelector('#directions');
    // resetting current cooking directions content
    cookingDirectionsDiv.innerHTML = '';
    for (let i = 0; i < cuisineSelection[recipeIndex].directions.length; i++) {
        const pItem = document.createElement('p');
        pItem.classList.add('individual-step');
        pItem.innerHTML = cuisineSelection[recipeIndex].directions[i];
        cookingDirectionsDiv.appendChild(pItem);
    }
};


function updatePageTitleAndIntro(cuisineSelection) {
    const pageTitle = document.body.querySelector('.country-title');
    const pageIntro = document.body.querySelector('.country-description');
    // using a fix index of 0 since the name of the cuisine and the intro are only present in the first recipe of every object
    pageTitle.innerHTML = cuisineSelection[0].cuisine;
    pageIntro.innerHTML = cuisineSelection[0].intro;
}

function updateMainImageAndTitle(recipeIndex) {
    const ingredientListDiv = document.body.querySelector('#recipe-main');
    const mainImage = ingredientListDiv.querySelector('img');
    mainImage.src = cuisineSelection[recipeIndex].picture;
    mainImage.alt = cuisineSelection[recipeIndex].name;
    const mainTitle = ingredientListDiv.querySelector('#recipe-main-title');
    mainTitle.innerHTML = cuisineSelection[recipeIndex].name;
}

function updateSecondaryImageAndTitle(recipeIndex) {
    const moreRecipes = document.body.querySelector('#more-recipes');
    const alternativeRecipes = moreRecipes.querySelectorAll('.alternative-recipes');
    let i = 1;
    alternativeRecipes.forEach(item => {
        item.querySelector('img').src = cuisineSelection[(recipeIndex + i) % cuisineSelection.length].picture;
        item.querySelector('h3').innerHTML = cuisineSelection[(recipeIndex + i) % cuisineSelection.length].name;
        i++;
    })
}


const moreRecipes = document.body.querySelector('#more-recipes');
const alternativeRecipes = moreRecipes.querySelectorAll('.alternative-recipes');

//  added event listener to look for clik for all divs with class '.alternative-recipes' 
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
        portionSelection = cuisineSelection[recipeIndex].portions;
        updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
        updateCookDirections(cuisineSelection, recipeIndex);
        updateDefaultButtonQuantity();
        // scroll the window to the beginning of recipe-main div
        const ingredientListDiv = document.body.querySelector('#recipe-main');
        window.scrollTo({
            top: ingredientListDiv.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})



updatePageTitleAndIntro(cuisineSelection)
updateMainImageAndTitle(recipeIndex);
updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
updateCookDirections(cuisineSelection, recipeIndex);
updateSecondaryImageAndTitle(recipeIndex);







// TODO LIST:

// Modify function to account for single and plural i.e egg - eggs