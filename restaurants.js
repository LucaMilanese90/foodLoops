const mexico = [{

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

// restaurant logic
let cuisineSelection = mexicanRestaurants;
// setting the main recipe randomly on pageload
let restaurantsIndex = parseInt(Math.random() * (cuisineSelection.length - 0) + 0);
let restaurantsName = cuisineSelection[restaurantsIndex].name;

function UpdaterestaurantsIndex(restaurantsName) {
  return cuisineSelection.findIndex(x => x.name === restaurantsName);
};

function updateRestaurants(cuisineSelection, restaurantsIndex) {
  // Update Main
  document.querySelector('.restaurant-title').innerHTML = cuisineSelection[restaurantsIndex].name;
  document.querySelector('#img-restaurant').src = cuisineSelection[restaurantsIndex].imageUrl;
  document.querySelector('#img-restaurant').alt = cuisineSelection[restaurantsIndex].name;
  document.querySelector('.restaurant-description').innerHTML = cuisineSelection[restaurantsIndex].about;
  document.querySelector('#gmap_canvas1').src = cuisineSelection[restaurantsIndex].mapUrl;
  document.querySelector('#button-link').href = cuisineSelection[restaurantsIndex].buttonUrl;

  // Update Secondary
  const secondaryImages = document.querySelectorAll('.small-photo');
  let i = 1;
  secondaryImages.forEach(image => {
    image.src = cuisineSelection[(restaurantsIndex + i) % cuisineSelection.length].imageUrl;
    image.alt = cuisineSelection[(restaurantsIndex + i) % cuisineSelection.length].name;
    i++;
  })
  const secondaryTitle = document.querySelectorAll('.small-title');
  let g = 1;
  secondaryTitle.forEach(title => {
    title.innerHTML = cuisineSelection[(restaurantsIndex + g) % cuisineSelection.length].name;
    g++;
  })
};


const moreRestaurants = document.body.querySelector('#restaurant-secondary');
const alternativeRestaurants = moreRestaurants.querySelectorAll('.alternative-restaurants');

alternativeRestaurants.forEach(item => {
  item.addEventListener('click', () => {
    // retriving user selection for the recipe name after click
    restaurantsName = item.querySelector('h3').innerHTML;
    // running function to update the index of the recipe in recipes array
    restaurantsIndex = UpdaterestaurantsIndex(restaurantsName);
    updateRestaurants(cuisineSelection, restaurantsIndex);
    // scroll the window to the beginning of recipe-main div
    const restaurantDiv = document.body.querySelector('#restaurant-main');
    window.scrollTo({
      top: restaurantDiv.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  })
})

updateRestaurants(cuisineSelection, restaurantsIndex);