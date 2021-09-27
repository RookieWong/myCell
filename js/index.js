function linkToGame() {
  // window.open('http://hernryhu.top:13148/');
  window.location.href = "./myExercise/smallGame/index.html";
}

function linkToLife() {
  window.location.href = "./myExercise/life/index.html";
}

function linkToSecret() {
  window.location.href = "./myExercise/secret/index.html";
}

function linkToCaculate() {
  window.location.href = "./myExercise/scienceCaculate/index.html";
}

// 统计网站被访问的次数
// 添加时间
var timeNow = Date();
function setStorage() {
  if (localStorage.counter) {
    localStorage.counter = Number(localStorage.counter) + 1;
  } else {
    localStorage.counter = 1;
  }
  return localStorage.counter;
}
var counter = setStorage();
var oBox = document.getElementById("box");
// oBox.innerHTML = "该网页被访问的次数为" + counter + "次" + " <br> " + timeNow;
console.log("该网页被访问的次数为" + counter + "次" + " \n" + timeNow);
