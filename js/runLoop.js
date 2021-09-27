// 旋转效果
let i = 1;
let j = 1;
let counter = 0;
let counterPlus = 0;
function rotateLoop() {
  if (counter == 0) {
    reset();
  }
  if (counter == 72 + counterPlus) {
    counter = 0;
    return false;
  }
  i = i % 13;
  j = j % 13;
  if (i == 0) {
    i++;
  }
  if (j == 0) {
    j++;
  }

  let idNumber = "cell" + i;
  let idNumberPre = "cell" + j;
  //   alert(j);
  document.getElementById(idNumberPre).style.backgroundColor = "transparent";
  document.getElementById(idNumber).style.backgroundColor = "#ffbfce";
  i++;
  j = i - 1;
  counter++;

  setTimeout("rotateLoop()", 30);
}

function reset() {
  // counterPlus = Math.floor(Math.random()*10);
  counterPlus = randomNum(1, 12);
}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

// 统计网站被访问的次数
// 添加时间
// var timeNow = Date();
// function setStorage() {
//   if (localStorage.counter) {
//     localStorage.counter = Number(localStorage.counter) + 1;
//   } else {
//     localStorage.counter = 1;
//   }
//   return localStorage.counter;
// }
// var counter = setStorage();
// var oBox = document.getElementById("box");
// // oBox.innerHTML = "该网页被访问的次数为" + counter + "次" + " <br> " + timeNow;
// console.log("该网页被访问的次数为" + counter + "次" + " \n" + timeNow);
