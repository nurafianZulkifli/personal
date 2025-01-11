function copyToClipboard() {
    var $temp = $("<input>");
    var $url = $(location).attr('href');
    
    $('.clipboard').on('click', function() {
      $("body").append($temp);
      $temp.val($url).select();
      document.execCommand("copy");
      $temp.remove();
      $(".clipboard-copied").text("URL Copied!");
    })
  }