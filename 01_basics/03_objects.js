let obj={
    name:"nirbhay",
    gfs:{
        abc:"asas",
        cde:"asssss",
        arr:[1,2,3,4]
    },
    email:"Email@ gmail.com",
    number:8729837237,
    artist:"ashbkjaskja"
};
function abc(){

delete obj.gfs.arr;
console.log(obj);
return obj.gfs;
};
console.log(abc());