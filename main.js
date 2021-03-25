const mainHome = document.getElementById("main");
const mainRecipes = document.getElementById("main-recipes");
const mainRestaurant = document.getElementById("main-restaurant");

window.onload = () => {
  mainRecipes.classList.add("not-visible");
  mainRestaurant.classList.add("not-visible");
};

// recipe data
const italian = [
  {
    cuisine: "Italian",
    intro: "Italian cuisine is bla bla bla...",
    name: "risotto",
    ingredients: ["eggs", "pecorino cheese", "pasta", "pepper", "guanciale"],
    quantity: [2, 35, 200, "", 80],
    unitMeasure: ["", "g", "g", "", "g"],
    portions: 4,
    directions: [
      "Do something",
      "Now do something else",
      "Almost there, stirr it once more",
      "Cross your fingers",
      "Ready to go!",
    ],
    picture:
      "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    name: "Carbonara",
    ingredients: [
      "eggs",
      "pecorino cheese",
      "pasta",
      "guanciale",
      "black pepper",
    ],
    quantity: [2, 35, 200, 80, ""],
    unitMeasure: ["", "g", "g", "g", ""],
    portions: 1,
    directions: [
      "If you see some green stuff between your ingredients you are already doing it wrong, start again",
      "I'm serious, NO green stuff",
      "Make sure you are not making scrumbled eggs",
      "Enjoy",
    ],
    picture:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Classic italian lasagne",
    ingredients: ["eggs", "pecorino cheese", "pasta", "pepper", "guanciale"],
    quantity: [2, 35, 200, "", 80],
    unitMeasure: ["", "g", "g", "", "g"],
    portions: 7,
    directions: [
      "Do something",
      "Now do something else",
      "Almost there, stirr it once more",
      "Cross your fingers",
      "Ready to go!",
    ],
    picture:
      "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
];

const greek = [
  {
    cuisine: "Greek",
    intro: "Greek cuisine is simple and always based on fresh ingredients",
    name: "Greek Cretan Dakos",
    ingredients: [
      "round barley rusk",
      "tomato",
      "teaspoon(s) vinegar, or white wine",
      "granulated sugar",
      "pinch salt and pepper",
      "tbsp basil",
      "thyme, fresh",
      "spring onion",
      "feta cheese",
    ],
    quantity: [1, 1, 1, 1, 1, 1, "", 0.5, 100],
    unitMeasure: ["", "", "", "", "", "", "", "", "g"],
    portions: 2,
    directions: [
      "Place the 2 pieces of the dako onto 2 plates, outer side or crust facing down.",
      "Cut the tomato in half. Grate one half into a bowl. Cut the other half into little cubes. We are going to make a mixture with the grated tomato to soften the dako. ",
      "Add to a bowl the grated tomato, the vinegar, sugar, salt, pepper, finely chopped basil and finely chopped thyme. Toss. Taste and adjust according to your preferences.",
      "Pour the mixture over the dako. ",
      "Top with the tomato cubes, the finely chopped fresh onion and the feta cheese. ",
      "Can be served with chrithmum (an edible wild plant) or capers, olives, olive oil and some freshly ground pepper. ",
    ],
    picture:
      "https://cdn.pixabay.com/photo/2017/11/14/14/59/dakos-2948661_1280.jpg",
  },
  {
    name: "Souvlaki",
    ingredients: [
      "pointed peppers",
      "flatbreads, to serve",
      "sprigs fresh mint, leaves picked",
      "small bunch fresh dill",
      "red wine vinegar",
      "Greek extra virgin olive oil",
      "lemon, to serve",
    ],
    quantity: [3, 8, 4, 1, "", "", 1],
    unitMeasure: ["", "", "", "", "", "", ""],
    portions: 4,
    directions: [
      "If using wooden skewers, cut 8 to fit your griddle pan and soak them in a tray of water to stop them burning. Put all your kebab ingredients into a bowl and use your clean hands to mix everything together really well. Cover with clingfilm, then pop into the fridge for 30 minutes, or longer if you want the flavours to get a bit more intense.",
      "Meanwhile, blacken the peppers directly over the flame of your hob, in a hot dry griddle pan or under a hot grill. Turn them every so often and when they look almost ruined, pop them into a bowl, cover with clingfilm and put to one side to steam for 5 minutes or so – this will help their skins to come off.",
      "Make your tzatziki by coarsely grating the cucumber into a sieve set up over a bowl. Add a few good pinches of sea salt, then use your hands to squeeze out as much water as you can. Pour the water away, then tip the cucumber into the empty bowl and add the yoghurt. Pound the garlic in a pestle and mortar with a good pinch of salt until you have a paste, and spoon that into the bowl with the cucumber. Add the dried mint and red wine vinegar and mix really well. Have a taste to make sure you’ve got the balance right, then put aside.",
      "Preheat a griddle pan or grill on a high heat. Thread the skewers through the marinated pork pieces, leaving little spaces between them so that the heat cooks everything evenly. Cook the kebabs on the screaming hot griddle or grill for about 8 to 10 minutes, turning occasionally until done on all sides. Warm your flatbreads in the oven or in a hot dry pan while your kebabs are cooking.",
      "Just before your kebabs are ready, peel and deseed your blackened peppers, then tear them into strips and put them into a bowl. Roll up your mint leaves, finely slice them and add to the bowl along with the dill. Add a few splashes of red wine vinegar, a pinch or two of salt and black pepper and a lug of extra virgin olive oil. Toss and mix together, then have a taste to check the balance of flavours. Cut your lemon into wedges.",
      "Put a dollop of tzatziki and the meat from one skewer on each warmed flatbread. Top with some of your pepper mixture, a drizzle of extra virgin olive oil and a good squeeze of lemon juice. Life doesn’t get much better.",
    ],
    picture:
      "https://cdn.pixabay.com/photo/2020/10/22/10/07/meal-5675611_1280.jpg",
  },
  {
    name: "Garides saganaki",
    ingredients: [
      "medium prawns",
      "juicy tomatoes",
      "red onion",
      "hot chilli pepper",
      "spring onions",
      "cloves of garlic, chopped",
      "Greek Ouzo",
      "olive oil",
      "salt and freshly ground pepper",
    ],
    quantity: [25, 4, 1, "", 2, 2, 60, "", ""],
    unitMeasure: ["", "", "", "", "", "", "ml", "", ""],
    portions: 6,
    directions: [
      "To prepare this Greek shrimp saganaki recipe start by peeling and cleaning the shrimps.",
      "Continue preparing the sauce. To prepare the sauce for this shrimp saganaki recipe, dice the fresh tomatoes in small cubes and let them strain in a colander, so that no excess water is added to the sauce.",
      "Begin with the sauce for the shrimp saganaki. Heat the olive oil over medium-high heat, add the chopped onion and sauté for 1 minute. Stir in the chopped garlic, chilli peppers and season with salt and and pepper. Sauté all the ingredients together for 1 more minute. Add the chopped tomatoes, cover with the lid, bring to the boil and let simmer for approx. 5 minutes, until the sauce thickens a little bit.",
      "In the meantime sauté the shrimps for this shrimp saganaki recipe. Season the shrimps with salt and pepper on both sides. Heat a large saucepan over medium heat and add 3-4 tbsps olive oil. Add the shrimps, sauté for 1 minute and deglaze with the ouzo.",
      "Pour the sauce in the saucepan along with the shrimps and stir. Top the shrimp saganaki with the crumbled or cubed feta cheese, place the lid on and cook for 2 more minutes, until the feta slightly melts.",
      "Garnish the shrimp saganaki with chopped parsley or dill and serve while still hot. Enjoy this traditional Greek shrimp saganaki recipe with a cold glass of ouzo!",
    ],
    picture:
      "https://cdn.pixabay.com/photo/2016/08/06/13/14/shrimps-1574353_1280.jpg",
  },
];
const syrian = [
  {
    cuisine: "italian",
    intro: "Italian cuisine is bla bla bla...",
    name: "risotto",
    ingredients: ["eggs", "pecorino cheese", "pasta", "pepper", "guanciale"],
    quantity: [2, 35, 200, "", 80],
    unitMeasure: ["", "g", "g", "", "g"],
    portions: 4,
    directions: [
      "Do something",
      "Now do something else",
      "Almost there, stirr it once more",
      "Cross your fingers",
      "Ready to go!",
    ],
    picture:
      "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    name: "carbonara",
    ingredients: [
      "eggs",
      "pecorino cheese",
      "pasta",
      "guanciale",
      "black pepper",
    ],
    quantity: [2, 35, 200, 80, ""],
    unitMeasure: ["", "g", "g", "g", ""],
    portions: 1,
    directions: [
      "If you see some green stuff between your ingredients you are already doing it wrong, start again",
      "I'm serious, NO green stuff",
      "Make sure you are not making scrumbled eggs",
      "Enjoy",
    ],
    picture:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "lasagne",
    ingredients: ["eggs", "pecorino cheese", "pasta", "pepper", "guanciale"],
    quantity: [2, 35, 200, "", 80],
    unitMeasure: ["", "g", "g", "", "g"],
    portions: 3,
    directions: [
      "Do something",
      "Now do something else",
      "Almost there, stirr it once more",
      "Cross your fingers",
      "Ready to go!",
    ],
    picture:
      "https://images.unsplash.com/photo-1614961909013-1e2212a2ca87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
];
const german = [
  {
    cuisine: "german",
    intro: "Italian cuisine is bla bla bla...",
    name: "Beef Rouladen",
    ingredients: [
      "slices top round",
      "slices lean bacon",
      "onion",
      "garlic",
      "tbsp butter",
      "mustard, salt, pepper, cornstratch",
      "cups water",
    ],
    quantity: [6, 3, 1, 3, 2, "", 1],
    unitMeasure: ["", "", "", "", "", "", ""],
    portions: 6,
    directions: [
      "Season beef slices with salt and freshly ground pepper. Thinly spread mustard on top of each slice.",
      "Divide bacon, pickle, and onion slices on one end of each slice.",
      "Roll up slices, tucking the ends in and securing with skewers, wooden cocktail picks, or thread.",
      "Heat butter in skillet. Brown rouladen well on all sides. Do not crowd rouladen in skillet, or they will not brown nicely. Do in small batches if necessary. Add extra butter if needed.",
      "Once all rouladen are well browned, add 1 - 2 cups of hot water, gently stirring up browned bits. Return all rouladen and any accumulated juices to skillet, bring to simmer and cover.",
      "Simmer for about 1½ hours.",
      "Remove rouladen. To thicken gravy, combine about 1 - 2 tbsp cornstarch in a little cold water and stir gently into cooking liquid until slightly thickened.",
      "Season gravy to taste with salt and freshly ground pepper. If you wish, add sour cream to the gravy.",
      "Remove skewers, picks, or thread to serve rouladen with their gravy.",
    ],
    picture:
      "https://cdn.pixabay.com/photo/2010/12/10/08/cabbage-rolls-1124_1280.jpg",
  },
  {
    name: "Herring with Yogurt Sauce and Potatoes",
    ingredients: [
      "pickled herring",
      "potatoes",
      "tbsp butter",
      "bunches radish",
      "pickled cucumbers",
      "bunches chives",
      "bunches dill weed",
      "onion",
      "whiped cream",
      "yoghurt",
      "salt and pepper",
    ],
    quantity: [8, 500, 3, 1, 3, 0.5, 0.5, 1, 150, 100, ""],
    unitMeasure: ["", "g", "", "", "", "", "", "", "g", "g", ""],
    portions: 4,
    directions: [
      "For the herring: Peel potatoes, rinse and cook in boiling salted water for 25 minutes. Drain well.",
      "For the sauce: Rinse herbs and chop finely. Cut cucumber into slices. Peel onion and chop finely.",
      "Rinse and finely slice radishes. Whisk cream with yogurt, herbs, onions, radishes and cucumber and season with salt and pepper. Heat butter in a pan and heat potatoes for a few minutes. Arrange potatoes and herring on plates and drizzle wtih yogurt sauce. Serve immediately.",
    ],
    picture:
      "https://cdn.pixabay.com/photo/2019/03/01/15/14/roll-mops-4028046_1280.jpg",
  },
  {
    name: "Hoppel Poppel (Farmers Breakfast)",
    ingredients: [
      "leftover cooked meat",
      "onions, chopped",
      "tbsp butter",
      "leftover boiled potatoes",
      "salt and pepper",
      "eggs",
    ],
    quantity: [1, 1, 4, "1.5", "", 7],
    unitMeasure: ["lb", "", "", "lb", "", ""],
    portions: 4,
    directions: [
      "Cut potatoes into slices.",
      "Fry the onions in 2 tbsp butter or oil. Once translucent, add the meat that has been thinly cut into strips.",
      "Add remaining 2 tbsp butter or oil and the potatoes.",
      "Continue frying till potatoes are golden brown.",
      "Season with salt and pepper.",
      "Mix the eggs and pour over the meat and potatoes. Carefully stir until eggs are set",
    ],
    picture:
      "https://image.essen-und-trinken.de/11913842/t/Y1/v8/w960/r1/-/hoppel-poppel-b01de539ca3f49c9778ff946186b4793-fjt2011050861-jpg--4528-.jpg",
  },
];
const mexican = [
  {
    cuisine: "Mexican",
    intro: "Mexican cuisine is bla bla bla...",
    name: "Lemon sole with chipotle & chilli recado",
    ingredients: [
      "lemoon sole",
      "lime",
      "cloves of garlic",
      "dried chipotle chillies",
      "dried ancho chillies",
      "ripe cherry tomatoes",
      "Lebanese cucumber",
      "ripe avocado",
    ],
    quantity: [4, "", 4, 2, 2, 14, 1, 1],
    unitMeasure: ["", "", "", "", "", "", "", ""],
    portions: 4,
    directions: [
      "Preheat the oven to 180ºC/gas 4.",
      "To make the recado, place the unpeeled garlic in a small roasting tin and roast for 15 to 20 minutes, or until the cloves are soft. Transfer to a plate, allow to cool, then remove the skins.",
      "Place the chipotle and ancho chillies in a small bowl. Pour over boiling water to just cover and leave for 15 minutes to soak. Drain in a colander, reserving the liquid.",
      "Place the chillies, garlic, oregano and a large pinch of sea salt in a food processor and blend to a paste. Add the lime juice and 4 tablespoons of the reserved liquid and blitz to combine. Transfer to a non-reactive bowl.",
      "Place the fish in the marinade, cover with clingfilm and refrigerate for 30 minutes.",
      "For the salad, halve the tomatoes and slice the cucumber and spring onions. Halve, destone and roughly chop the avocado. Combine in a bowl with 3 tablespoons of oil and the lime juice. Season well.",
      "Preheat a barbecue or cast-iron griddle pan to a medium heat. Remove the fish from the refrigerator and cook, turning once, for about 3 minutes each side, occasionally adding some more marinade with a brush during cooking.",
      "Divide the fish among plates and serve with the avocado salad and freshly squeezed lime wedges.",
    ],
    picture:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/4clzeE-taZdBLJJ9sO5b3_.jpg?tr=w-800,h-1066",
  },
  {
    name: "Mega veggie nachos",
    ingredients: [
      "mixed-colour peppers",
      "fresh red chilli",
      "ripe tomatoes, on the vine",
      "spring onions",
      "bunch of fresh coriander",
      "limes",
      "tortillas",
      "ripe avocado",
      "feta cheese",
      "cumin seeds",
      "chipotle Tabasco sauce",
    ],
    quantity: [2, 1, 3, 6, 1, 2, 4, 1, 20, "", ""],
    unitMeasure: ["", "", "", "", "", "", "", "", "", "", ""],
    portions: 4,
    directions: [
      "Place the oven on to 180ºC/350ºF/gas 4.",
      "Place a griddle pan over a high heat and cook the whole peppers, chilli, tomatoes and trimmed spring onions until soft and charred.",
      "Put the peppers and chilli in a bowl, cover with clingfilm and set aside for 5 minutes.",
      "Dice the tomatoes and spring onions, then add to another bowl. Peel, deseed and dice the peppers and chillies, then add to the tomatoes and spring onions.",
      "Pick in a few coriander leaves, season, then mix in a good squeeze of lime juice and a drizzle of oil. Wipe the griddle pan and return to the heat.",
      "Cut the tortillas into wedges and arrange over two baking sheets. Bake in the oven for 5 minutes, or until golden.",
      "Place a large frying pan over a high heat and toast the cumin seeds for a few seconds. Add the Tabasco sauce and beans and cook for a few minutes, or until thick, stirring occasionally",
      "Peel, destone and slice the avocado into wedges, then drizzle with the remaining lime juice.",
    ],
    picture:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/46426621.jpg?tr=w-800,h-1066",
  },
  {
    name: "Shrimp & black bean quesadillas",
    ingredients: [
      "large red praawns",
      "tbsp smoked paprika",
      "vegetable oil",
      "mature cheddar cheese",
      "flour tortillas",
      "tbsp pickled jalapenos",
      "a few sprigs of fresh coriander",
    ],
    quantity: [200, 1, "", 250, 4, "4", ""],
    unitMeasure: ["g", "", "", "g", "", "", ""],
    portions: 3,
    directions: [
      "In a small bowl, toss the prawns with the smoked paprika and a little sea salt and black pepper. Heat a small frying pan with 1 teaspoon of the oil. Sear the prawns for 1 minute each side. Remove, let cool and halve lengthways. Set aside.",
      "Grate the cheese and spread half of it over two tortillas. Drain the beans and roughly chop the jalapeños, then sprinkle over, along with the prawns. Finely chop most of the coriander (reserving some leaves to finish), then divide between the tortillas, cover with the remaining cheese and top with the other tortillas.",
      "Put two frying pans over a low-medium heat and add 1 teaspoon of oil to each pan. Brown the tortillas on one side for 3 to 4 minutes, until the cheese is melted and golden, taking care not to let them burn. Turn them over and cook for 3 minutes. If the pan is looking a little dry, add another tiny drizzle of vegetable oil.",
      "Once the cheese has melted, remove the quesadillas from the pan and cut each one into six triangles. Serve straight away, topped with a dollop of soured cream and salsa, the pickled jalapeños and the remaining coriander leaves.",
    ],
    picture:
      "https://img.jamieoliver.com/jamieoliver/recipe-database/5NNweMcpK-099-lYx3P2t_.jpg?tr=w-800,h-1066",
  },
];

// restaurant data

const mexico = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "./src.images/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "Lorem50",
    imageUrl: "./src.images/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "Lorem50",
    imageUrl: "./src.images/Tacoriño .jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];

const greece = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "./src.images/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "Lorem50",
    imageUrl: "./src.images/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "Lorem50",
    imageUrl: "./src.images/Tacoriño .jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];

const germany = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "./src.images/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "Lorem50",
    imageUrl: "./src.images/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "Lorem50",
    imageUrl: "./src.images/Tacoriño .jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];

const italy = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "./src.images/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "Lorem50",
    imageUrl: "./src.images/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "Lorem50",
    imageUrl: "./src.images/Tacoriño .jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];

const syria = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "./src.images/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "Lorem50",
    imageUrl: "./src.images/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "Lorem50",
    imageUrl: "./src.images/Tacoriño .jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];

//navigation logic

////navbar
let inOrOut = "";
let country = "";

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
  if (event.target.className === "nav-home") {
    window.location.href = "./index.html";
  } else {
    inOrOut = event.target.className;
    console.log(inOrOut);
    mainRecipes.classList.add("not-visible");
    mainRestaurant.classList.add("not-visible");
    mainHome.classList.remove("not-visible");
    window.location.href = "./index.html#country-selection";
    // countrySection.scrollIntoView({behavior: 'smooth'});
  }
});

