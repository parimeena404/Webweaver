let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
        e.preventDefault();

        let user = document.querySelector("#user");
        let pass = document.querySelector("#pass");

        console.log(user.value);
        console.log(pass.value);

        alert(`Hi ${user.value}, your password is set to ${pass.value}`);

    });