$(function(){
  $('.options').click(function(){
    chrome.extension.sendMessage({message: 'openOptions'});
  });
  showWeatherReports();

  function bindTabEvents(){
    $('.nav li').click(function(){
      var $this = $(this);
      $('.nav li').removeClass('active');
      $this.addClass('active');

      var cityName = $this.find('a').text();
      loadContent(cityName);
      $('.frame').removeClass('active');
      $('#frame-' + cityName).addClass('active');
    });
  }

  function showWeatherReports(){
    var cityNameList = getCityNameList();
    var $nav = $('.nav');
    for(var i=0;i<cityNameList.length;i++){
      var cityName = cityNameList[i];
      $nav.append(buildTab(cityName, i == 0));
      $('.tabs').append(buildTabContent(cityName, i==0));
    }
    $nav.append(buildTab('万年历', cityNameList.length == 0));
    bindTabEvents();

    setTimeout(function() {
     loadContent(cityNameList[0]);
    }, 50);
  }

  function buildTab(cityName, isActive){
    var $li = $('<li></li>').attr('role', 'presentation');
    if (isActive){
      $li.addClass('active');
    }
    var $a = $("<a/>").attr('href', 'javascript: void(0);').text(cityName);
    $li.append($a);
    return $li;
  }

  function buildTabContent(cityName, visible){
    var $frame = $('<iframe/>').attr('scrolling', "no").attr('frameborder', 0).addClass("frame").addClass("weather-frame");
    $frame.attr('id', 'frame-' + cityName);
    if (visible){
      $frame.addClass('active');
    }
    return $frame;
  }

  function loadContent(cityName) {
    var $frame = $('#frame-' + cityName);
    if (!$frame.attr('src')) {
      var wd = cityName == '万年历' ? '万年历' : cityName + '天气';
      var src = 'https://www.baidu.com/s?ie=UTF-8&wd=' + wd;
      $frame.attr('src', src);
    }
  }

  function getCityNameList(){
    var cityNameList = localStorage["cityNameList"];
    if (!cityNameList || cityNameList == ''){
      return [];
    }
    return cityNameList.split(",");
  }
});
