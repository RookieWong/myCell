// 输出语句逻辑
var lineOne = 1,
  lineTwo = 2,
  lineThree = 10;
// 根据时间设置lineOne
let nowTime = new Date();
let one = nowTime.getHours();
// console.log(nowTime.getHours());
switch (true) {
  case 4 <= one && one < 7:
    lineOne = 1;
    break;
  case 7 <= one && one < 8:
    lineOne = 2;
    break;
  case 8 <= one && one < 12:
    lineOne = 3;
    break;
  case 12 <= one && one < 14:
    lineOne = 4;
    break;
  case 14 <= one && one < 18:
    lineOne = 5;
    break;
  case 18 <= one && one < 24:
    lineOne = 6;
    break;
  case 0 <= one && one < 4:
    lineOne = 7;
    break;
}

// lineOne = randomNum(1, 3);
lineTwo = randomNum(1, 5);
lineThree = randomNum(1, 11);

// 延迟显示消息
setTimeout(() => {
  oneDegree(lineOne);
}, 500);

setTimeout(() => {
  twoDegree(lineTwo);
  1;
}, 2000);

setTimeout(() => {
  threeDegree(lineThree);
}, 3000);

setTimeout(function () {
  fourDegree();
}, 1000);

function oneDegree(lineOne) {
  let langArray = {
    1: "清晨好！起床很早嘛，出去走走吧，或者读一首小诗陶冶陶冶情操",
    2: "早上好！今天又是有趣的一天",
    3: "上午好！现在精力充沛，适合高难度学习噢！",
    4: "中午好！休息15分钟，看看得到缓解一下疲劳",
    5: "下午好！如果犯困，多喝点水试试",
    6: "晚上好！练习练习今天的知识体系",
    7: "夜深了，熬夜伤身体，为了智力，头发，早点休息啦",
  };

  document.getElementById("lineOne").innerHTML = langArray[lineOne];
}

function twoDegree(lineTwo) {
  let langArray = {
    1: "今天想突破点什么呢？反应速度？",
    2: "学习累了，不如算一道数学题如何？",
    3: "学不下去了，花10分钟欣赏一首诗试试",
    4: "感觉学习麻木了，去听一首歌吧",
    5: "久坐对颈椎不好哦，去看看外面的世界吧",
  };

  document.getElementById("lineTwo").innerHTML = langArray[lineTwo];
}

function threeDegree(lineThree) {
  let langArray = {
    1: "幸福是每一天都在发生的事情，用心去体会它",
    2: "今天早上，叫醒你的是闹钟，还是梦想？",
    3: "幸福就藏在生活中的每个小角落，今天你找到几个了？",
    4: "有时候，贪图便宜，就会付出更高的时间成本哦，实际上亏大发了",
    5: "有些梦想虽然遥不可及，但不是不可能实现。只要你足够的强",
    6: "失败的人只有一种。就是在抵达成功之前放弃的人",
    7: "要想成为强者，就不要回避心里的恐惧，恐惧并不是弱点。强者，是要让你的敌人比你更恐惧 ",
    8: "你什么也不肯放弃，又得到了什么",
    9: "浮生若梦，为欢几何？",
    10: "言入黄花川，每逐青溪水。随山将万转，趣途无百里。声喧乱石中，色静深松里。漾漾泛菱荇，澄澄映葭苇。我心素已闲，清川澹如此。请留盘石上，垂钓将已矣。",
    11: "记住，不要发呆！",
  };

  //   console.log(typeof langArray); // 对象

  document.getElementById("lineThree").innerHTML = langArray[lineThree];
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

//  动画逻辑
// 右上角旋转的雪花
(function () {
  var degree = 0;
  setInterval(() => {
    degree += 0.5;
    document.getElementById("snow").style.transform =
      "rotate(" + degree + "deg)";
  }, 30);
})();

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
// var oBox = document.getElementById("box");
// oBox.innerHTML = "该网页被访问的次数为" + counter + "次" + " <br> " + timeNow;
console.log("该网页被访问的次数为" + counter + "次" + " \n" + timeNow);

// 考研倒计时
setInterval(getTime, 500);
let lineFour = document.querySelector("#lineFour");

function getTime() {
  //  距离考研还有多长时间
  // var kaoyan = new Date("2021-12-25 0:0:0"); // 考研时间
  let time = "2021/12/25 0:0:0"; // 考研时间
  var kaoyan = +new Date(time); //此操作兼容苹果系统

  var now = Date.now(); //当前时间

  // now = new Date(now.replace(/\-/g, "/"));  //此操作兼容苹果系统

  // console.log(now);
  var reduceTime = kaoyan - now; //距离考研还有多少毫秒数

  // 获取天
  var date = parseInt(reduceTime / (1000 * 60 * 60 * 24));
  // date < 10 ? (date = "0" + date) : date;

  // 获取小时
  var _date = reduceTime % (1000 * 60 * 60 * 24);
  var hours = parseInt(_date / (1000 * 60 * 60));
  // hours < 10 ? (hours = "0" + hours) : hours;

  // 获取分钟
  var _hours = _date % (1000 * 60 * 60);
  var minu = parseInt(_hours / (1000 * 60));
  // minu < 10 ? (minu = "0" + minu) : minu;

  // 获取秒
  var _minu = _hours % (1000 * 60);
  var sec = parseInt(_minu / 1000);
  // sec < 10 ? (sec = "0" + sec) : sec;

  var str =
    "\n" +
    date +
    "<span> 天 <span>" +
    hours +
    " 小时 " +
    minu +
    " 分 " +
    sec +
    " 秒 ";
  // console.log(str);
  lineFour.innerHTML = str;
}

function fourDegree() {
  document.querySelector(".lineFour").style.opacity = "1";
}
