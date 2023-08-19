const submit = document.getElementById("submit");
let show = document.getElementById("wrapper-container");

let gameOptions = {
  username: "",
  gameMode: "",
};

const sorted = localStorage.getItem("Game-Options");

let gameObject = JSON.parse(sorted);

// funcation of choese level

const easyOnClick = () => {
  gameObject.gameMode = "easy";
  localStorage.setItem("Game-Options", JSON.stringify(gameObject));
};

const mediumOnClick = () => {
  gameObject.gameMode = "medium";
  localStorage.setItem("Game-Options", JSON.stringify(gameObject));
};

const hardOnClick = () => {
  gameObject.gameMode = "hard";
  localStorage.setItem("Game-Options", JSON.stringify(gameObject));
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
            <div class="card text-center h-100">
                <img src="image/29166.jpg" class="card-img-top d-none d-md-block img-sCard" >
                <div class="card-body body-style">
                <h5 class="card-title" style= "color: #5E9736">Easy Level</h5>
                <p class=" card-text" style= "color: #5E9736">Easy level math questions</p>
                <a href="/que.html" onClick="easyOnClick()" class=" text-center btn fw-bold btn-warning">Go to Questions</a>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card text-center h-100">
                <img src="image/28992.jpg" class="card-img-top d-none d-md-block img-card" alt="...">
                <div class="card-body body-style">
                <h5 class="card-title" style="color:#902D6A">Medium Level</h5>
                <p class="card-text" style="color:#902D6A">Medium level math questions</p>
                <a href="/que.html" onClick="mediumOnClick()" class="btn fw-bold btn-warning">Go to Questions</a>

                </div>
            </div>
            </div>
            <div class="col">
            <div class="card text-center h-100">
                <img src="image/Premium Vector _ Happy cute little kid boy study math.jpg" class="card-img-top d-none d-md-block" alt="...">
                <div class="card-body body-style">
                <h5 class="card-title" style="color: #2D8F93"> Hard Level </h5>
                <p class="card-text" style="color: #2D8F93">Hard level math questions </p>
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

  gameObject.username = username;

  localStorage.setItem("Game-Options", JSON.stringify(gameObject));

  showingCards();
});