//getting the nav element
const navBar = document.querySelector("nav");

//adding logo to navBar
const logo = document.createElement("div");
logo.classList.add("logo");
navBar.appendChild(logo);
logo.addEventListener("click", function (event) { window.location.href = "./index.html" });

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

////entry page
const countrySection = document.getElementById("country-selection");
const countries = document.querySelectorAll(".country-card > a");
const inOut = document.getElementById("in-out-selection");

function sendOption(a, b) {
  console.log(a, b);
  mainHome.classList.add("not-visible");
  a === "in"
    ? mainRecipes.classList.remove("not-visible")
    : mainRestaurant.classList.remove("not-visible");
}

inOut.addEventListener("click", (event) => {
  inOrOut = event.target.className;
  countrySection.scrollIntoView({ behavior: "smooth" });
});

let cuisineSelection = italian;
let restaurantSelection = mexico;

function getRightArray(country) {
  switch (country) {
    case "italian":
      console.log(country);
      cuisineSelection = italian;
      restaurantSelection = italy;
      break;
    case "greek":
      cuisineSelection = greek;
      restaurantSelection = greece;
      break;
    case "german":
      cuisineSelection = german;
      restaurantSelection = germany;
      break;
    case "syrian":
      cuisineSelection = syrian;
      restaurantSelection = syria;
      break;
    case "mexican":
      cuisineSelection = mexican;
      restaurantSelection = mexico;
  }
}

