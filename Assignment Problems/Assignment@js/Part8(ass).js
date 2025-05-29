// // let array = [1, 5, 3, 6 ,7, 9];

// // let sum = array.every() =>{
// //     for(int i=0; i< array.length; i++){
// //     return ,
// //     }
// // });

// // console.log(el*el);

// //2

// let arr = [1, 4, 6, 7];

// let newArr = arr.map((el) =>{
//     return el+5;
// });

// console.log(newArr);

// //3

// let str = ["apnacollege", "Rumi", "Bheem"];

// let UppStr = str.map((String) => {
//     return String.toUpperCase();
// });

// console.log(UppStr);

// //4

// let Students = {
//     name : "Shweta",
//     marks : 87,
//     location : "Japan",
// };

// let School = {
//     id : 124,
//     location : "MIT",
// };

// let mergeObjects = ({...Students,...School});
// console.log(mergeObjects);

//5

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map((v) => v*2),
];

doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);