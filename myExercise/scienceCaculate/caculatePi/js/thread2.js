console.log("thread2线程运行");
this.onmessage = (e) => {
  console.log(e.data);
  num1 = e.data.num1;
  num2 = e.data.num2;

  let executeTimeStart = Date.now();
  let res2 = caculatePiDivide(num1, num2);
  let executeTimeEnd = Date.now();
  let occupyTime = executeTimeEnd - executeTimeStart;

  let objNum = {};
  objNum.pi = res2;
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