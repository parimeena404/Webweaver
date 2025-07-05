function printHello(){
    console.log("Hello!");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>This parah is for event demo</p>
        </div>
    );
}