// function greaterValue(a,b){
//     if(a>b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }

// greaterValue(4,7);
// greaterValue(9,3);


let a=[2,6,7,8,9,5];
let b=5;
function great(a,b){
    for(let i=0; i<6; i++){
        if(a[i]>b){
            console.log(a[i]);
        }else{
            console.log(b);
        }
    }
}

great(a,b);