// let form = document.querySelector("form");

// form.addEventListener("mouseout",function(){
//     console.log("Mouse is outside the button")
// });

// form.addEventListener("keypress", (event) => { })

// onkeypress = (event) => {
//     console.log("Key pressed");
//  }

// form.addEventListener("load", (event) => { })

// onload = (event) => { 
//     console.log("Loaded successfully");
// }

// let btn = document.createElement("button");
// btn.innerText = "Click me";
// document.querySelector("body").append(btn);
// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "green";
// });


// //5

// let input = document.getElementById("name");
// let heading = document.getElementById("h2");

// heading.addEventListener("input", function(){
//     heading.textContent = input.value;
// });

// Get input and h2 elements
    const input = document.getElementById("nameInput");
    const heading = document.getElementById("displayName");

    // Listen for input changes
    input.addEventListener("input", function() {
      // Set heading text to current input value
      heading.textContent = input.value;
    });