countrySection.addEventListener("click", (event) => {
  country = event.target.className;
  countryName = country.split(" ").pop();
  sendOption(inOrOut, countryName);
  getRightArray(countryName);
  updatePageTitleAndIntro(cuisineSelection);
  updateMainImageAndTitle(recipeIndex);
  updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
  updateCookDirections(cuisineSelection, recipeIndex);
  updateSecondaryImageAndTitle(recipeIndex);
  updateRestaurants(restaurantSelection, restaurantsIndex);
  if (inOrOut === 'in') {
    window.scrollTo({
      top: mainRecipes.offsetTop,
      left: 0,
      // behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: mainRestaurant.offsetTop,
      left: 0,
      //   behavior: "smooth",
    });
  }
});

// recipe logic
// let cuisineSelection = italian;
// setting the main recipe randomly on pageload
let recipeIndex = parseInt(Math.random() * (cuisineSelection.length - 0) + 0);
let recipeName = cuisineSelection[recipeIndex].name;
let portionSelection = cuisineSelection[recipeIndex].portions;

const portionDiv = document.body.querySelector("#portions");
const portionsButtons = portionDiv.querySelectorAll(".portions-button");

function updateDefaultButtonQuantity() {
  const portionDiv = document.body.querySelector("#portions");
  const portionsButtons = portionDiv.querySelectorAll(".portions-button");
  portionsButtons.forEach((item) => {
    // adding the class '.selected-button' on page load to the default portion size
    if (item.innerHTML == portionSelection) {
      item.classList.add("selected-button");
    } else {
      item.classList.remove("selected-button");
    }
  });
}

