const countrySection = document.getElementById('country-selection');
const inOut = document.getElementById('in-out-selection');


inOut.addEventListener('click', event => {
    if(event.target.className === 'in') {
        console.log('in');
        countrySection.scrollIntoView({behavior: 'smooth'});
    } else if (event.target.className === 'out') {
        console.log('out')
        countrySection.scrollIntoView({behavior: 'smooth'});
    }
})