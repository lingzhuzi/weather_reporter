(function () {
  chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == 'getWeatherReport') {
      var xhr = new XMLHttpRequest();
      xhr.open("GET",'https://www.baidu.com/s?ie=UTF-8&wd=' + request.city + '天气', false);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          sendResponse({html: xhr.responseText});
        }
      }
      xhr.send();
    } else if (request.message == 'openOptions'){
      openOptions();
    }
  });

  function openOptions(){
    chrome.extension.getBackgroundPage().open('options.html');
  }
})();