// cycling through each portion button
portionsButtons.forEach((item) => {
  // adding the class '.selected-button' on page load to the default portion size
  if (item.innerHTML == portionSelection) {
    item.classList.add("selected-button");
  }
  //  added event listener to lokk for clik for all buttons with class '.portions-button'
  item.addEventListener("click", () => {
    // resetting the edit button in case 'done' was already selected
    document.body.querySelector(".done").classList.add("not-visible");
    document.body.querySelector(".edit").classList.remove("not-visible");
    // retriving user selection for number of portion after click
    portionSelection = parseInt(item.innerHTML);
    // running function to update ingredient list quantity
    updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
    // removing the class '.selected-button' from every '.portions-button'
    portionsButtons.forEach((item) => {
      item.classList.remove("selected-button");
    });
    // adding the class '.selected-button' only to the button clicked
    item.classList.add("selected-button");

    const personalizedPortionsIndicator = document.body.querySelector(
      ".personalized-portions"
    );
    personalizedPortionsIndicator.classList.add("not-visible");
    personalizedPortionsIndicator.classList.remove("selected-button");
    personalizedPortionsIndicator.innerHTML = "";
  });
});

// refresh the index of the recipe object inside the recipes array
// searching a match in every object.name with the recipe name
function UpdateRecipeIndex(recipeName) {
  return cuisineSelection.findIndex((x) => x.name === recipeName);
}

