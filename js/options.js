$(function(){
  var city = new cityMenu();
  city.init();

  showSelectedCities();

  $('#btnAddCity').click(function(){
    var cityName = $('#city3 option:selected').text();
    showCity(cityName);
    saveOptions();
  });

  $('#selectCityList').dblclick(function(){
    $(this).find("option:selected").remove();
  });

  $(document).on('click', '.del-btn', function(){
    var $this = $(this);
    if (confirm('确定删除？')) {
      var $tr = $this.parents('tr');
      var cityName = $tr.find('td:first').text();
      $tr.remove();
      saveOptions();
    }
  });

  function showSelectedCities(){
    var cityNameList = localStorage["cityNameList"];
    if(cityNameList){
      cityNameList = cityNameList.split(',');

      for(var i=0;i<cityNameList.length;i++){
        var cityName = cityNameList[i];
        showCity(cityName);
      }
    }
  }

  function showCity(cityName){
    var template = '<tr><td></td><td><a href="#" class="del-btn">删除</a></td></tr>';
    var $container = $('table.cities tbody');
    var $line = $(template);
    $line.find('td:first').text(cityName);
    $container.append($line);
  }

  function saveOptions(){
      var cityNameList = [];
      var $list = $('table.cities tbody td');
      $list.each(function(index, obj){
        var cityName = $(obj).text();
        if (cityName != '删除'){
          cityNameList.push(cityName);
        }
      })

      localStorage["cityNameList"] = cityNameList.join(',');
      showMessage('保存成功', 1000);

  }

  function showMessage(msg, time){
    $('#notice_wrap').text(msg).slideDown('fast');
    window.setTimeout(function () {
      $('#notice_wrap').slideUp('fase');
    }, time);
  }
});