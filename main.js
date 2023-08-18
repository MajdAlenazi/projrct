const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;

    if (username === "" || username === null) {
        document.querySelector("#error-message").innerText = "Please enter your name";
        return false
    } else {
        document.querySelector("#error-message").innerText = ""; 
    }

});





