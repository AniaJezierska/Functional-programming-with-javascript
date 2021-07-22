// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your code
const end = start.map((x) => abs(x - 11));
console.log(end);
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [
  ["Mal", "Captain"],
  ["Wash", "Pilot"],
  ["Zoey", "1st Mate"],
  ["Jayne", "Public Relations"],
];

// your code
const result = shipMates.map((arr) => arr.reverse().join(": "));
console.log(result);

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"];

// your code
const result = awayTeam.map(
  (name, i) => `${name}: ${i % 2 === 0 ? "even" : "odd"}`
);
console.log(result);
// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = [
  "Manedlorian",
  "Enterprise",
  "Firefly",
  "Battlestar Galactica",
];

// your code
const result = sciFiShows.map((show, index) => [show, index]);
console.log(result);

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4];

// your code
const result = numbers.map((num, index, wholeArray) => wholeArray);
console.log(result);

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array?
// Take a closer look at the last two arguments of map, one of them might be able to help
