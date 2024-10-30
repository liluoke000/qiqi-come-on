// 更新倒计时时钟
function updateCountdown() {
  var now = new Date(); // 获取当前时间
  var targetDate = new Date("2025-6-14 9:00"); // 设置目标时间（2024年6月14日9:00）
  var timeDiff = targetDate.getTime() - now.getTime(); // 计算时间差（毫秒）
  console.log(timeDiff);
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 计算剩余天数
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算剩余小时数
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // 计算剩余分钟数
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // 计算剩余秒数

  var countdownLabelElement = document.getElementById("countdown-label"); // 获取倒计时标签元素
  countdownLabelElement.textContent = "距离中考还剩"; // 更新标签文本

  var countdownElement = document.getElementById("countdown"); // 获取倒计时显示元素
  countdownElement.textContent = days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒 "; // 更新倒计时显示文本
}

// 每秒钟更新倒计时时钟
setInterval(updateCountdown, 1000);

// 设置考中几率为100%
document.getElementById("calculate-btn").addEventListener("click", function() {
  var collegeInput = document.getElementById("college-input").value;
  if (collegeInput === "") {
      collegeInput = "合肥一中";
  }
  var resultElement = document.createElement("div");
  resultElement.textContent = "琦琦考入 " + collegeInput + " 的几率为 100%！";
  resultElement.style.color = 'red';
  document.body.appendChild(resultElement);
});

// 下雪背景效果
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

  const randomColor = getRandomColor();
  snowflake.style.backgroundColor = randomColor;

  const slogans = ["琦琦中考加油", "金榜题名", "考满分", "耀眼的未来", "考试顺利", "攀登高峰", "梦想成真", "勇往直前", "努力拼搏",
    "合肥一中", "合肥三中", "合肥六中", "合肥七中", "合肥八中", "合肥九中", "合肥十中", "一六八中学", "寿春中学",
    "琦琦中考加油", "琦琦中考加油", "琦琦中考加油", "琦琦中考加油",
    "合肥一中", "合肥一中",
    "合肥六中", "合肥六中",
    "合肥八中", "合肥八中",
    "一六八中学", "一六八中学"]; // Add your slogans here
  snowflake.innerHTML = slogans[Math.floor(Math.random() * slogans.length)];

  return snowflake;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function snowfall() {
  const snowContainer = document.getElementById('snow-container');
  // 雪花弹幕数目
  const numSnowflakes = 100; // Adjust the number of snowflakes here

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = createSnowflake();
    snowContainer.appendChild(snowflake);
  }
}

snowfall();