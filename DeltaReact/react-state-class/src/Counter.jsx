import {useState} from "react";

export default function Counter(){
    let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0);
    console.log("Component is rendered");
    console.log(`count = ${count}`);

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });   
        setCount((currCount) => {
            return currCount + 1;
        });  
        //console.log(count);
        //console.log(`inside incCount, count = ${count}`);
    };

    return(
        <div>
        <h3>Count = {count}</h3>
        <button onClick = {incCount}>Increase Count</button>
        </div>
    );
}