// creating strings for recipe ingredient list
function updateIngredientList(cuisineSelection, recipeIndex, portionSelection) {
  const ingredientListDiv = document.body.querySelector(
    "#ingredients-container"
  );
  // resetting current ingredient list content
  ingredientListDiv.innerHTML = "";
  for (let i = 0; i < cuisineSelection[recipeIndex].ingredients.length; i++) {
    let updatedQuantity;
    // excluding quantity update for non-numeric quantity i.e. black pepper
    if (typeof cuisineSelection[recipeIndex].quantity[i] != "number") {
      updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
      // setting minimun quantity to 1 so the parseInt rounding will never output 0
    } else if (
      parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      ) === 0
    ) {
      updatedQuantity = 1;
    } else {
      updatedQuantity = parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      );
    }

    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");
    quantityDiv.innerHTML = updatedQuantity;
    ingredientListDiv.appendChild(quantityDiv);

    let updatedUnitMeasure = cuisineSelection[recipeIndex].unitMeasure[i];
    let updatedIngredient = cuisineSelection[recipeIndex].ingredients[i];

    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredient-div");
    if (updatedUnitMeasure == "") {
      ingredientDiv.innerHTML = `${updatedIngredient}`;
    } else {
      ingredientDiv.innerHTML = `${updatedUnitMeasure} of ${updatedIngredient}`;
    }
    ingredientListDiv.appendChild(ingredientDiv);
  }
}

