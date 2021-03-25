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
    intro: "Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity, and later spread around the world together with waves of Italian diaspora. Significant changes occurred with the colonization of the Americas and the introduction of potatoes, tomatoes, capsicums, maize and sugar beet - the latter introduced in quantity in the 18th century. Italian cuisine is known for its regional diversity, especially between the north and the south of the Italian peninsula",
    name: "Spaghetti alla Carbonara",
    ingredients: ["Spaghetti", "Egg Yolks", "Pancetta", "Parmesan cheese", "Salt", "Pepper",],
    quantity: [500, 8, 150, 40, "", "",],
    unitMeasure: ["g", "g", "g", "g", "", "",],
    portions: 4,
    directions: [
      "Bring large pot of generously salted water to a boil. Add spaghetti and cook until al dente, approx. 7–9 min, or according to package instructions. Reserve about 120 ml/0.5 cup pasta water, and drain. In a large serving bowl, whisk together egg yolks, a few grinds of black pepper, and cheese.",
      "Sauté cubed pancetta until crisp and fat is rendered.",
      "Toss pasta in skillet with pancetta until it's coated in its fat.",
      "Transfer pasta along with half of the reserved pasta water to serving bowl with egg mixture, mixing everything together quickly so that the eggs don’t scramble. Toss until the mixture turns creamy and thick, adding more pasta water as needed.",
      "Season to taste with salt and black pepper and serve garnished with more cheese.",
    ],
    picture:
      "img/italian-aliki-1.jpg",
  },
  {
    name: "Lasagne Bolognese",
    ingredients: [
      "Extra virgin olive oil",
      "small onion, chopped",
      "shallot, minced",
      "carrot, chopped",
      "prosciutto or bacon, cubed",
      "minced pork",
      "minced beef",
      "ground nutmeg",
      "ground cinnamon",
      "red wine",
      "tomatoes",
      "lasagne sheets",
      "Parmesan cheese",
    ],
    quantity: [2, 1, 1, 1, 100, 300, 300, 1, 1, 1, 600, 300, 200,],
    unitMeasure: ["", "", "", "", "g", "g", "g", "tsp", "tsp", "ml", "g", "g", "g",],
    portions: 4,
    directions: [
      "Prepare Bolognesa sauce: In a saucepan add oil, onion, shallots and carrot and prosciutto or bacon. Allow to cook for a few minutes over medium heat so that the onion becomes translucent and the bacon releases some of its fat.",
      "Add the pork and beef mince and season with nutmeg, cinnamon and salt. Cook the mince over medium-high heat, stirring often until browned, about 10 minutes. Pour in the red wine, then increase the heat and let simmer for a few minutes for the alcohol to evaporate. Add the tomatoes (or passata) and mix well. Bring to a simmer, cover, reduce heat to low and simmer gently for 1 1/2 to 2 hours. Check the sauce occasionally and stir from time to time. Adjust seasoning to taste. Remove sauce from heat and set aside.",
      "Assemble and Bake. If using dried lasagne sheets, cook by following the cooking time on the packet. If you use fresh ones, dip each sheet in salted boiling water for 1 minute. In both cases, drain the lasagne sheets and pass quickly under the tap to stop the cooking. Lay them on a tea towel and pat dry.",
      "Preheat oven to 180 C / Gas 4.", "Pour a ladleful each of the white sauce and the Bolognese sauce over the bottom of a 20x30cm baking dish. Lay 3 to 4 lasagne sheets side by side and cover with 1/3 or 1/4 of remaining white sauce (depending on how many layers you want to do); then cover the sheets with the same amount of Bolognese sauce. Sprinkle with Parmesan cheese, then cover with lasagne sheets. Continue layers, finishing with white sauce and a good handful of grated Parmesan cheese.", "Bake for 30 to 40 minutes or until the pasta is fully cooked and the top is golden brown. Remove from oven, then let stand for a few minutes before slicing and serving.",
    ],
    picture:
      "img/italian3.jpg",
  },
  {
    name: "Classic Tiramisu",
    ingredients: ["egg yolks", "granulated sugar", "heavy cream", "mascarpone", "espresso", "rum", "cocoa powder", "ladyfingers", "bittersweet chocolate",],
    quantity: [4, 100, 1, 227, 2, 2, 2, 200, 2,],
    unitMeasure: ["", "g", "", "", "", "", "", "g", "g",],
    portions: 4,
    directions: [
      "Using an electric mixer in a medium bowl, whip together egg yolks and 1/4 cup/50 grams sugar until very pale yellow and about tripled in volume. A slight ribbon should fall from the beaters (or whisk attachment) when lifted from the bowl. Transfer mixture to a large bowl, wiping out the medium bowl used to whip the yolks and set aside.",
      "In the medium bowl, whip cream and remaining 1/4 cup and 50 grams sugar until it creates soft-medium peaks. Add mascarpone and continue to whip until it creates a soft, spreadable mixture with medium peaks. Gently fold the mascarpone mixture into the sweetened egg yolks until combined.",
      "Combine espresso and rum in a shallow bowl and set aside.",
      "Using a sifter, dust the bottom of a 2-quart baking dish (an 8x8-inch dish, or a 9-inch round cake pan would also work here) with 1 tablespoon cocoa powder.",
      "Working one at a time, quickly dip each ladyfinger into the espresso mixture -- they are quite porous and will fall apart if left in the liquid too long -- and place them rounded side up at the bottom of the baking dish. Repeat, using half the ladyfingers, until you’ve got an even layer, breaking the ladyfingers in half as needed to fill in any obvious gaps (a little space in between is O.K.). Spread half the mascarpone mixture onto the ladyfingers in one even layer. Repeat with remaining espresso-dipped ladyfingers and mascarpone mixture", "Dust top layer with remaining tablespoon of cocoa powder. Top with shaved or finely grated chocolate, if desired.", "Cover with plastic wrap and let chill in the refrigerator for at least 4 hours (if you can wait 24 hours, all the better) before slicing or scooping to serve.",
    ],
    picture:
      "img/tiramisu-italian.jpg",
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
      "vinegar, or white wine",
      "granulated sugar",
      "salt and pepper",
      "basil",
      "thyme, fresh",
      "spring onion",
      "feta cheese",
    ],
    quantity: [1, 1, 1, 1, 1, 1, "", 0.5, 100],
    unitMeasure: ["", "", "tsp", "", "pinch", "tbsp", "", "", "g"],
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
      "img/dakos-2948661_1920.jpg",
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
      "img/greek3.jpg",
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
    portions: 4,
    directions: [
      "To prepare this Greek shrimp saganaki recipe start by peeling and cleaning the shrimps.",
      "Continue preparing the sauce. To prepare the sauce for this shrimp saganaki recipe, dice the fresh tomatoes in small cubes and let them strain in a colander, so that no excess water is added to the sauce.",
      "Begin with the sauce for the shrimp saganaki. Heat the olive oil over medium-high heat, add the chopped onion and sauté for 1 minute. Stir in the chopped garlic, chilli peppers and season with salt and and pepper. Sauté all the ingredients together for 1 more minute. Add the chopped tomatoes, cover with the lid, bring to the boil and let simmer for approx. 5 minutes, until the sauce thickens a little bit.",
      "In the meantime sauté the shrimps for this shrimp saganaki recipe. Season the shrimps with salt and pepper on both sides. Heat a large saucepan over medium heat and add 3-4 tbsps olive oil. Add the shrimps, sauté for 1 minute and deglaze with the ouzo.",
      "Pour the sauce in the saucepan along with the shrimps and stir. Top the shrimp saganaki with the crumbled or cubed feta cheese, place the lid on and cook for 2 more minutes, until the feta slightly melts.",
      "Garnish the shrimp saganaki with chopped parsley or dill and serve while still hot. Enjoy this traditional Greek shrimp saganaki recipe with a cold glass of ouzo!",
    ],
    picture:
      "img/greek-aliki1.jpg",
  },
];
const syrian = [
  {
    cuisine: "Syrian",
    intro: "Syrian cuisine mainly uses eggplant, zucchini, garlic, meat (mostly from lamb and sheep), sesame seeds, rice, chickpeas, fava beans, lentils, cabbage, cauliflower, vine leaves, pickled turnips, cucumbers, tomatoes, olive oil, lemon juice, mint, pistachios, honey and fruits.At the beginning of the 21st century, selections of appetizers known as mezze are customarily served along with Arabic bread before the Syrian meal's main course, which is followed by coffee, with sweet confectioneries or fruits at will. Many recipes date from at least the 13th century.",
    name: "Grilled Aubergine With Beef Keema and Pine Nuts",
    ingredients: ['vegetable oil',
      'sticks of cinnamon',
      'cardamom pods',
      'cloves',
      'medium onions, chopped',
      'ginger, chopped',
      'garlic, chopped',
      'turmeric powder',
      'red chilli powder',
      'cumin powder',
      'cumin powder',
      'medium tomatoes, chopped',
      'garam masala powder',
      'beef, minced',
      'big aubergines',
      'crushed black pepper',
      'pine nuts',
      'bunch spring onions',
      'tomato',
      'green chillies, chopped',
      'coriander, chopped'],
    quantity: [4, 3, 4, 5, 2, 1, 1, 0.5, 0.5, 1, 2, 3, 0.5, 800, 2, 1, 200, 1, 1, 2, 2],
    unitMeasure: ['tbsp', '', '', '', '', 'tbps', 'tbsp', 'tsp', 'tsp', 'tsp', 'tbsp', '', 'tsp', 'g', '', 'tbsp', 'g', '', '', '', 'tsp'],
    portions: 4,
    directions: [
      "Heat the vegetable oil in a thick-bottomed saucepan. Add the cinnamon, cardamom and cloves, sauté for half a minute, then add the chopped onions and sauté over a medium heat, stirring occasionally, until golden brown.",
      "Add the chopped ginger and garlic, then stir well for a couple of minutes and add the turmeric, chilli, cumin and coriander powder and sauté for a further five minutes.",
      "Add the chopped tomato and garam masala, then stir and allow to simmer for 10-15 minutes, or until the oil separates from the masala.",
      "Add the mince and cook over a high heat for five minutes, stirring constantly. Lower the heat to a gentle simmer and leave covered for about 10 minutes.",
      "Remove the lid, turn up the heat and sauté for a further 10 minutes, stirring constantly until almost dry.",
      'Halve, season with pepper and then grill the aubergines for 4 minutes on each side.',
      'Serve the beef mince on top of the grilled aubergine, then top with some yoghurt and a mix of all the chopped ingredients in the pine nut kachumber salad.'
    ],
    picture:
      "img/Syrian Food 1- Beef Mince .jpg",
  },
  {
    name: "Harak osbao – lentils and pasta with tamarind, sumac and pomegranate",
    ingredients: [
      "tamarind, soaked in 200ml boiling water",
      "fettuccini, broken up roughly",
      "olive oil",
      "red onions, thinly sliced",
      "brown lentils",
      'chicken stock',
      'pomegranate molasses',
      'garlic cloves, crushed',
      'coriander, roughly chopped',
      'parsley, roughly chopped',
      'pomegranate seeds',
      'sumac',
      'lemons, cut into wedges',
      'flaky sea salt',
      'black pepper'
    ],
    quantity: [20, 125, 30, 175, 175, 0.75, 1000, 3, 15, 10, 45, 1, 1, '', ''],
    unitMeasure: ['g', 'g', 'ml', 'g', 'g', 'ml', 'tbsp', '', 'g', 'g', 'g', 'tsp', '', '', ''],
    portions: 4,
    directions: [
      "Mix the tamarind with the water well to separate the pips. Strain the liquid into a small bowl, discarding the pips, and set aside.",
      "Place a large saucepan on a medium-high heat and once hot, add the broken-up fettucini. Toast for 1-2 minutes until the pasta starts to brown, then remove from the pan and set aside.",
      "Pour 2 tablespoons of oil into the pan and return to a medium-high heat. Add the onion and fry for 8 minutes, stirring frequently until golden and soft. Remove from the pan and set aside.",
      "Add the chicken stock to the pan and place on a high heat. Once boiling, add the lentils, reduce the heat to medium and cook for 20 minutes or until soft.",
      'Add the toasted fettucine, tamarind water, 150ml water, pomegranate molasses, 4 teaspoons of salt and lots of pepper.',
      'Continue to cook for 8-9 minutes until the pasta is soft and almost all of the liquid has been absorbed and set aside for 10 minutes. The liquid will continue to be absorbed, but the lentils and pasta should remain moist.',
      'Place a small saucepan on a medium-high heat with 2 tablespoons of oil. Add the garlic and fry for 1-2 minutes, until just golden brown. Remove from the heat and stir in the coriander.',
      'Spoon the lentils and pasta into a large, shallow serving bowl. Top with the garlic and coriander, parsley, pomegranate seeds and sumac, and serve with the lemon wedges.'
    ],
    picture:
      "img/Syrian Food 3 - Sarak Osbao .jpg",
  },
  {
    name: "Safiha (Mini Meat Pies)",
    ingredients: ["packet puff pastry sheets, thawed",
      "ground lamp or beef", "small onion, finely chopped",
      "tahini", "pomegranate molasses", 'pine nuts (optional)',
      'Ground black pepper to taste', 'salt'],
    quantity: [1, 1, 1, 3, 3, 0.25, '', 0.5],
    unitMeasure: ['', 'pound', '', 'tbsp', 'tbsp', 'cup', '', 'tsp'],
    portions: 3,
    directions: [
      "Preheat oven to 400F.",
      "Saute the onion until translucent then add the meat and brown. Add salt, pepper, tahini, and pomegranate molasses and cook for two minutes.",
      "Meanwhile spread the pastry sheet until it is 9″*12″ and cut into 12 squares.",
      "Put the squares in a 12 muffin pan (there should be 24 pieces of dough that you can make in 2 patches since puff pastry comes with two sheets).",
      "Distribute meat mixture over the dough, and garnish each with 2-3 pine nuts.",
      "Bake in the oven for 10-12 minutes, until edges are pink",
      "Bake and serve. Safiha is best when served immediately."
    ],
    picture:
      "img/Syrian Food 2- Mini Meat .jpg",
  },
];
const german = [
  {
    cuisine: "German",
    intro: "The cuisine of Germany (German: Deutsche Küche) is made up of many different local or regional cuisines, reflecting the country's federal history. Germany itself is part of a larger cultural region, Central Europe, sharing many traditions with neighbouring countries such as Poland and the Czech Republic. Southern regions, like Bavaria and Swabia, share dishes with Austrian and parts of Swiss cuisine.",
    name: "Beef Rouladen",
    ingredients: [
      "top round",
      "lean bacon",
      "onion",
      "garlic",
      "butter",
      "mustard, salt, pepper, cornstratch",
      "water",
    ],
    quantity: [6, 3, 1, 3, 2, "", 1],
    unitMeasure: ["slices", "slices", "", "", "tbsp", "", "cups"],
    portions: 4,
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
      "img/german12.jpg",
  },
  {
    name: "Herring with Yogurt Sauce and Potatoes",
    ingredients: [
      "pickled herring",
      "potatoes",
      "butter",
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
    unitMeasure: ["", "g", "tbsp", "", "", "", "", "", "g", "g", ""],
    portions: 4,
    directions: [
      "For the herring: Peel potatoes, rinse and cook in boiling salted water for 25 minutes. Drain well.",
      "For the sauce: Rinse herbs and chop finely. Cut cucumber into slices. Peel onion and chop finely.",
      "Rinse and finely slice radishes. Whisk cream with yogurt, herbs, onions, radishes and cucumber and season with salt and pepper. Heat butter in a pan and heat potatoes for a few minutes. Arrange potatoes and herring on plates and drizzle wtih yogurt sauce. Serve immediately.",
    ],
    picture:
      "img/german4.jpg",
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
    unitMeasure: ["lb", "", "tbsp", "lb", "", ""],
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
    intro: "Mexican cuisine is a complex and ancient cuisine, with techniques and skills developed over thousands of years of history. It is created mostly with ingredients native to Mexico, as well as those brought over by the Spanish conquistadors, with some new influences since then. In addition to staples, such as corn and chile peppers, native ingredients include tomatoes, squashes, avocados, cocoa and vanilla, as well as ingredients not generally used in other cuisines, such as edible flowers, vegetables like huauzontle and papaloquelite, or small criollo avocados, whose skin is edible. Chocolate originated in Mexico and was prized by the Aztecs. It remains an important ingredient in Mexican cookery.",
    name: "Lemon sole with chipotle & chilli recado",
    ingredients: [
      "lemon sole",
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
      "img/mexican-alliki-2.jpg",
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
      "img/mexican-1-aliki.jpg",
  },
  {
    name: "Shrimp and black bean quesadillas",
    ingredients: [
      "large red prawns",
      "smoked paprika",
      "vegetable oil",
      "mature cheddar cheese",
      "flour tortillas",
      "pickled jalapenos",
      "a few sprigs of fresh coriander",
    ],
    quantity: [200, 1, "", 250, 4, 4, ""],
    unitMeasure: ["g", "tbsp", "", "g", "", "tbsp", ""],
    portions: 3,
    directions: [
      "In a small bowl, toss the prawns with the smoked paprika and a little sea salt and black pepper. Heat a small frying pan with 1 teaspoon of the oil. Sear the prawns for 1 minute each side. Remove, let cool and halve lengthways. Set aside.",
      "Grate the cheese and spread half of it over two tortillas. Drain the beans and roughly chop the jalapeños, then sprinkle over, along with the prawns. Finely chop most of the coriander (reserving some leaves to finish), then divide between the tortillas, cover with the remaining cheese and top with the other tortillas.",
      "Put two frying pans over a low-medium heat and add 1 teaspoon of oil to each pan. Brown the tortillas on one side for 3 to 4 minutes, until the cheese is melted and golden, taking care not to let them burn. Turn them over and cook for 3 minutes. If the pan is looking a little dry, add another tiny drizzle of vegetable oil.",
      "Once the cheese has melted, remove the quesadillas from the pan and cut each one into six triangles. Serve straight away, topped with a dollop of soured cream and salsa, the pickled jalapeños and the remaining coriander leaves.",
    ],
    picture:
      "img/Mexican food 3.jpg",
  },
];

// restaurant data

const mexico = [
  {
    country: "Mexico",
    name: "Maria Bonita",
    about:
      "Berlin‘s first authentic Mexican Bistro opened in 2009 and set the start of the Mexican Food–Revolution in Berlin. Ever since people enjoy traditionally prepared dishes, hand-made salsas and Margaritas just like in Mexico. So have a bite, close your eyes and take a little trip “south of the border.",
    imageUrl: "img/Maria Bonita.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=maria%20bonita%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.mariabonita.de/",
  },

  {
    country: "Mexico",
    name: "Zapata",
    about: "With dishes and delicious delicacies from the Latin American cuisine restaurant Zapata in Berlin cooks its guests. In addition, this restaurant also offers Mexican dishes. The restaurant is always open except on Sundays.",
    imageUrl: "img/Zapata.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=zapata%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://zapata-berlin.de/",
  },

  {
    country: "Mexico",
    name: "Tacoriño",
    about: "LOVE FOR TACOS! Experience a new taste sensation. We use only organic corn flour directly from Mexico. Our tortillas are naturally gluten and lactose free. They are freshly prepared in front of your eyes. We've made it our mission to create a new restaurant experience, with lots of good humor and modern Latin flair.",
    imageUrl: "img/Tacorino.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=tacori%C3%B1o%20restaurant%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tacorino.de/",
  },
];
const greece = [
  {
    country: "Greece",
    name: "Rises Delicacies",
    about:
      "Nice small greek bistro with homemade food, and a little shop with high quality products to buy and cook at home",
    imageUrl: "img/rises-greek.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Rises%20Delicacies%20berlin%20restaurant&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.facebook.com/RisesDelicacies/",
  },

  {
    country: "Greece",
    name: "Berkis",
    about: "One of the few places where you can get traditional souvlaki. TIP: try adding sauerkraut instead of Pommes",
    imageUrl: "img/souvlaki-greece.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Berkis%20berlin%20restaurant&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.berkis.de/",
  },

  {
    country: "Greece",
    name: "Aplo",
    about: " A bit pricey but also a nice place to get traditional souvlaki.",
    imageUrl: "img/aplo-greece.png",
    mapUrl:
      "https://maps.google.com/maps?q=Aplo%20berlin%20restaurant&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://aplofoods.com/",
  },
];
const germany = [
  {
    country: "Germany",
    name: "Zur letzten Instanz",
    about:
      "The restaurant „Zur letzten Instanz” is the eldest restaurant in Berlin and ranks among the sights of the capital. Its origin is in 1621, when a former equestrian servant of the elector opened a gin mill at this place. The restaurant got its present name when mainly guests from the nearby court came to drink their experiences ”in the last instance”. Historic additions survived despite the reconstruction after the war, even Napoleon himself was served in the restaurant at the tiled stove. Our history, the two restaurants, private room and beer garden invite our guests to stay. Berlin cuisine a la carte with exclusive regional products and fresh beer on tap ensure culinary moments in original ambiance.",
    imageUrl: "img/Zur-letzten-Instanz-um-german.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Zur%20letzten%20Instanz%20restaurant%20%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://zurletzteninstanz.com/",
  },

  {
    country: "Germany",
    name: "Katerschmaus",
    about: "Ahoy, you hungry cats and Katers.We have successfully undocked, now the Katerschmaus is finally setting sail again. Now we are there for you from Tuesday to Friday from 1 p.m. to 11 p.m and Saturday 5pm-11pm. Look forward to a menu that makes you happy from lunch to dinner – full of trans-European dishes, mostly with regional goods. The new chef Robin Marondel and restaurant manager Patricia Allegretta, together with Matze and many familiar faces, will warmly welcome you.",
    imageUrl: "img/katerschmaus-german.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Katerschmaus%20restaurant%20%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.katerschmaus.de/en",
  },

  {
    country: "Germany",
    name: "Hoppegarten",
    about: "Hinter dem Schlosspark-Theater und Adria-Kino gelegen, hat sich der Hoppegarten zu einer beliebten Steglitzer Gastro-Institution entwickelt. Es ist ein gemütliches, familienfreundliches Lokal — ein Kommunikationszentrum für jüngere und jung gebliebene Leute. Dem publikumsstarken Tresen und dem Restaurant ist ein Cafébereich und ein beheizter Wintergarten angeschlossen — Freunde von Pool Billard und Kicker kommen auch auf ihre Kosten. Unser junges, eingespieltes Team freut sich, Sie im Hoppegarten begrüßen zu dürfen. Egal ob Stammgast oder auf kulinarischer Erkundungsreise — lassen Sie sich von unserem Service überzeugen und freuen Sie sich auf eine angenehme Zeit in behaglicher Atmosphäre.",
    imageUrl: "img/hoppegarten-german.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Hoppegarten%20restaurant%20%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "http://www.hoppegarten-berlin.de/",
  },
];
const italy = [
  {
    country: "Italy",
    name: "Focacceria",
    about:
      "Best Focaccia in Berlin, next to Weinmeister park",
    imageUrl: "img/focaccia-berlin.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=La%20focacceria%20Fehrbelliner%20Str.%2024,%2010119%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.tripadvisor.com/Restaurant_Review-g187323-d1028366-Reviews-Focacceria-Berlin.html",
  },

  {
    country: "Italy",
    name: "Gazzo",
    about: "Original pizza Napolitana in Neukölln.",
    imageUrl: "img/gazzo-italy.jpg",
    mapUrl:
      "https://maps.google.com/maps?q=Gazzo%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.gazzopizza.com/",
  },

  {
    country: "Italy",
    name: "Centro Italia",
    about: "This one is not a restaurant, best best supermarket in Berlin to get good quality italian products.",
    imageUrl: "img/centro-italia-italy.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Gro%C3%9Fbeerenstr.%20169-171,%2012277%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://centro-italia.de/",
  },
];
const syria = [
  {
    country: "Syria",
    name: "Yarok",
    about:
      "Yarok offers fine Syrian food from Damascus. The food is always prepared personally and lovingly with fresh ingredients and served quickly. The special Syrian cuisine has been adapted to European tastes without losing its authenticity.",
    imageUrl: "img/yarok-berlin.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Yarok%20restaurant%20berlin%20&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.yarok-restaurant.de/",
  },

  {
    country: "Syria",
    name: "Malakeh",
    about: "The chef Malakeh Jazmati, was born in Damascus, Syria. She moved from politics to the kitchen , which brings together the Arab and foreign friends with their children on one table to see the warmth of heart and love with a plate and fork.",
    imageUrl: "img/malakeh-berlin.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=malakeh%20restaurant%20berlin%20&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://www.malakeh-restaurant.de/",
  },

  {
    country: "Syria",
    name: "Aldimashqi",
    about: "We offer the most delicious specialties of Syrian cuisine! Enjoy with us a new taste of fine, exquisite dishes of Syrian cuisine. We welcome you and your family!",
    imageUrl: "img/aldimashqi-syrian.jpeg",
    mapUrl:
      "https://maps.google.com/maps?q=Reuterstra%C3%9Fe%2028,%2012047%20Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed",
    buttonUrl: "https://aldimashqi-rayan.business.site/?utm_source=gmb&utm_medium=referral",
  },
];

const decimalUnits = ['lb', 'pound'];
const fractionalUnits = ['tbsp', 'tsp', 'liters', 'cups'];

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

// setting the main recipe randomly on pageload
let recipeIndex = parseInt(Math.random() * (cuisineSelection.length - 0) + 0);
let recipeName = cuisineSelection[recipeIndex].name;
let portionSelection = cuisineSelection[recipeIndex].portions;

const portionDiv = document.body.querySelector("#portions");
const portionsButtons = portionDiv.querySelectorAll(".portions-button");

function updateDefaultButtonQuantity() {
  const portionDiv = document.body.querySelector("#portions");
  const portionsButtons = portionDiv.querySelectorAll(".portions-button");
  document.body.querySelector(".done").classList.add("not-visible");
  document.body.querySelector(".edit").classList.remove("not-visible");
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


function getCommonDenominator(a, b) {
  // Since there is a limited precision we need to limit the value.
  if (b < 0.0000001) return a;
  // Discard any fractions due to limitations in precision.
  return getCommonDenominator(b, Math.floor(a % b));
};

function displayFractionlNumbers(number) {
  const roundedQuantity = (Math.round(number / 0.25) * 0.25) === 0 ?
    0.25 :
    Math.round(number / 0.25) * 0.25;

  const fraction = roundedQuantity - parseInt(roundedQuantity);
  const len = fraction.toString().length - 2;

  let denominator = Math.pow(10, len);
  let numerator = fraction * denominator;

  const divisor = getCommonDenominator(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;

  let finalValue = fraction === 0 ?
    roundedQuantity :
    roundedQuantity < 1 ?
      `${Math.floor(numerator)}/${Math.floor(denominator)}`
      : `${parseInt(roundedQuantity)} ${Math.floor(numerator)}/${Math.floor(denominator)}`;

  console.log(finalValue);
  return finalValue
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
      // check if the quantity needs to be displayed in a fractional way
    } else if (fractionalUnits.includes(cuisineSelection[recipeIndex].unitMeasure[i])) {
      updatedQuantity = displayFractionlNumbers((cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions));
      // setting minimun quantity to 1 so the Math.rond will never output 0
    } else if (Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions) === 0) {
      updatedQuantity = Math.ceil(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
    } else {
      updatedQuantity = Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
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

    if (typeof cuisineSelection[recipeIndex].quantity[i] != "number") {
      updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
      // check if the quantity needs to be displayed in a fractional way
    } else if (fractionalUnits.includes(cuisineSelection[recipeIndex].unitMeasure[i])) {
      updatedQuantity = displayFractionlNumbers(cuisineSelection[recipeIndex].quantity[i] * portionSelection /
        cuisineSelection[recipeIndex].portions);
      // setting minimun quantity to 1 so the Math.rond will never output 0
    } else if (Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions) === 0) {
      updatedQuantity = Math.ceil(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
    } else {
      updatedQuantity = Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
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
  const pageTitle = document.body.querySelectorAll(".country-title");
  const pageIntro = document.body.querySelectorAll(".country-description");
  // using a fix index of 0 since the name of the cuisine and the intro are only present in the first recipe of every object
  pageTitle.forEach(item => item.innerHTML = cuisineSelection[0].cuisine);
  pageIntro.forEach(item => item.innerHTML = cuisineSelection[0].intro);
}

function updateMainImageAndTitle(recipeIndex) {
  const ingredientListDiv = document.body.querySelector("#recipe-main");
  const mainImage = ingredientListDiv.querySelector(".main-image");
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

    if (typeof cuisineSelection[recipeIndex].quantity[i] != "number") {
      updatedQuantity = cuisineSelection[recipeIndex].quantity[i];
      // check if the quantity needs to be displayed in a fractional way
    } else if (fractionalUnits.includes(cuisineSelection[recipeIndex].unitMeasure[i])) {
      updatedQuantity = displayFractionlNumbers(cuisineSelection[recipeIndex].quantity[i] * portionSelection /
        cuisineSelection[recipeIndex].portions);
      // setting minimun quantity to 1 so the Math.rond will never output 0
    } else if (Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions) === 0) {
      updatedQuantity = Math.ceil(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
    } else {
      updatedQuantity = Math.round(cuisineSelection[recipeIndex].quantity[i] * portionSelection / cuisineSelection[recipeIndex].portions);
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

const Email = {
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


// restaurant logic
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