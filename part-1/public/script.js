//API

// Pic

let i = 0;
function getPic(url) {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data.data.map((data) => data.picture))
    .then((data) => addPic(data));
}

function addPic(data) {
  let dotList = document.querySelector(".dot-list");

  for (let x = 0; x <= data.length - 1; x++) {
    dotList.insertAdjacentHTML(
      "beforeend",
      `<li><img src="img/dot-2.png" class="dot click" onmouseover="goldDot(this)" onmouseout="blackDot(this)"></li>
      `
    );
  }
  let dotLists = document.querySelectorAll(".dot");
  dotLists.forEach(function (elem, index) {
    elem.addEventListener("input", function () {
      //this function does stuff
    });
  });

  return data;
}

function updatePic(data) {
  timer(data);
  function timer(data) {
    let i = 0;
    let t = setInterval(function () {
      i++;
      i == data.length ? (i = 0) : "";
      document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
    }, 5000);
    let banner = document.querySelector(".banner");
    banner.addEventListener("mouseover", () => {
      clearInterval(t);
      banner.addEventListener("mouseout", () => {
        setInterval(timer(data), 5000);
      });
    });
  }
}

getPic("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
  (data) => updatePic(data)
);

// Mouseover event

let dot = document.querySelector(".dot");

function goldDot(dot) {
  dot.setAttribute("src", "img/dot-1.png");
}

function blackDot(dot) {
  dot.setAttribute("src", "img/dot-2.png");
}

// Words

function getWords(url) {
  return fetch(url)
    .then((words) => words.json())
    .then((words) => words.data.map((words) => words.story));
}

// let img=document.querySelector('.banner-img');

function addWords(words) {
  let i = 0;
  setInterval(function () {
    i++;
    i == words.length ? (i = 0) : "";
    document.getElementsByClassName(
      "banner-words"
    )[0].innerText = `${words[i]}`;
  }, 5000);
}

getWords("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
  (words) => addWords(words)
);

//Button event

let blackCart = document.querySelector(".black-cart");
let blackProfile = document.querySelector(".black-profile");

function gold(blackCart) {
  blackCart.setAttribute("src", "img/gold-cart.png");
}

function black(blackCart) {
  blackCart.setAttribute("src", "img/black-cart.png");
}

function goldPro(blackCart) {
  blackCart.setAttribute("src", "img/gold-profile.png");
}

function blackPro(blackCart) {
  blackCart.setAttribute("src", "img/black-profile.png");
}
