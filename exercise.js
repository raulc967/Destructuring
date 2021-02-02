/** Object Destructuring 1
numPlanets = 8 **/

/** Object Destructuring 2
{ yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 } **/

/** Object Destructuring 3
Your name is Alejandro and you like green
Your name is Melissa and you like green
undefined
**/

/** Array Destrusturing 1
"Maya"
"Marisa"
"Chi"
**/

/** Array Destrusturing 2
 "Raindrops on roses"
 "whiskers on kittens"
 { "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with string" }
**/

/** Array Destructuring 3
 [20, 10, 30]
**/

let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let { numbers: { a }, numbers: { b } } = obj;

let arr = [1,2];
[arr[0]] = [arr[1]];

let raceResults = ([ first, second, third, ...rest ]) => ({ first, second, third, rest });