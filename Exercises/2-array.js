'use strict';

const array = () => {
    const myArray = [];
    const make = (n) => myArray[n];
    make.push = (x) => myArray.push(x);
    make.pop = () => myArray.pop();
    return make; 
};
module.exports = { array };
