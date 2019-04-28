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

$(window).scroll(function () {
  var navlink = $('#nav-item-1')

  var fixedposition = $('#nav-item-1').offset().top
  var fixedheight = $('#nav-item-1').height()

  var toCrossposition = $('#experience').offset().top
  var toCrossheight = $('#experience').height()

  if (fixedposition + fixedheight < toCrossposition) {
    navlink.removeClass('white')
  } else if (fixedposition > toCrossposition + toCrossheight) {
    navlink.removeClass('white')
  } else {
    navlink.addClass('white')
  }
})

$(window).scroll(function () {
  var navlink = $('#nav-item-2')

  var fixedposition = $('#nav-item-2').offset().top
  var fixedheight = $('#nav-item-2').height()

  var toCrossposition = $('#experience').offset().top
  var toCrossheight = $('#experience').height()

  if (fixedposition + fixedheight < toCrossposition) {
    navlink.removeClass('white')
  } else if (fixedposition > toCrossposition + toCrossheight) {
    navlink.removeClass('white')
  } else {
    navlink.addClass('white')
  }
})

$(window).scroll(function () {
  var navlink = $('#nav-item-3')

  var fixedposition = $('#nav-item-3').offset().top
  var fixedheight = $('#nav-item-3').height()

  var toCrossposition = $('#experience').offset().top
  var toCrossheight = $('#experience').height()

  if (fixedposition + fixedheight < toCrossposition) {
    navlink.removeClass('white')
  } else if (fixedposition > toCrossposition + toCrossheight) {
    navlink.removeClass('white')
  } else {
    navlink.addClass('white')
  }
})

$(window).scroll(function () {
  var navlink = $('#logo')

  var fixedposition = $('#logo').offset().top
  var fixedheight = $('#logo').height()

  var toCrossposition = $('#experience').offset().top
  var toCrossheight = $('#experience').height()

  if (fixedposition + fixedheight < toCrossposition) {
    navlink.removeClass('white-logo')
  } else if (fixedposition > toCrossposition + toCrossheight) {
    navlink.removeClass('white-logo')
  } else {
    navlink.addClass('white-logo')
  }
})
