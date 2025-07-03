// //map
// // 
// let students = [
//     {
//         name : 'Vaibhav',
//         marks : 98,
//     },
//     {
//         name : 'Rishi',
//         marks : 84.8,
//     },
//     {
//         name :'Varsha',
//         marks : 95.2,
//     },
// ];

// let gpa = students.map((el) =>{
//     return el.marks/10;
// });

//filter
// let array = [1, 2, 4, 7, 5, 9, 11];

// let ans = array.filter((el) =>{
//     return el %2 == 0;
// });

// //every

// let nums = [1,3,5,7,9];
// let sol = nums.every((el) => {
//     nums.every(el) % 2 != 0;
// });


//Practice Qs.
let arr = [20, 40, 50, 60, 90, 10];

let check = arr.every((el) => el%10 == 0);

console.log(check);

let num = [2, 5, 7, 8, 11, 13];

let min = num.reduce((el, min) =>{
    if(min < el){
        return min;
    }
    else{
        return el; 
    }
});

 console.log(min);


 //default parameters

 function sum(a, b =2){
    return a+b;
 }

 