// function to add input values to quantity fields in the ingredient list
function updateIngredientListEditable(
  cuisineSelection,
  recipeIndex,
  portionSelection
) {
  const ingredientListDiv = document.body.querySelector(
    "#ingredients-container"
  );
  // resetting current ingredient list content
  ingredientListDiv.innerHTML = "";
  for (let i = 0; i < cuisineSelection[recipeIndex].ingredients.length; i++) {
    let updatedQuantity;
    // excluding quantity update for non-numeric quantity i.e. black pepper
    if (typeof cuisineSelection[recipeIndex].quantity[i] != "number") {
      updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
      // setting minimun quantity to 1 so the parseInt rounding will never output 0
    } else if (
      parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      ) === 0
    ) {
      updatedQuantity = 1;
    } else {
      updatedQuantity = parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      );
    }

    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");
    ingredientListDiv.appendChild(quantityDiv);
    // DIFFERENT PART FROM updateIngredientList()
    // add input.type number and placeholder value to all ingredients quantityDiv
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    // if the quantity value is not a number set the placeholder value to '' and disable the input
    if (typeof updatedQuantity != "number") {
      quantityInput.placeholder = "";
      quantityInput.disabled = true;
    } else {
      quantityInput.placeholder = parseInt(updatedQuantity);
    }
    quantityInput.classList.add("quantity");
    quantityDiv.appendChild(quantityInput);
    // END OF DIFFERENCE FROM updateIngredientList()

    let updatedUnitMeasure = cuisineSelection[recipeIndex].unitMeasure[i];
    let updatedIngredient = cuisineSelection[recipeIndex].ingredients[i];

    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredient-div");
    if (updatedUnitMeasure == "") {
      ingredientDiv.innerHTML = `${updatedIngredient}`;
    } else {
      ingredientDiv.innerHTML = `${updatedUnitMeasure} of ${updatedIngredient}`;
    }
    ingredientListDiv.appendChild(ingredientDiv);
  }
}

function updateCookDirections(cuisineSelection, recipeIndex) {
  const cookingDirectionsDiv = document.body.querySelector("#directions");
  // resetting current cooking directions content
  cookingDirectionsDiv.innerHTML = "";
  for (let i = 0; i < cuisineSelection[recipeIndex].directions.length; i++) {
    const pItem = document.createElement("p");
    pItem.classList.add("individual-step");
    pItem.innerHTML = cuisineSelection[recipeIndex].directions[i];
    cookingDirectionsDiv.appendChild(pItem);
  }
}

