$(window).scroll(function () {
  var number = $(window).scrollTop() / 650 % Math.PI
  $('#logo').css({transform: 'rotate(' + number + 'rad)'})
})
