let fruits = document.querySelectorAll(".icon img");
let dialema = document.querySelectorAll(".dialema img");
let oAnimal = document.querySelector(".animal");

// 用代码把animal图片添加进HTML
for (let i = 0; i < 32; i++) {
  let newImg = document.createElement("img");
  let num = 0;
  if (i < 9) {
    num = "0" + (i + 1);
  } else {
    num = i + 1;
  }
  console.log("num", num);
  newImg.src = "./img/animal/aichong" + num + ".svg";

  oAnimal.appendChild(newImg);
}
let animal = document.querySelectorAll(".animal img");
let btnCopyImg = document.querySelector("#copyImg");
// imgs数组储存所有图像
let imgs = [];
// 新增图片加到imgs数组里面
addImg(fruits);
addImg(dialema);
addImg(animal);
addMoveEvent();
// console.log(imgs);
// 保存上次点击的对象
let obj = {};
obj = fruits[0];

// 增加复制功能
btnCopyImg.onclick = function () {
  copyImg();
};

function copyImg() {
  let newImg = document.createElement("img");
  newImg.src = obj.src;
  newImg.style.left = obj.style.left;
  newImg.style.top = obj.style.top;
  newImg.style.width = obj.clientWidth + "px";
  imgs[imgs.length] = newImg;
  console.log(imgs);
  addMoveEvent();
  fruits[0].parentNode.appendChild(newImg);
  console.log("复制");
}

// Pc端实现鼠标拖动代码
// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].onmousedown = function (e) {
// 阻止默认事件
//     e.preventDefault();
//     downDiv(this);
//   };
// }

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].onmousemove = function (e) {
// 阻止默认事件
//     e.preventDefault();
//     moveDiv(this);
//   };
// }

// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].onmouseup = function (e) {
// 阻止默认事件
//     e.preventDefault();
//     upDiv(this);
//   };
// }

//定义变量储存div的宽高
// var obj_w, obj_h;
//定义一个变量判断是否执行移动函数
// var mouseDown = false;
//
//鼠标按下函数
// function downDiv(obj) {
//获取div的宽高
//   obj_w = obj.offsetWidth;
//   obj_h = obj.offsetHeight;
//鼠标
//   var e = event || window.event;
//e.clientX/Y 是获取鼠标相对浏览器的位置；将div中心自动居中到鼠标
//   obj.style.left = e.clientX - obj_w / 2 + "px";
//   obj.style.top = e.clientY - obj_h / 2 + "px";
//   console.log(obj.style.left, obj.style.top);
//按下时为ture,松开时为false，以判断是否执行执行mouveDiv
//   mouseDown = true;
// }

//鼠标移动函数
// function moveDiv(obj) {
//   obj_w = obj.offsetWidth;
//   obj_h = obj.offsetHeight;
//   var e = event || window.event;
//   console.log(e.clientX, e.clientY);
//   console.log(obj_w, obj_h);
//   if (mouseDown) {
//     obj.style.left = e.clientX - obj_w / 2 + "px";
//     obj.style.top = e.clientY - obj_h / 2 + "px";
//     console.log(obj.style.left, obj.style.top);
//   }
// }

//鼠标松开函数
// function upDiv(obj) {
//   mouseDown = false;
// }

// 移动端
// 获取图片宽度
widthImg = fruits[0].clientHeight;
// console.dir(widthImg);
function addMoveEvent() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("touchstart", function (e) {
      e.preventDefault();
      obj = this;
      this.style.left = e.touches[0].clientX - obj.offsetWidth / 2 + "px";
      this.style.top = e.touches[0].clientY - obj.offsetHeight / 2 + "px";
    });
  }

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("touchmove", function (e) {
      e.preventDefault();
      this.style.left = e.touches[0].clientX - obj.offsetWidth / 2 + "px";
      this.style.top = e.touches[0].clientY - obj.offsetHeight / 2 + "px";
    });
  }
}

// for (let i = 0; i < icon.length; i++) {
//   icon[i].addEventListener("touchend", function (e) {});
// }

// 放大缩小功能
let magnify = document.querySelector("#magnify");
let shrink = document.querySelector("#shrink");
let magnify2 = document.querySelector("#magnify2");
let shrink2 = document.querySelector("#shrink2");
console.log(magnify);

magnify.onclick = function () {
  console.log("放大");
  let last = obj.clientWidth;
  console.log(last);
  obj.style.width = last + 10 + "px";
};

shrink.onclick = function () {
  console.log("缩小");
  let last = obj.clientWidth;
  console.log(last);
  obj.style.width = last - 10 + "px";
};
// 微调功能

magnify2.onclick = function () {
  console.log("微放大");
  let last = obj.clientWidth;
  console.log(last);
  obj.style.width = last + 1 + "px";
};

shrink2.onclick = function () {
  console.log("微缩小");
  let last = obj.clientWidth;
  console.log(last);
  obj.style.width = last - 1 + "px";
};

// 封装添加图片函数
function addImg(imgObj) {
  for (let i = 0; i < imgObj.length; i++) {
    imgs[imgs.length] = imgObj[i];
  }
}

// 面向对象
// Class
function Element() {}
// 添加原型方法
Element.prototype.clickMove = function () {
  let oHeading = document.querySelector("#heading");
  this.addEventListener("touchstart", function (e) {
    obj = this;
    e.preventDefault();
    this.style.left = e.touches[0].clientX - obj.offsetWidth / 2 + "px";
    this.style.top = e.touches[0].clientY - obj.offsetHeight / 2 + "px";
  });
  this.addEventListener("touchmove", function (e) {
    e.preventDefault();
    this.style.left = e.touches[0].clientX - obj.offsetWidth / 2 + "px";
    this.style.top = e.touches[0].clientY - obj.offsetHeight / 2 + "px";
  });
};

let p = new Element();
