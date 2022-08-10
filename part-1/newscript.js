//API

// Pic

// let img = document.querySelector(".banner-img");
// let isHover;
// function setMore(img) {
//   isHover = true;
// }
// function setLess(img) {
//   isHover = false;
// }
// if ((isHover = true)) {
//   intervalTime = 999999;
// } else {
//   intervalTime = 5000;
// }
let i = 0;
function getPic(url) {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data.data.map((data) => data.picture))
    .then((data) => addPic(data));
  // .then((data) =>
  //   setInterval(function () {
  //     i++;
  //     i == data.length ? (i = 0) : "";
  //     document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
  //   }, 1000)
  // );
}

function addPic(data) {
  let dotList = document.querySelector(".dot-list");

  for (let x = 0; x <= data.length - 1; x++) {
    dotList.insertAdjacentHTML(
      "beforeend",
      `<li><img src="img/dot-2.png" class="dot do${x} click" onmouseover="goldDot(this)" onmouseout="blackDot(this)"></li>
      `
    );
  }
  return data;
}

for (let a = 0; a <= 3 ; a++) {
  let do${a}= document.querySelector(`.do${a}`);
  console.log(`do${a}`)
};

// let do1 = document.querySelector(".do1");
// console.log(typeof do1);

// let dots = document.querySelectorAll(".do");
// console.log(dotList);
// dots.addEventListener('click', function(){
//   for (let a=0; a<=3; a++){

//   }
// })

function updatePic(data) {
  timer(data);
  function timer(data) {
    let i = 0;
    setInterval(function () {
      i++;
      i == data.length ? (i = 0) : "";
      document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
    }, 1000);
    // let banner = document.querySelector(".banner");
    // banner.addEventListener("mouseover", () => {
    //   clearInterval(timer);
    // });
  }
}

// let banner = document.querySelector(".banner");
// banner.addEventListener("mouseover", () => {
//   clearInterval(timer);
// });

// banner.addEventListener("mouseout", () => {
//   banner.setInterval(timer, 5000);
// });

// // console.log(data);
// let i = 0;
// i++;
// i == data.length ? (i = 0) : "";
// document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;

getPic("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
  (data) => updatePic(data)
);

// function main(data) {
//   let i = 0;
//   startTime();
//   console.log(data.length);
//   function startTime(data) {
//     console.log(data);
//     setInterval(function () {
//       i++;
//       i == data.length ? (i = 0) : "";
//       document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
//     }, 1000);
//   }

// let banners = document.querySelector(".banner");
// banners.addEventListener("mouseover", () => {
//   banners.clearInterval(startTime);
// });

// banners.addEventListener("mouseout", () => {
//   banners.setInterval(startTime, 5000);
// });

// .then(
//   (data) => setInterval(updatePic(data), 1000)
// );
// function updatePic(data) {
//   let i = 0;

//   i++;
//   i == data.length ? (i = 0) : "";
//   document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
// }

// .then((data) => addPic(data))
// .then((data) => setInterval(data, updatePic, 5000));

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
  }, 9999999);
}

getWords("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
  (words) => addWords(words)
);

// await Promise.all([getWords("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
//   (words) => addWords(words)
// ), getPic("https://api.appworks-school.tw/api/1.0/marketing/campaigns").then(
//   (data) => addPic(data)
// )]);

// !(async function () {
//   let data = await fetch(
//     "https://api.appworks-school.tw/api/1.0/marketing/campaigns"
//   )
//     .then((response) => response.data[0].picture())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   console.log(data);
// })();

// function callApi(url) {
//   const response = fetch(url);
//   const data = response.json();

//   return data;
// }

// callApi("https://api.appworks-school.tw/api/1.0/marketing/campaigns");

// let data = callApi("https://api.website.net/?");
// console.log(data);

// function getPic() {
//   let pic1;
//   return (
//     fetch("https://api.appworks-school.tw/api/1.0/marketing/campaigns")
//       .then((response) => response.json())
//       // .then((data) => (pic1 = data[0].picture));
//       .then((data) => console.log(data[0].picture))
//   );
// }

// getPic();

// console.log(pic1);

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
