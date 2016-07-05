// Functions are values
// Higher-order functions
// Comosition

var triple = function(x) {
    return x * 3;
};

var waffle = triple;

console.log(waffle(30));

//-------------------------------------

var animals = [
    { name : 'Fluffykins', species: 'rabbit'},
    { name : 'Caro',       species: 'dog'},
    { name : 'Hamilton',   species: 'dog'},
    { name : 'Harold',     species: 'fish'},
    { name : 'Ursula',     species: 'cat'},
    { name : 'Jimmy',      species: 'fish'}
];

// var dogs = [];
// for (var i = 0; i < animals.length; i++) {
//     if(animals[i].species === 'dog')
//         dogs.push(animals[i]);
// }

//Using filter
// var dog = animals.filter(function(animal) {
//     return animals.species === 'dog';
// });

var isDog = function(animals) {
    return animals.species === 'dog';
};
var dogs = animals.filter(isDog);
//var otherAnimals = animals.reject(isDog);// by underscore.js
console.log(dogs);