function updatePageTitleAndIntro(cuisineSelection) {
  const pageTitle = document.body.querySelector(".country-title");
  const pageIntro = document.body.querySelector(".country-description");
  // using a fix index of 0 since the name of the cuisine and the intro are only present in the first recipe of every object
  pageTitle.innerHTML = cuisineSelection[0].cuisine;
  pageIntro.innerHTML = cuisineSelection[0].intro;
}

function updateMainImageAndTitle(recipeIndex) {
  const ingredientListDiv = document.body.querySelector("#recipe-main");
  const mainImage = ingredientListDiv.querySelector("img");
  mainImage.src = cuisineSelection[recipeIndex].picture;
  mainImage.alt = cuisineSelection[recipeIndex].name;
  const mainTitle = ingredientListDiv.querySelector("#recipe-main-title");
  mainTitle.innerHTML = cuisineSelection[recipeIndex].name;
}

function updateSecondaryImageAndTitle(recipeIndex) {
  const moreRecipes = document.body.querySelector("#more-recipes");
  const alternativeRecipes = moreRecipes.querySelectorAll(
    ".alternative-recipes"
  );
  let i = 1;
  alternativeRecipes.forEach((item) => {
    item.querySelector("img").src =
      cuisineSelection[(recipeIndex + i) % cuisineSelection.length].picture;
    item.querySelector("h3").innerHTML =
      cuisineSelection[(recipeIndex + i) % cuisineSelection.length].name;
    i++;
  });
}

const moreRecipes = document.body.querySelector("#more-recipes");
const alternativeRecipes = moreRecipes.querySelectorAll(".alternative-recipes");

//  added event listener to look for clik for all divs with class '.alternative-recipes'
alternativeRecipes.forEach((item) => {
  item.addEventListener("click", () => {
    // retriving user selection for the recipe name after click
    recipeName = item.querySelector("h3").innerHTML;
    // running function to update the index of the recipe in recipes array
    recipeIndex = UpdateRecipeIndex(recipeName);
    // updating secondary and main section
    updateSecondaryImageAndTitle(recipeIndex);
    updateMainImageAndTitle(recipeIndex);
    // !!!REMEMBER TO COME BACK TO THIS LINE!!!
    portionSelection = cuisineSelection[recipeIndex].portions;
    updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
    updateCookDirections(cuisineSelection, recipeIndex);
    updateDefaultButtonQuantity();
    // scroll the window to the beginning of recipe-main div
    const ingredientListDiv = document.body.querySelector("#recipe-main");
    window.scrollTo({
      top: ingredientListDiv.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  });
});

document.body.querySelector(".edit").addEventListener("click", () => {
  document.body.querySelector(".edit").classList.add("not-visible");
  document.body
    .querySelector(".personalized-portions")
    .classList.add("not-visible");
  document.body
    .querySelector(".personalized-portions")
    .classList.remove("selected-button");
  document.body.querySelector(".done").classList.remove("not-visible");
  updateIngredientListEditable(cuisineSelection, recipeIndex, portionSelection);
});

document.body.querySelector(".done").addEventListener("click", () => {
  document.body.querySelector(".done").classList.add("not-visible");
  document.body.querySelector(".edit").classList.remove("not-visible");

  let personalizedPortion = portionSelection;
  document.body.querySelectorAll(".quantity").forEach((item) => {
    if (item.value != "") {
      personalizedPortion = (
        (parseInt(item.value) * portionSelection) /
        parseInt(item.placeholder)
      ).toFixed(1);
    }
  });

  if (personalizedPortion == portionSelection) {
    updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
  } else {
    updateIngredientList(cuisineSelection, recipeIndex, personalizedPortion);
    const personalizedPortionsIndicator = document.body.querySelector(
      ".personalized-portions"
    );
    personalizedPortionsIndicator.classList.remove("not-visible");
    personalizedPortionsIndicator.classList.add("selected-button");
    personalizedPortionsIndicator.innerHTML = personalizedPortion;

    const allPortionsButtons = document.body.querySelectorAll(
      ".portions-button"
    );
    allPortionsButtons.forEach((item) => {
      item.classList.remove("selected-button");
    });
  }
});

let mailAddress;
let mailSubject;
let mailBody;

// creating strings for mail ingredient list
function mailIngredientList(cuisineSelection, recipeIndex, portionSelection) {
  let mailIngredient = "Ingredient list: ";
  for (let i = 0; i < cuisineSelection[recipeIndex].ingredients.length; i++) {
    let updatedQuantity;
    // excluding quantity update for non-numeric quantity i.e. black pepper
    if (typeof cuisineSelection[recipeIndex].quantity[i] != "number") {
      updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
      // setting minimun quantity to 1 so the parseInt rounding will never output 0
    } else if (
      parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      ) === 0
    ) {
      updatedQuantity = 1;
    } else {
      updatedQuantity = parseInt(
        (cuisineSelection[recipeIndex].quantity[i] * portionSelection) /
        cuisineSelection[recipeIndex].portions
      );
    }

    let updatedUnitMeasure = cuisineSelection[recipeIndex].unitMeasure[i];
    let updatedIngredient = cuisineSelection[recipeIndex].ingredients[i];

    if (updatedQuantity === "") {
      mailIngredient += `${updatedIngredient} - `;
    } else if (updatedUnitMeasure == "") {
      mailIngredient += `${updatedQuantity} ${updatedIngredient} - `;
    } else {
      mailIngredient += `${updatedQuantity} ${updatedUnitMeasure} of ${updatedIngredient} - `;
    }
  }
  return mailIngredient.slice(0, -3);
}

function mailCookDirections(cuisineSelection, recipeIndex) {
  let mailSteps = "------ Recipe steps recap: ";
  for (let i = 0; i < cuisineSelection[recipeIndex].directions.length; i++) {
    mailSteps += `(${i + 1}) ${cuisineSelection[recipeIndex].directions[i]}. `;
  }
  return mailSteps;
}

const emailButton = document.body.querySelector("#email");
emailButton.addEventListener("click", () => {
  mailAddress = document.querySelector(".email-address").value;
  mailSubject = recipeName.charAt(0).toUpperCase() + recipeName.slice(1);
  mailBody = `${mailIngredientList(
    cuisineSelection,
    recipeIndex,
    portionSelection
  )}. ${mailCookDirections(cuisineSelection, recipeIndex)}`;
  sendEmail();
});

let Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, n)
          : (t = null),
      t
    );
  },
};

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "wild.foodloops@gmail.com",
    Password: "jJ#9jvaWH6gJbUdM5WAPu*g6K9wiCLZn",
    To: mailAddress,
    From: "wild.foodloops@gmail.com",
    Subject: mailSubject,
    Body: mailBody,
  }).then(alert("mail sent successfully"));
}

