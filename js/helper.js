$(function() {

  if (location.hostname.includes("yidianzixun")){ // yidianzixun
    dealYidianzixun();
  } else if (location.hostname.includes("ithome")){ // ithome.com
    setTimeout(function(){
      dealIthome();
    });
  } else if (location.hostname.includes("baidu")){ // baidu.com
    setInterval(function(){
      dealBaidu();
    }, 1000);
  }

  function dealBaidu(){
    var keyWords = ["推广", "商业推广", "广告"];
    var $container = $('#content_left');
    var $adDivs = $container.children();
    $adDivs.each(function(i, obj){
      var $ad = $(obj);
      var $link = $ad.children('a').first();
      var linkText = $link.text();
      if (keyWords.indexOf(linkText) >= 0) {
        $ad.remove();
      }
    });

    var $divs = $container.children();
    for (var i = 0; i < $divs.length; i++) {
      var $div = $($divs[i]);

      if ($div.find('span.m').text() == '广告') {
        $div.remove();
      }

      if ($div.find('.ec_tuiguang_pplink').size() > 0) {
        $div.remove();
      }

      if ($div.find('.ec_tuiguang_ppimlink').size() > 0) {
        $div.remove();
      }

      var classes = $div.attr('class');
      if(!classes || classes.indexOf('result') == -1){
        $div.remove();
      }
    }
  }

  function dealIthome(){
    $('#tt50').remove();
    $('.focus_area').next().remove();
    $('.focus_area').remove();

    var $obj = $('.post_content').prev();
    if ($obj.is('a')){
      var $img = $obj.children('img');
      if ($img.size() > 0){
        $obj.remove();
      }
    }

    var keyWords = ['包邮', '立减', '白菜价'];
    var $links = $('.lst .block a');
    $links.each(function(i, l){
      var $link = $(l);
      var linkText = $link.text();
      if (keyWords.indexOf(linkText) >= 0){
        $link.text('Nice Shot!').attr('href', 'javascript:void(0)');
      }
    });
  }

  function dealYidianzixun(){
    $('.side-section').css('display', 'none');
    $('.main-section').css('width', '100%');
  }
});
