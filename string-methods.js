/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

const fruit = "Banaan";
const vegetable = "Aardappel";
if ( fruit.length === vegetable.length) {
    console.log("Ze zijn even lang")
} else if ( fruit.length !== vegetable.length) {
    console.log(false);
}


/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

const lastIndexFruit = fruit.length - 1;
const lastIndexVeggie = vegetable.length - 1;

const lastFruit = fruit.substring( lastIndexFruit );
const lastVeggie = vegetable.substring( lastIndexVeggie );

console.log( lastFruit, lastVeggie );

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.trim());


/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"
if (story.includes("Fantastisch")) {
    console.log(true)
} else
    console.log(false)


/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

const wordSlice = story.indexOf(".");
console.log(wordSlice);

console.log(story.slice(0, 51));

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";

if ( price.includes("$") && price.includes(".") ) {
    console.log(price.replace("$", "€").replace(".", ","))
}


//kan ook

const price1 = "$35.59";

const euroPrice = price.replace("$", "€").replace(".", ",");
console.log(euroPrice);





