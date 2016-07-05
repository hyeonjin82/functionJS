'use strict'
// import _ from 'lodash'
var _  = require('lodash');
// let dragon = (name, size, element) =>
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!';

// console.log(dragon('haha','tiny','lightning'));

let dragon =  name => size => element =>
                        name + ' is a ' +
                        size + ' dragon that breathes ' +
                        element + '!';

// console.log(dragon('haha')('tiny')('lightning'));

let hahaDragon = dragon('haha');
console.log(hahaDragon('tiny')('lightning'));

let tinyDragon = hahaDragon('tiny');
console.log(tinyDragon('lightning'));

// Using  curry from lodash

let dragon2 = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

dragon2 = _.curry(dragon2);

let hahaDragon2 = dragon2('haha');
let tinyDragon2 = hahaDragon2('tiny');
console.log(tinyDragon2('lightning'));
