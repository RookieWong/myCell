console.log("1线程运行");
this.onmessage = (e) => {

  // 按顺序累加
  // num = e.data;

  // let executeTimeStart = Date.now();
  // let res = caculatePi(num);
  // let executeTimeEnd = Date.now();
  // let occupyTime = executeTimeEnd - executeTimeStart;

  // let objNum = {};
  // objNum.pi = res;
  // objNum.timeOccupy = occupyTime;
  // postMessage(objNum);

  // function caculatePi(num) {
  //   let sum, coefficient, varNum, denominator;
  //   sum = 1;
  //   coefficient = 1;
  //   denominator = 1;
  //   for (let i = 0; i < num; i++) {
  //     coefficient = -1 * coefficient;
  //     denominator = denominator + 2;
  //     varNum = 1 / denominator;
  //     sum += coefficient * varNum;
  //   }
  //   return 4 * sum;
  // }

  // 使用多线程代码单线程运行
  let executeTimeStart = Date.now();
  num = e.data;
  let average = parseInt(num / 4);
  let remainder = num % 4;
  console.log("average", average);
  // console.log("remainder", remainder);

  let = num1 = average + remainder;
  let num2 = (num3 = num4 = average);

  console.log(num1, num2, num3, num4);
  console.log("次数总和", num1 + num2 + num3 + num4);

  let t1 = Date.now();
  let res1 = caculatePiDivide(0, num1);
  let res2 = caculatePiDivide(num1, num2);
  let res3 = caculatePiDivide(num1 + num2, num3);
  let res4 = caculatePiDivide(num1 + num2 + num3, num4);
  let res = (res1 + res2 + res3 + res4 + 1) * 4;

  let executeTimeEnd = Date.now();
  let occupyTime = executeTimeEnd - executeTimeStart;

  let objNum = {};
  objNum.pi = res;
  objNum.timeOccupy = occupyTime;
  postMessage(objNum);

  function caculatePiDivide(sumCount, numDivi) {
    console.log("sumCount", sumCount);
    let sum, coefficient, varNum, denominator;
    sum = 0;
    //   若上次计算次数为奇数，则此处系数为负数
    if (sumCount % 2 === 1) {
      coefficient = -1;
    } else coefficient = 1;
    denominator = sumCount * 2 + 1;
    for (let i = 0; i < numDivi; i++) {
      coefficient = -1 * coefficient;
      denominator = denominator + 2;
      varNum = 1 / denominator;
      sum += coefficient * varNum;
    }
    console.log("sum", sum);
    return sum;
  }
};