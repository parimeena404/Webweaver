let arr = [];

let req = prompt("Please enter your request");


while(true){
    if(req == "quit"){
        console.log("Quitting the app.");
        break;
    }

    if(req == "lists"){
        console.log("-------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------------");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add.");
        todo.push(task);
        console.log("Task added");
    }
    
}