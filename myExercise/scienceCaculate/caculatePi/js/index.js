let truePi = 3.1415926535897932384626433832795;
num.oninput = deBounce(tip, 500);
let oTip = document.createElement("span");
oTip.style.color = "green";
// 记录计算运行状态，如果已经在运行，则点击按钮无效
let isRun = false;

//提示代码
function tip(e) {
  let num = document.getElementById("num").value;
  let len = num.length;
  console.log(len);

  oTip.innerHTML = "";
  oTip.innerHTML = len + " 位数";
  let Oinpu = document.querySelector(".inpu");
  Oinpu.appendChild(oTip);
}

//封装防抖函数
function deBounce(fn, time) {
  var timer = null;
  //返回的这个函数是真正的事件函数，当事件触发 就是执行下边返回的函数
  return function (e) {
    //这里的this是指向的绑定事件的oIpt
    var _this = this;
    //每次输入文字后，触发事件，首先应该把之前没有执行完成的的定时器清掉
    clearTimeout(timer);
    //延迟time的时间 去触发核心函数fn
    timer = setTimeout(function () {
      fn.call(_this, e);
    }, time);
  };
}

// js主线程计算
run.addEventListener("click", function () {
  if (isRun) {
    return -1;
  }
  isRun = true;
  let num = document.getElementById("num").value;
  document.getElementById("run").style.backgroundColor = "green";

  let executeTimeStart = Date.now();
  let res = 0;
  res = caculatePi(num);
  document.getElementById("result").innerHTML = res;
  disCountResult(res);

  // 计算代码执行用时（单位：毫秒）
  let executeTimeEnd = Date.now();
  let occupyTime = executeTimeEnd - executeTimeStart;
  document.getElementById("useTime").innerHTML =
    parseInt(occupyTime / (1000 * 60)) +
    " 分 " +
    (parseInt(occupyTime / 1000) % 60) +
    " 秒 " +
    (occupyTime % 1000) +
    " 毫秒";
  document.getElementById("run").style.backgroundColor = "";

  setTimeout(() => {
    document.getElementById("run").style.backgroundColor = "transparent";
    alert("计算完成");
    isRun = false;
  }, 100);
});

// 点击显示保存的圆周率的值
let OtruePi = document.getElementById("trueValue");
comparison.addEventListener("click", function () {
  OtruePi.style.display = "inline-block";
});

// 统计网站被访问的次数
// 添加时间
var timeNow = Date();
function setStorage() {
  if (localStorage.getItem("counter")) {
    localStorage.setItem(
      "counter",
      Number(localStorage.getItem("counter")) + 1
    );
  } else {
    localStorage.setItem("counter", 1);
  }
  return localStorage.getItem("counter");
}
var counter = setStorage();
var oBox = document.getElementById("box");
// oBox.innerHTML = "该网页被访问的次数为" + counter + "次" + " <br> " + timeNow;
console.log("该网页被访问的次数为" + counter + "次" + " \n" + timeNow);

// 1线程计算
let run1 = document.querySelector("#run1");
run1.onclick = () => {
  if (isRun) {
    return -1;
  }
  isRun = true;
  let wo = new Worker("./js/worker.js");
  let num = document.getElementById("num").value;
  wo.postMessage(num);
  wo.onmessage = (e) => {
    console.log("主线程接收", e.data);

    let time1 = e.data.timeOccupy;
    document.getElementById("useTime").innerHTML =
      parseInt(time1 / (1000 * 60)) +
      " 分 " +
      (parseInt(time1 / 1000) % 60) +
      " 秒 " +
      (time1 % 1000) +
      " 毫秒";

    // 结果精确位数
    disCountResult(e.data.pi);
    document.getElementById("result").innerHTML = e.data.pi;
    wo.terminate();
    alert("1线程计算完成");
    isRun = false;
  };
};

