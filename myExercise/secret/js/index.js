let inputPW = prompt("输入密码浏览");

// console.log(inputPW + typeof inputPW);

// 创建内置密码
let pW = 1314520;
inputPW = Number(inputPW);

// 检查密码
if (inputPW === pW) {
  document.getElementById("content").style.display = "block";
} else {
  alert("密码错误");
  // 网页后退
  back();
}

// 网页的前进和后退函数
function go() {
  history.forward();
}

function back() {
  history.go(-1);
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
