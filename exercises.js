// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 
// Single line comments start with //
/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */

/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

let fruit = 'banana';
console.log(fruit);  // <= this should print out 'banana'

/*
* #1
* Variables with a STRING value
Declare the following variables and assign your own string values for each variable. Console.log each variable to check your work.
  firstName
  lastName
  birthPlace
  favColor
  favFood
*/

let firstName = 'Gabby';
console.log(firstName);
let lastName = 'Pascual';
console.log(lastName);
let birthPlace = 'Honolulu';
console.log(birthPlace);
let favColor = 'lavender'
console.log(favColor);
let favFood = 'ice cream'
console.log(favFood);



/*
* #2
* Variables with a Number value
Declare the following variables and assign your own number values for each variable. Console.log each variable to check your work.
  age
  shoeSize
  mcdonaldsInHi
  abcStoresInHi
  princeSong
*/

let age = 24;
console.log(age)
let shoeSize = 7.5;
console.log(shoeSize);
let mcdonaldsInHi = 76;
console.log(mcdonaldsInHi)
let abcStoresInHi = 57;
console.log(abcStoresInHi);
let princeSong = 500;
console.log(princeSong)

/*
* #3
* Variables with a BOOLEAN value
Declare the following variables and assign your own boolean values for each variable. Console.log each variable to check your work.
  lovesMcdonalds
  isVegan
  olderThan21
  hasNetFlix
  beenToParis
*/

let Gabby = {
lovesMcdonalds: true,
isVegan: false,
olderthan21: true,
hasNetFlix: true,
beentoParis: false
}
console.log(Gabby)


/*
* #4
* Variables with an ARRAY value
Declare a variable named plateLunch and assign it an array containing five of your favorite lunch items.
Declare a variable named `candyBox` and assign it an array containing five candies of your choosing.
Declare a variable named `westSiiiiide` and assign it an array containing states found on the west coast of the US.
Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
Declare a variable named `hamajang` and assign it an array containing 6 different data types.
Declare a variable named `tagTeam` and assign it an array containing 3 arrays, with each array containing items that complement with one another.
Console.log each variable to check your work
*/

let plateLunch = ["rice", "mac salad", "meat jun", "garlic chicken", "chicken katsu"];
console.log(plateLunch);
let candyBox = ["Twix", "Kit Kat", "Lihing Sour Belts", "Sour Patch Kids", "Lychee Gummies"];
console.log(candyBox);
let westSiiiiide = ['Washington', 'Oregon', 'California'];
console.log(westSiiiiide);
let lotteryResult = [2,6,9,7,0]
console.log(lotteryResult)
let hamajang = ['String',0,Boolean = true, {name: "Gabby", age: 24, very: "cool"}, ['Sarah', 'Matt','Kylie','Cait'],undefined];
console.log(hamajang);
let tagTeam = [["picnic", 'blanket'], ['sand','waves'], ['ono food', 'broke da mouf']];
  console.log(tagTeam);

/*
* #5
* Accessing values in ARRAYS
let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];
Console.log the entire array.
Console.log the length of this array.
Console.log 'sweet potato fries' from this array.
Console.log 'steak nachos' from this array.
*/

let partyMenu = ['steak nachos', 'fried rice', 'bbq ribs', 'sweet potato fries', 'chicken wings', 'carrot cake', 'chi chi dango'];
console.log(partyMenu);
console.log(partyMenu.length);
console.log(partyMenu[3]);
console.log(partyMenu[0])

/*
#6
* Concatenation 
Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
Using the fullName and birthPlace variables, console.log the following:
"Hi my name is fullName and I was born in birthPlace." 
*/

let fullName = firstName + ' ' + lastName;
console.log(fullName)
console.log("Hi my name is " + fullName + " and I was born in " + birthPlace + '.')

/*
* #7
* Variables with an OBJECT value
Declare the following variables and add your own values to each name to complete the properties for each object. Console.log each variable to check your work.
  kicks
    - brand
    - size
    - color
    
  car
    - brand
    - model
    - color
    
  bank
    - name
    - branch
    - location
    - rating
    - helpful
*/

let kicks = {brand: "Jesus Slippahs", size: 7.5, color: "black"};
console.log(kicks);
let car = {brand: "Toyota", model: "Highlander", color: "Dark Blue"};
console.log(car);
let bank = {name: "Bank of Hawaii", branch: "Pearlridge", location: "98-1059 Moanalua Rd", rating: 5, helpful: true};
console.log(bank)
