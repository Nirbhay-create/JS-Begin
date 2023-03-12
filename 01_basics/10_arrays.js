// array are refrenced datatypes
// that means the data in arry is stores in heap memeory  instead of stack


//cloning an array

// let arr1=["item 1","item 2"];
// let arr2=arr1;// here we are copying the adressof arr1 to arr2 so both the variables are pointing to same adrerss
//1st way of cloning array using slice(0)

// let arr2=arr1.slice(0);
// console.log(arr1===arr2);
// console.log(arr1);
// console.log(arr2);
// console.log("after push");
// arr1.unshift("item 0");
// console.log(arr1);
// console.log(arr2);

// 2nd way of cloning array using concat here we ceate an empty array and contact the target array to it


let arr1=["a","b","c"];
let arr2=[].concat(arr1);
console.log(arr1==arr2);
console.log(arr1);
console.log(arr2);
arr2.push("f");
console.log("after push");
console.log(arr1);
console.log(arr2);

// 3rd way of array colning the most elegant way
// this methord is called spread operator
// **slice is the fastest but spread is mostly used**

let arr3=[...arr1];
console.log(arr1==arr3);
console.log(arr1);
console.log(arr3);


