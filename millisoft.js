$(window).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
       if (scroll > 100) {
        $("#pricing nav").css("background-color", "rgba(219,219,219,1)");
       } else {
        $("#pricing nav").css("background-color", "transparent");
       }
     })
   })