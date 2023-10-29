function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000); // 每隔1000毫秒更新一次时间

// 获取当前日期
const currentDate = new Date();

// 获取年月日星期
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][currentDate.getDay()];

// 将年月日星期拼接成字符串
const formattedDate = `${year}-${month}-${day} ${dayOfWeek}`;

// 将日期显示到id为data的元素内
document.getElementById('data').textContent = formattedDate;