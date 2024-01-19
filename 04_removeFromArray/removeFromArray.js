const removeFromArray = function(array, a=undefined, b=undefined, c=undefined, d=undefined) {
//    console.log(array.includes(b))

//     if (a != undefined && array.includes(a)) {
//     array.splice(array.indexOf(a), 1);}
//     if (b != undefined) {
//     array.splice(array.indexOf(b), 1);}
//     if (c != undefined) {
//     array.splice(array.indexOf(c), 1);}
//     if (d != undefined) {
//     array.splice(array.indexOf(d), 1);}

//     return array;
return array.filter(val => !args.includes(val));
};

console.log(removeFromArray([1, 2, 3, 4], 7, 2))
// Do not edit below this line
module.exports = removeFromArray;
