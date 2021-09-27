// 记录代码执行开始时间
let executeTimeStart = Date.now();

// 设置Logo旋转效果
let degree = 0;

function rotateLogo() {
  degree++;
  // console.log(degree);
  document.getElementById("logo").style.transform = "rotate(" + degree + "deg)";
  setTimeout("rotateLogo()", 50);
}
rotateLogo();

// 设置登录弹窗
function open_login() {
  document.getElementById("loginbg").style.display = "block";
  document.getElementById("login").style.display = "block";
  showloginbg();
}

function showloginbg() {
  var sWidth, sHeight;
  sWidth = screen.width;
  sWidth = document.body.offsetWidth;
  sHeight = document.body.offsetHeight;
  if (sHeight < screen.height) {
    sHeight = screen.height;
  }
  document.getElementById("loginbg").style.width = sWidth + "px";
  document.getElementById("loginbg").style.height = sHeight + "px";
  document.getElementById("loginbg").style.display = "block";
  document.getElementById("loginbg").style.display = "block";
  document.getElementById("loginbg").style.right =
    document.getElementById("login").offsetLeft + "px";
}

function close_login() {
  document.getElementById("loginbg").style.display = "none";
  document.getElementById("login").style.display = "none";
}

function checkUser() {
  let result = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (result == "") {
    alert("用户名不能为空");
    return false;
  }
  if (result.length > 1) {
    alert("用户名不能超过 1 个汉字或数字！");
    return false;
  }

  if (password == "") {
    alert("密码不能为空");
    return false;
  }
  if (password.length > 1) {
    alert("密码不能超过 1 个汉字或数字！");
    return false;
  }

  document.getElementById("LoginForm").submit();
}

// 设置注册弹窗
function open_register() {
  document.getElementById("registerbg").style.display = "block";
  document.getElementById("register").style.display = "block";
  showregisterbg();
}

function showregisterbg() {
  var sWidth, sHeight;
  sWidth = screen.width;
  sWidth = document.body.offsetWidth;
  sHeight = document.body.offsetHeight;

  if (sHeight < screen.height) {
    sHeight = screen.height;
  }
  document.getElementById("registerbg").style.width = sWidth + "px";
  document.getElementById("registerbg").style.height = sHeight + "px";
  document.getElementById("registerbg").style.display = "block";
  document.getElementById("registerbg").style.display = "block";
  document.getElementById("registerbg").style.right =
    document.getElementById("register").offsetLeft + "px";
}

function close_register() {
  document.getElementById("registerbg").style.display = "none";
  document.getElementById("register").style.display = "none";
}

function checkUserRegister() {
  let result = document.getElementById("usernameRegister").value;
  let password = document.getElementById("passwordRegister").value;
  if (result == "") {
    alert("用户名不能为空");
    return false;
  }
  if (result.length > 1) {
    alert("用户名不能超过 1 个汉字或数字！");
    return false;
  }

  if (password == "") {
    alert("密码不能为空");
    return false;
  }
  if (password.length > 1) {
    alert("密码不能超过 1 个汉字或数字！");
    return false;
  }

  document.getElementById("RegisterForm").submit();
}

// 设置aside中的箭头交互
// function rotateArrow() {
//   let indexar = document.getElementsByClassName("arrow");
//   indexar[0].style.transform = 'rotate(90deg)';
// }

// function rotateArrowReturn() {
//   let indexar = document.getElementsByClassName("arrow");
//   indexar[0].style.transform = 'rotate(360deg)';
// }

// 记录代码执行结束时间
let executeTimeEnd = Date.now();
// 计算代码执行用时（单位：毫秒）
let occupyTime = executeTimeEnd - executeTimeStart;
console.log("JS程序执行用时： " + occupyTime + " 毫秒");

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