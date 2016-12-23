$(function(){
  var city = new cityMenu();
  city.init();

  showSelectedCities();

  $('#btnAddCity').click(function(){
    addCity();
  });

  $('#saveBtn').click(function(){
    saveOptions();
  });

  $('#selectCityList').dblclick(function(){
    $(this).find("option:selected").remove();
  });

  function showSelectedCities(){
    var cityNameList = localStorage["cityNameList"];
    if(cityNameList){
      cityNameList = cityNameList.split(',');

      for(var i=0;i<cityNameList.length;i++){
        var cityName = cityNameList[i];
        var selectCityList = document.getElementById('selectCityList');
        selectCityList.options.add(new Option(cityName, cityName));
      }
    }
  }

  function addCity(){
    var cityName = $('#city3 option:selected').text();
    var selectCityList = document.getElementById('selectCityList');
    var isSave = true;
    for (var i = 0; i < selectCityList.options.length; i++) {
        if (selectCityList.options[i].text == cityName) {
            isSave = false;
            break;
        }
    }
    if (isSave) {
        selectCityList.options.add(new Option(cityName, cityName));
    }
  }

  function saveOptions(){
    var obj = document.getElementById("city3");
    var strsel = obj.options[obj.selectedIndex].text;
    if (strsel == "县") {
      alert("请选择您要定制的城市");
    } else {
      var selectCityList = document.getElementById('selectCityList');
      var cityNameList = "";
      for (var i = 0; i < selectCityList.options.length; i++) {
          cityNameList += ',' + (selectCityList.options[i].innerText || selectCityList.options[i].innerHTML);
      }
      cityNameList = cityNameList.substr(1);
      localStorage["cityNameList"] = cityNameList;
      showMessage('保存成功', 1000);
    }
  }

  function showMessage(msg, time){
    $('#notice_wrap').text(msg).slideDown('fast');
    window.setTimeout(function () {
      $('#notice_wrap').slideUp('fase');
    }, time);
  }
});