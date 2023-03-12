//***********************************Arrow Functtion****************************** */
// let add=()=>{
//     console.log(1+1);
// }
// //OR
// let mul=()=> "Mul";
// console.log(mul());
// //***********************************IIFE Functtion****************************** */
// (function sub(){
//     console.log("Substract");
// }())
// //***********************************IIFE Functtion****************************** */
// a()
// function a(){
// console.log("a");
// }
// a();

//**************************ARRAY Programme************************** */
// function diffArray(arr1, arr2) {
//     const newArr = [];
//     let flag=0;
//     for(let i=0;i<arr1.length;i++){
        
//       for(let j=0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             console.log(arr1[i]);
//           flag++;
//         }
//       }
//       if(flag!=(arr1.length=1)){
//         newArr.push(arr1[i])
//       }
//     }
//     console.log(newArr);
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// *********************************Distroyer programme***************************************
// function destroyer(arr,a,b) {
//   while(arr.includes(a)){
//     let pos=arr.indexOf(a);
//     arr.splice(pos,a);
//   }
//   while(arr.includes(b)){
//     let pos=arr.indexOf(b);
//     arr.splice(pos,b);
//   }
//   return arr;
// }

// let k=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// console.log(k);

// ***************************************************************************************
function myReplace(str, before, after) {
  str=str.replace(before,after);
  return str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
