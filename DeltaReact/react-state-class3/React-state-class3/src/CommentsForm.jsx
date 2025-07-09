import {useState} from "react";
import {useFormic} from "formik";

const validate = (values)=>{
    const errors = {};
    if(!values.username){
        errors.username = "Username can't be empty";
    }
    return errors;

};

export default function CommentsForm(addNewComment){
    // let [formData, setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });
    
    const formik = useFormik({
        initialValues:{
            username:"",
            remarks:"",
            rating:5,
        },
        validate,
        onSubmit: values=>{
            alert(JSON, stringify(values, null, 2));
        },
    })

    // let handleInputChange = (event)=>{
    //     setFormData((currData)=>{
    //         return {...currData, [event.target.name]: event.target.value};
    //     });
    // };

    // let handleSubmit = (event)=>{
    //     // console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating:5,
    //     });
    // };

    return (
        <div>
        <h4>Give a comment!</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                placeholder="username"
                type="text" 
                value={formData.username} 
                onChange={formik.handleInputChange}
                id="username"
                name="username"
                />
                {isValid && <p style={{color:"red"}}>Username can't be empty</p>}
            <br /><br /><br />
            <label htmlFor="remarks">Remarks</label>
            <textarea 
                value={formData.remarks} 
                placeholder="add few remarks" 
                onChange={formik.handleInputChange}
                id="remarks"
                name="rating"
                >
               </textarea>   
            <br /><br /><br />
            
            <label htmlFor="rating">Rating</label>
          
            <input 
                placeholder="rating" 
                type="number" 
                min ={1} 
                max={5} 
                value={formData.rating}
                onChange={formik.handleInputChange}
                id="rating"
                name="rating"
            />
            <br /><br /><br />
            <button>Add Comment</button>
        </form>
        </div>
    );
}