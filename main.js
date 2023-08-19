const submit = document.getElementById("submit");
let show = document.getElementById("wrapper-container");

let gameOptions = {
  username: "",
  gameMode: "",
};

const sortedGameOptions = localStorage.getItem("Game-Options");

let gameOptionsObject = JSON.parse(sortedGameOptions);

// funcation of choese level

const easyOnClick = () => {
  gameOptionsObject.gameMode = "easy";
  localStorage.setItem("Game-Options", JSON.stringify(gameOptionsObject));
};

const mediumOnClick = () => {
  gameOptionsObject.gameMode = "medium";
  localStorage.setItem("Game-Options", JSON.stringify(gameOptionsObject));
};

const hardOnClick = () => {
  gameOptionsObject.gameMode = "hard";
  localStorage.setItem("Game-Options", JSON.stringify(gameOptionsObject));
};

// funaction show cards
const showingCards = () => {
  show.innerHTML = `
        <div class="wrapper">
        <svg onClick="closeCard()" id="close" class="close-wrapper" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
            <div class="card h-100">
                <img src="image/29166.jpg" class="card-img-top d-none d-md-block img-sCard" alt="...">
                <div class="card-body body-style">
                <h5 class="card-title">Easy Level</h5>
                <p class="card-text">Easy level math questions</p>
                <a href="/que.html" onClick="easyOnClick()" class="btn fw-bold btn-warning">Go to Questions</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card h-100">
                <img src="image/28992.jpg" class="card-img-top d-none d-md-block img-card" alt="...">
                <div class="card-body body-style">
                <h5 class="card-title">Medium Level</h5>
                <p class="card-text">Medium level math questions</p>
                <a href="/que.html" onClick="mediumOnClick()" class="btn fw-bold btn-warning">Go to Questions</a>

                </div>
            </div>
            </div>
            <div class="col">
            <div class="card h-100">
                <img src="image/Premium Vector _ Happy cute little kid boy study math.jpg" class="card-img-top d-none d-md-block" alt="...">
                <div class="card-body body-style">
                <h5 class="card-title"> Hard Level </h5>
                <p class="card-text">Hard level math questions </p>
                <a href="/que.html" onClick="hardOnClick()" class="btn fw-bold btn-warning">Go to Questions</a>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div> 
`;
};
//  funcation close card
const closeCard = () => {
  show.innerHTML = "";
};

// funaction of button submit
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  if (username === "" || username === null) {
    document.querySelector("#error-message").innerText =
      "Please enter your name";
    return false;
  } else {
    document.querySelector("#error-message").innerText = "";
  }

  localStorage.setItem("Game-Options", JSON.stringify(gameOptions));

  gameOptionsObject.username = username;

  localStorage.setItem("Game-Options", JSON.stringify(gameOptionsObject));

  showingCards();
});
