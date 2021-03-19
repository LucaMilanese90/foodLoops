let inOrOut = '';
let country = '';

//getting the header element
const header = document.querySelector("header");

//adding navigation links to header
const navLinks = document.createElement("ul");
navLinks.classList.add("nav-links", "nav-closed");
header.prepend(navLinks);

const navHome = document.createElement("li");
navHome.classList.add("nav-home");
navHome.innerHTML = "Home";
navLinks.appendChild(navHome);

const navRecipe = document.createElement("li");
navRecipe.classList.add("in");
navRecipe.innerHTML = "Cook at home";
navLinks.appendChild(navRecipe);

const navRestaurant = document.createElement("li");
navRestaurant.classList.add("out");
navRestaurant.innerHTML = "Eat out";
navLinks.appendChild(navRestaurant);

navLinks.addEventListener("click", function (event) {
    if(event.target.className === 'nav-home') {
        window.location.href = "./index.html"
    } else {
    inOrOut = event.target.className;
    console.log(inOrOut);
    window.location.href = "./index.html#country-selection";
    // countrySection.scrollIntoView({behavior: 'smooth'});
    }
})


//getting the nav element
const navBar = document.querySelector("nav");

//adding logo to navBar
const logo = document.createElement("div");
logo.classList.add("logo");
navBar.appendChild(logo);

//adding hamburger to navBar
const hamburger = document.createElement("div");
hamburger.classList.add("hamburger", "nav-closed");
navBar.appendChild(hamburger);

//adding open-close mechanism

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("nav-closed");
    navLinks.classList.toggle("nav-closed");
});

navLinks.addEventListener("click", function () {
    hamburger.classList.toggle("nav-closed");
    navLinks.classList.toggle("nav-closed");
});