/* updatePageTitleAndIntro(cuisineSelection)
updateMainImageAndTitle(recipeIndex);
updateIngredientList(cuisineSelection, recipeIndex, portionSelection);
updateCookDirections(cuisineSelection, recipeIndex);
updateSecondaryImageAndTitle(recipeIndex); */

// setting the main recipe randomly on pageload
let restaurantsIndex = parseInt(
  Math.random() * (restaurantSelection.length - 0) + 0
);
let restaurantsName = restaurantSelection[restaurantsIndex].name;

function UpdaterestaurantsIndex(restaurantsName) {
  return restaurantSelection.findIndex((x) => x.name === restaurantsName);
}

function updateRestaurants(restaurantSelection, restaurantsIndex) {
  // Update Main
  document.querySelector(".restaurant-title").innerHTML =
    restaurantSelection[restaurantsIndex].name;
  document.querySelector("#img-restaurant").src =
    restaurantSelection[restaurantsIndex].imageUrl;
  document.querySelector("#img-restaurant").alt =
    restaurantSelection[restaurantsIndex].name;
  document.querySelector(".restaurant-description").innerHTML =
    restaurantSelection[restaurantsIndex].about;
  document.querySelector("#gmap_canvas1").src =
    restaurantSelection[restaurantsIndex].mapUrl;
  document.querySelector("#button-link").href =
    restaurantSelection[restaurantsIndex].buttonUrl;

  // Update Secondary
  const secondaryImages = document.querySelectorAll(".small-photo");
  let i = 1;
  secondaryImages.forEach((image) => {
    image.src =
      restaurantSelection[
        (restaurantsIndex + i) % restaurantSelection.length
      ].imageUrl;
    image.alt =
      restaurantSelection[(restaurantsIndex + i) % restaurantSelection.length].name;
    i++;
  });
  const secondaryTitle = document.querySelectorAll(".small-title");
  let g = 1;
  secondaryTitle.forEach((title) => {
    title.innerHTML =
      restaurantSelection[(restaurantsIndex + g) % restaurantSelection.length].name;
    g++;
  });
}

const moreRestaurants = document.body.querySelector("#restaurant-secondary");
const alternativeRestaurants = moreRestaurants.querySelectorAll(
  ".alternative-restaurants"
);

alternativeRestaurants.forEach((item) => {
  item.addEventListener("click", () => {
    // retriving user selection for the recipe name after click
    restaurantsName = item.querySelector("h3").innerHTML;
    // running function to update the index of the recipe in recipes array
    restaurantsIndex = UpdaterestaurantsIndex(restaurantsName);
    updateRestaurants(restaurantSelection, restaurantsIndex);
    // scroll the window to the beginning of recipe-main div
    const restaurantDiv = document.body.querySelector("#restaurant-main");
    window.scrollTo({
      top: restaurantDiv.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  });
});