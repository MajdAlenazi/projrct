const submit = document.getElementById("submit");

let gameOptions = {
    username: "",
    gameMode: ""
};

const sortedGameOptions = localStorage.getItem("Game-Options");
let gameOptionsObject = JSON.parse(sortedGameOptions);


submit.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;

    gameOptionsObject.username = username;

    localStorage.setItem("Game-Options", JSON.stringify(gameOptionsObject)); 

    if (username === "" || username === null) {
        document.querySelector("#error-message").innerText = "Enter your name";
        return false
    } else {
        document.querySelector("#error-message").innerText = ""; 
    }

    

});





