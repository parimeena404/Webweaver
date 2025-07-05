function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return (
        <form>
            <input placeholder="Write Something.." />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}