//Higher Order Functions

// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let Greet = function(){
//     console.log("Hello");
// }

// multipleGreet(Greet, 100);

//Higher Order Funnctions(Returns)

function oddOrEvenFactory(request){
    if(request == "odd"){
            let odd = function(n){
                console.log(!(n%2==0));
            }
        
        return odd;
    }else if(request=="even"){
            let even = function(n){
                console.log(n%2==0);
            }

        return even;
    }else{
        console.log("Wrong Request");
    }
}

let request = "odd";
