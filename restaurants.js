const mexico = [ {

  country: "Mexico",  
  name: "Maria Bonita",
  about: "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
  imageUrl: "./src.images/Maria Bonita.jpg",
  mapUrl: "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
  buttonUrl: "https://www.mariabonita.de/"
},

{
  country: "Mexico",  
  name: "Zapata",
  about: "Lorem50",
  imageUrl: "./src.images/Zapata.jpg",
  mapUrl: "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
  buttonUrl: "http://zapata-berlin.de/"
},

{
  country: "Mexico",  
  name: "Tacoriño",
  about: "Lorem50",
  imageUrl: "./src.images/Tacoriño .jpg",
  mapUrl: "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
  buttonUrl: "https://www.tacorino.de/" 
}
]









// function createCard (name, description, restName, restImg, restDesc, restMap, restLink){

// //const card = document.querySelector("#main-restaurant");
// //card.classList.add("card"); 



// const countryName = document.querySelector(".country-title");
// //document.createElement("div"); 
// //card.classList.add("country-name");
// countryName.innerText = name;
// card.appendChild(countryName); 

// const countryDescription = document.querySelector(".country-description");
// //document.createElement("div"); 
// //card.classList.add("country-description"); 
// countryDescription.innerText = description; 
// //card.appendChild(countryDescription); 

// const restaurantName = document.querySelector(".restaurant-title"); 
// //card.classList.add("restaurant-name");
// restaurantName.innerText = restName;  
// //card.appendChild(restaurantName); 

// const restaurantImage = document.querySelector("#imgRestaurant"); 
// restaurantImage.style.backgroundImage = `url(${restImg})`;
// //restaurantImage.classList.add("restaurant-image"); 
// restaurantImage.src = restImg; 
// //card.appendChild(restaurantImage); 

// const restaurantDescription = document.querySelector(".restaurant-description"); 
// //card.classList.add("restaurant-description"); 
// restaurantDescription.innerText = restDesc; 
// //card.appendChild(restaurantDescription); 

// const map = document.querySelector("#gmap_canvas1"); 
// //card.classList.add("map"); 
// map.src = restMap;
// //card.appendChild(map); 

// const cardbutton = document.querySelector("#buttonLink");
// //card.classList.add("button-website"); 
// cardbutton.href = restLink; 
// cardbutton.innerText = "Go to Website";    
// //const container = document.querySelector("#main-restaurant"); 
// //container.appendChild(card); 
// }

// for (let i = 0; i < mexico.length; i++) { 
// createCard(mexico[i].name, mexico[i].description, mexico[i].restName, mexico[i].restImg, mexico[i].restDesc, mexico[i].restMap, mexico[i].restLink);
// }

// for (let j = 0; j < italy.length; i++){
//   createCard(italy[j].name, italy[j].description, italy[j].restName, italy[j].restImg, italy[j].restDesc, italy[j].restMap, italy[j].restLink);}



 





// function updateSecondaryImageAndTitle(recipeIndex) {
//     const moreRecipes = document.body.querySelector('#more-recipes');
//     const alternativeRecipes = moreRecipes.querySelectorAll('.alternative-recipes');
//     let i = 1;
//     alternativeRecipes.forEach(item => {
//         item.querySelector('img').src = recipes[(recipeIndex + i) % recipes.length].picture;
//         item.querySelector('h3').innerHTML = recipes[(recipeIndex + i) % recipes.length].name;
//         i++;
//     })
// }
// function updateMainImageAndTitle(recipeIndex) {
//     const ingredientListDiv = document.body.querySelector('#recipe-main');
//     const mainImage = ingredientListDiv.querySelector('img');
//     mainImage.src = recipes[recipeIndex].picture;
//     mainImage.alt = recipes[recipeIndex].name;
//     const mainTitle = ingredientListDiv.querySelector('#recipe-main-title');
//     mainTitle.innerHTML = recipes[recipeIndex].name;
// }
// function UpdateRecipeIndex() {
//     recipes.findIndex(x => x.name === recipeName);
// };



