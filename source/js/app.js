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
  var navlink = $('#anchor1')

  var fixedposition = $('#anchor1').offset().top
  var fixedheight = $('#anchor1').height()

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
  var navlink = $('#anchor2')

  var fixedposition = $('#anchor2').offset().top
  var fixedheight = $('#anchor2').height()

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
  var navlink = $('#anchor3')

  var fixedposition = $('#anchor3').offset().top
  var fixedheight = $('#anchor3').height()

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

if ($(window).width() > 768) {
  $('#pan-am-project').hover(function () {
    $('#pan-am-project .project-title').animate({bottom: '0px'}, 500, 'easeInOutSine')
    $('#pan-am-project .overlay').animate({height: '40%'}, 500, 'easeInOutSine')
  }, function () {
    $('#pan-am-project .project-title').animate({bottom: '25%'}, 500, 'easeInOutSine')
    $('#pan-am-project .overlay').animate({bottom: '0px', height: '100%'}, 500, 'easeInOutSine')
  })

  $('#kopi-project').hover(function () {
    $('#kopi-project .project-title').animate({bottom: '0px'}, 500, 'easeInOutSine')
    $('#kopi-project .overlay').animate({height: '40%'}, 500, 'easeInOutSine')
  }, function () {
    $('#kopi-project .project-title').animate({bottom: '25%'}, 500, 'easeInOutSine')
    $('#kopi-project .overlay').animate({bottom: '0px', height: '100%'}, 500, 'easeInOutSine')
  })

  $('#wantaim-project').hover(function () {
    $('#wantaim-project .project-title').animate({bottom: '0px'}, 500, 'easeInOutSine')
    $('#wantaim-project .overlay').animate({height: '40%'}, 500, 'easeInOutSine')
  }, function () {
    $('#wantaim-project .project-title').animate({bottom: '25%'}, 500, 'easeInOutSine')
    $('#wantaim-project .overlay').animate({bottom: '0px', height: '100%'}, 500, 'easeInOutSine')
  })

  $('#finless-project').hover(function () {
    $('#finless-project .project-title').animate({bottom: '0px'}, 500, 'easeInOutSine')
    $('#finless-project .overlay').animate({height: '40%'}, 500, 'easeInOutSine')
  }, function () {
    $('#finless-project .project-title').animate({bottom: '25%'}, 500, 'easeInOutSine')
    $('#finless-project .overlay').animate({bottom: '0px', height: '100%'}, 500, 'easeInOutSine')
  })

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500)
    return false
  })
}

