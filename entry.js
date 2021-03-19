const countrySection = document.getElementById('country-selection');
const inOut = document.getElementById('in-out-selection');
let inOrOut = '';
let country = '';

function logVar (a, b) {
    console.log(a,b)
}

inOut.addEventListener('click', event => {
    inOrOut = event.target.className;
    countrySection.scrollIntoView({behavior: 'smooth'});
})

countrySection.addEventListener('click', event => {
    country = event.target.className;
    countryName = country.split(' ').pop();
    logVar(inOrOut, countryName);
})
