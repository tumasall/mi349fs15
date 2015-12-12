function write () { /* identifies function and demand word */
$('.box').hover(function (){ /* perfoms funxtion on hover over box */
  randomcolor ='#'+(Math.random()*0xFFFFFF<<0).toString(16); /*changes color and picks randomly between 16 color scale */
  $(this).toggleClass('active') /*points to object you perform the action on (hover) and applies .active attributes */
  $(this).css('background',randomcolor); /* changes the background color of the active when object is hovered over to any color */
});
}

write() /*returns code */