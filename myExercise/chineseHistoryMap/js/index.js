// 点击切换
var btn = document.querySelectorAll("button");
var disMap1 = document.querySelector("#displayMap1");
var disMap2 = document.querySelector("#displayMap2");
console.log(btn[0], btn[0].src);
// 设置上下位置
disMap1.style.zIndex = 2;
disMap2.style.zIndex = 1;
// 初始化下面的图片
let numLast = 1;
// 添加按钮点击事件
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    // 设置图片链接
    let numThis = i + 1;
    if (disMap1.style.zIndex === "1") {
      disMap2.src = "./img/" + numLast + ".webp";
      disMap1.src = "./img/" + numThis + ".webp";
    } else {
      disMap1.src = "./img/" + numLast + ".webp";
      disMap2.src = "./img/" + numThis + ".webp";
    }
    // 记录上一张图片
    numLast = numThis;
    // 翻转下面的图片
    let set = {};
    disMap1.style.zIndex === "2" ? (set = disMap1) : (set = disMap2);
    console.dir(set);
    set.style.transform = "translateX(-50%) rotateY(90deg)";

    // 1.5秒之后归位
    // disMap1和disMap2顺序互换
    setTimeout(() => {
      if (disMap1.style.zIndex === "2") {
        disMap1.style.zIndex = "1";
        disMap2.style.zIndex = "2";
      } else {
        disMap1.style.zIndex = "2";
        disMap2.style.zIndex = "1";
      }
    }, 1500);

    // 2秒后下面的图片再翻回来，用时隐藏下面的图片
    setTimeout(() => {
      if (disMap1.style.zIndex === "1") {
        disMap1.style.transform = "translateX(0px) rotateY(0deg)";
        console.log("1回来");
      } else {
        disMap2.style.transform = "translateX(0px) rotateY(0deg)";
        console.log("2回来");
      }
    }, 2000);
  };
}
