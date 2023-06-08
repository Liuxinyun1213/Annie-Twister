var button2 = document.getElementById("button2");
var tupian = document.getElementById("tupian");
var eggshell = document.querySelector(".eggshell");  // 添加蛋壳元素
var imgList = document.querySelectorAll(".top img");


function randomJump() {
  var pageList = ["a", "b", "c","d","e","f","g","i","j"]; // 本地页面地址列表
  var index = Math.floor(Math.random() * 8); // 随机数，用来选择本地页面地址
  tupian.src ="img/"+pageList[index]+".png"; // 跳转到随机选择的本地页面
  button3.href="./html/"+pageList[index]+".html";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button2.addEventListener('click', function() {
	randomJump();
  var current = 0;
  var len = 10;
  var time = 500;

  for (var i = 0; i < 10; i++) {
    var pos = i + 1;
    imgList[i].style.transition = 'top ' + time + 'ms ease-in-out ' + i * 80 + 'ms';
    if (i < 5) {
      imgList[i].style.top = "40%";
    } else {
      imgList[i].style.top = "50%";
    }
  }

  var posList = ["63%", "60%", "48%", "63%", "66%", "50%", "59%", "49%","48%","52%"];
  // 延迟一定时间后再让图片回到初始位置
  setTimeout(function() {
    for (var i = 0; i < 10; i++) {
      imgList[i].style.top = posList[i];
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
  setTimeout(randomJump);
});