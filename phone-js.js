// 判断多端代码来自 https://blog.csdn.net/ksx2333/article/details/115979413

function isMobile() {
  if (
    window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true;
  } else {
    return false;
  }
}
if (isMobile()) {
  location.href = "../page4";
} else {
  location.href = "../page2";
}
