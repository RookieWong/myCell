// num 分为4部分
// π/4=1-1/3+1/5-1/7+1/9

// 假设num = 100
num = 13;
let average = parseInt(num / 4);
let remainder = num % 4;
console.log("average", average);
console.log("remainder", remainder);

num1 = average + remainder;
let num2 = (num3 = num4 = average);

console.log(num1, num2, num3, num4);
console.log("次数总和", num1 + num2 + num3 + num4);

// 分别计算

// π/4=1-1/3+1/5-1/7+1/9-1/11+1/13-1/15

let res1 = caculatePiDivide(0, num1); // -1/3 +1/5
let res2 = caculatePiDivide(num1, num2); // -1/7
let res3 = caculatePiDivide(num1 + num2, num3); // 1/9
let res4 = caculatePiDivide(num1 + num2 + num3, num4); // -1/11
console.log("4线程计算结果：\n", (res1 + res2 + res3 + res4 + 1) * 4);

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

// 单线程计算
console.log("单线程计算结果\n", caculatePi(num));

function caculatePi(num) {
  let sum, coefficient, varNum, denominator;
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

console.log("------------统计精确位数------------");
let caculRes = 3.141592654589191;
let Pi = 3.1415926535897932384626433832795;
console.log(compareNumber(caculRes, Pi));

function compareNumber(n1, n2) {
  let str1 = n1.toString();
  let arr1 = str1.split("");

  //   let str2 = n2.toString();
  let str2 = n2.toFixed(15);
  console.log("str2", str2);
  let arr2 = str2.split("");

  //   截取小数部分
  arr1.shift();
  arr1.shift();
  arr2.shift();
  arr2.shift();

  console.log(arr1);
  console.log(arr2);

  //   判断重复位数
  let repeateTimes = 0;
  while (arr1[0] === arr2[0]) {
    repeateTimes++;
    arr1.shift();
    arr2.shift();
  }
  return repeateTimes;
}
