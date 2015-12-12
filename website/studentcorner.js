<script type="text/javascript">
$(document).ready(function(){
  var nav = $('.nav');
  var pos = nav.position();

  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
      nav.addClass('fixedTop');
  })
});
</script>
