const countrySection = document.getElementById('country-selection');
const countries = document.querySelectorAll('.country-card > a');
const inOut = document.getElementById('in-out-selection');
let cuisineType;

function logVar(a, b) {
    cuisineType = b;
    console.log(a, b)
    // a === 'in' ? window.location.href='recipes.html' : window.location.href='restaurant.html';

}

inOut.addEventListener('click', event => {
    inOrOut = event.target.className;
    countrySection.scrollIntoView({behavior: 'smooth'});
    countries.forEach((country) => {
        if(inOrOut === 'in') {
            country.href = './recipes.html'
        } else {
            country.href = './restaurants.html'
        }
    })
})

countrySection.addEventListener('click', event => {
    country = event.target.className;
    countryName = country.split(' ').pop();
    logVar(inOrOut, countryName);
})
