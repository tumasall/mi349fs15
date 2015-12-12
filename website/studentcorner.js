var x = document.getElementById("thumbnail");
var y = x.getElementsByTagName("img");


$('.thumbnail').click(function() {
  $('img').animate({
      width: "193px"
    },
    300);
});

$(document).ready(main);
