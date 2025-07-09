import {useState} from "react";

export default function Form(){
    let [formName, setFormData] = useState({
        fullName:"",
        userName:"",
    })

    // let handNameChange = (event) =>{
    //      setFullName(event.target.value);
    // };

    // let handleUsername = (event) =>{
    //      setUsername(event.target.value);
    // };

    let handleInputChange = (event)=>{
        
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.name};
        });
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
        });
    };

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter your name" 
            type="text" 
            value={FormData.fullName}  
            id="fullName"
            name="fullName"
            onChange={handleInputChange}
            />
        <br /><br />
        <br /><br />
            <label htmlFor="userName">User Name</label>
            <input placeholder="Enter your name" 
            type="text" 
            value={FormData.userName} 
            id="userName"
            name="userName"
            onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}