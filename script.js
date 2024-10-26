// 更新倒计时时钟
function updateCountdown() {
  var now = new Date();
  var targetDate = new Date("2024-6-14 9:00");
  var timeDiff = targetDate.getTime() - now.getTime();

  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  var countdownLabelElement = document.getElementById("countdown-label");
  countdownLabelElement.textContent = "距离中考还剩";

  var countdownElement = document.getElementById("countdown");
  countdownElement.textContent = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
}

// 每秒钟更新倒计时时钟
setInterval(updateCountdown, 1000);

// 设置考中几率为100%
document.getElementById("calculate-btn").addEventListener("click", function() {
  var collegeInput = document.getElementById("college-input").value;
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

  const slogans = ["琦琦中考加油", "金榜题名", "考满分", "耀眼的未来", "考试顺利", "攀登高峰", "梦想成真", "勇往直前", "努力拼搏"]; // Add your slogans here
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
  const numSnowflakes = 50; // Adjust the number of snowflakes here

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = createSnowflake();
    snowContainer.appendChild(snowflake);
  }
}

snowfall();