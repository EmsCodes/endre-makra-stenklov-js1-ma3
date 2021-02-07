// function division(a, b) {
//     return a % b;
// }
//Is it right to add a default value this way in a arrow function?
const division = (a = 0, b = 0) => a % b;

const divisionResult = division(2, 3);

console.log(divisionResult);