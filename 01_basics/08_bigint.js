// BigInt
let temp=prompt(`whats the temperature`);
if(temp<=0){
    alert(`${temp} is very chil;y`);
}
else if(temp<5){
    alert(`${temp} degrees is low temp`);
}
else if(temp<10){
    alert(`${temp} degrees is cold temp`);
}
else{
    alert(`${temp} is very hot`);
}