const restaurantsCountry = ["italy","greece", "mexico", "germany","syrian"]

const countries = [ {
  country: "Mexico",  
  name: "Maria Bonita",
  about: "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border”.",
  image: "./src.images/Maria Bonita.jpg",
  mapUrl: "https://maps.google.com/maps?q=Maria%20Bonita,%20Danziger%20Str.%2033,%2010435%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
},
{
  country: "Mexico",  
  name: "Zapata",
  about: "Lorem50",
  image: "./src.images/Zapata.jpg",
  mapUrl: "https://maps.google.com/maps?q=Hauptstra%C3%9Fe%205,%2010827%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
},
{
country: "Mexico",  
  name: "Tacoriño",
  about: "Lorem50",
  image: "./src.images/Tacoriño .jpg",
  mapUrl: "https://maps.google.com/maps?q=TACORI%C3%91O,%20Knesebeckstra%C3%9Fe,%20Berl%C3%ADn&t=&z=13&ie=UTF8&iwloc=&output=embed"
}
]
 
 const mainMap = document.body.querySelector("#gmap_canvas1");
mainMap.src = countries[0].mapUrl; 

const imageR = document.body.querySelector("#maria");
imageR.src = countries[0].image;

function arrayRestaurants(array){
  for (let i = 0; i < countries.length; i ++){
    console.log(array[i]); 
  }
}












