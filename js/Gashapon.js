var button2 = document.getElementById("button2");
var eggshell = document.querySelector(".eggshell");  // 添加蛋壳元素
var imgList = document.querySelectorAll(".top img");
for (var i = 0; i < imgList.length; i++) {
    imgList[i].src = 'img/1-06.png';
}

function randomJump() {
  var pageList = ["a.html", "b.html", "c.html"]; // 本地页面地址列表
  var index = Math.floor(Math.random() * 3); // 随机数，用来选择本地页面地址
  window.location.href = pageList[index]; // 跳转到随机选择的本地页面
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button2.addEventListener('click', function() {
  var current = 0;
  var len = 8;
  var time = 500;

  for (var i = 0; i < imgList.length; i++) {
    var pos = i + 1;
    imgList[i].style.transition = 'top ' + time + 'ms ease-in-out ' + i * 80 + 'ms';
    if (i < 4) {
      imgList[i].style.top = "40%";
    } else {
      imgList[i].style.top = "50%";
    }
  }

  var posList = ["63%", "60%", "48%", "63%", "63%", "50%", "54%", "50%"];
  // 延迟一定时间后再让图片回到初始位置
  setTimeout(function() {
    for (var i = 0; i < imgList.length; i++) {
      imgList[i].style.top = posList[i];
      imgList[i].src = 'img/1-06.png';
    }
  }, time + len * 10);

  // 点击按钮，使按钮旋转
  current += getRandomInt(500, 2000);
  this.style.transform = 'rotate('+current+'deg)';

  // 延迟一定时间后再让按钮回到初始状态
  setTimeout(function() {
    button2.style.transition = 'all ' + time * 2 + 'ms ease-in-out'; // 添加缓动效果
    button2.style.transform = 'rotate(0deg)';
  }, time + len * 10);

  // 同时使蛋壳出现
  eggshell.style.display = "block";
  
  setTimeout(function() {
    eggshell.classList.add("eggshake");
  }, 50);
  
  // 随机跳转到一个本地页面
  setTimeout(randomJump, getRandomInt(2000, 3000));
});