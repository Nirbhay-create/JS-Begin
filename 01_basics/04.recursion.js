function countdown(n){
    if(n<1){
    return [];}
    else{
    //  let arr=[];
      arr.push(n);
      countdown(n-1);
      return arr;
    }
  }
  let arr=[];
  console.log(countdown(10));
  

// function print(a){
//     if(a<1){
//         return;
//     }
//     else{
//         console.log(a);

//         print(a-1);
//         return ;
//     }
// }
// print(5);