// 旋转效果
let i = 1;
let j = 1;
let counter = 0;
let counterPlus = 0;

// 运行程序
var timesRun = 0;
function runLoop() {
  counterPlus = randomNum(1, 12);

  // 添加干扰，设置干扰概率
  if (Math.random() > 0.2) {
    counterPlus = setResult() - (i - 1); // 0 7 8
  }

  var interval = setInterval(function () {
    timesRun += 1;

    // 指定条件终止程序
    if (timesRun === 60 + counterPlus) {
      timesRun = 0;

      clearInterval(interval);
      console.log("程序停止了");
    }

    // 生成位置
    i = i % 13;
    if (i === 0) {
      i++;
    }
    j = j % 13;
    if (j === 0) {
      j++;
    }
    let idNumber = "cell" + i;
    let idNumberPre = "cell" + j;

    document.getElementById(idNumberPre).style.backgroundColor = "white";
    document.getElementById(idNumber).style.backgroundColor = "#ffbfce";
    i++;
    j = i - 1;
    console.log(i);
  }, 30);
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

// arithmetic
var set = 0;

function setResult() {
  let ran = Math.random();
  if (ran > 0.8) {
    set = 1;
  } else if (ran > 0.6) {
    set = 2;
  } else if (ran > 0) {
    set = 3;
  }

  switch (set) {
    case 1:
      set = 1;
      break;
    case 2:
      set = 8;
      break;
    case 3:
      set = 9;
      break;
  }
  return set;
}