// 4线程加速计算
let run2 = document.querySelector("#run2");
// console.dir(run2);
run2.onclick = () => {
  if (isRun) {
    return -1;
  }
  isRun = true;
  let num = document.getElementById("num").value;
  // 分配任务
  let average = parseInt(num / 4);
  let remainder = num % 4;
  console.log("average", average);
  console.log("remainder", remainder);
  let num1 = average + remainder;
  let num2 = (num3 = num4 = average);
  console.log(num1, num2, num3, num4);
  console.log("次数总和", num1 + num2 + num3 + num4);
  let numData = {};
  numData.num1 = num1;
  numData.num2 = num2;
  numData.num3 = num3;
  numData.num4 = num4;
  // 保存thread计算结果
  let res1 = 0,
    res2 = 0,
    res3 = 0,
    res4 = 0,
    resultPi = 0;
  //保存执行耗时
  let threadT1 = 0,
    threadT2 = 0,
    threadT3 = 0,
    threadT4 = 0,
    threadT = 0;

  // 开始统计总耗时
  let tStart = Date.now();
  // 开启thread1
  var thread1 = new Worker("./js/thread1.js");
  thread1.postMessage(numData);
  //保存thread1结果、thread1耗时
  thread1.onmessage = (e) => {
    console.log("thread1线程返回", e.data);
    res1 = e.data.pi;
    threadT1 = e.data.timeOccupy;
  };

  // 开启thread2
  var thread2 = new Worker("./js/thread2.js");
  thread2.postMessage(numData);
  //保存thread2结果、thread2耗时
  thread2.onmessage = (e) => {
    console.log("thread2线程返回", e.data);
    res2 = e.data.pi;
    threadT2 = e.data.timeOccupy;
  };

  // 开启thread3
  var thread3 = new Worker("./js/thread3.js");
  thread3.postMessage(numData);
  //保存thread3结果、thread3耗时
  thread3.onmessage = (e) => {
    console.log("thread3线程返回", e.data);
    res3 = e.data.pi;
    threadT3 = e.data.timeOccupy;
  };

  // 开启thread4
  var thread4 = new Worker("./js/thread4.js");
  thread4.postMessage(numData);
  //保存thread4结果、thread4耗时
  thread4.onmessage = (e) => {
    console.log("thread4线程返回", e.data);
    res4 = e.data.pi;
    threadT4 = e.data.timeOccupy;

    //当thread4执行完时，开始询问其他线程是否全部执行完成
    let timer = setInterval(() => {
      if (res1 !== 0 && res2 !== 0 && res3 !== 0 && res4 !== 0) {
        let tEnd = Date.now();
        threadT = tEnd - tStart;
        displayRes();
        clearInterval(timer);
      }
    }, 1);
  };

  // 统计最终结果
  function displayRes() {
    console.log(
      "threadT1",
      threadT1 + "\n" + "threadT2",
      threadT2 + "\n" + "threadT3",
      threadT3 + "\n" + "threadT4",
      threadT4
    );
    document.getElementById("useTime").innerHTML =
      parseInt(threadT / (1000 * 60)) +
      " 分 " +
      (parseInt(threadT / 1000) % 60) +
      " 秒 " +
      (threadT % 1000) +
      " 毫秒";

    let resSum = res1 + res2 + res3 + res4;
    resultPi = (resSum + 1) * 4;
    console.log("resultPi", resultPi);
    document.getElementById("result").innerHTML = resultPi;
    // 结束thread
    thread1.terminate();
    thread2.terminate();
    thread3.terminate();
    thread4.terminate();
    // 结果精确位数
    disCountResult(resultPi);

    alert("4线程计算完成");
    isRun = false;
  }
};

// 整体算法计算π
function caculatePi(num) {
  let coefficient, varNum, denominator;
  sum = 1;
  coefficient = 1;
  denominator = 1;
  for (let i = 0; i < num; i++) {
    coefficient = -1 * coefficient;
    denominator = denominator + 2;
    varNum = 1 / denominator;
    sum += coefficient * varNum;
  }
  return 4 * sum;
}

// 计算结果Pi的精确位数

function compareNumber(n1, n2) {
  let str1 = n1.toString();
  let arr1 = str1.split("");

  let str2 = n2.toFixed(15);
  console.log("str2", str2);
  let arr2 = str2.split("");

  //  截取小数部分
  arr1.shift();
  arr1.shift();
  arr2.shift();
  arr2.shift();

  //   判断重复位数
  let repeateTimes = 0;
  while (arr1[0] === arr2[0]) {
    repeateTimes++;
    arr1.shift();
    arr2.shift();
  }
  return repeateTimes;
}

// 显示计算结果
function disCountResult(resultPi) {
  let countResult = compareNumber(truePi, resultPi);
  let countInfo = document.createElement("p");
  countInfo.innerHTML = "计算结果精确到小数点后 " + countResult + " 位";
  countInfo.style.color = "red";
  OtruePi.parentNode.appendChild(countInfo);
}
