$(window).scroll(function () {
  var number = $(window).scrollTop() / 650 % Math.PI
  $('#logo').css({transform: 'rotate(' + number + 'rad)'})
})

window.sr = ScrollReveal()

sr.reveal('#main-intro, #work-intro', {
  delay: 0,
  duration: 2000,
  origin: 'bottom',
  distance: '50px'
})
