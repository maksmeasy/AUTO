// ===================== PARALLAX =====================

var scene_1 = document.getElementById('scene-1')
var parallaxInstance = new Parallax(scene_1)
var scene_2 = document.getElementById('scene-2')
var parallaxInstance = new Parallax(scene_2)

// ===================== WEBINAR =====================

var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  parallax: true,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 40,
    stretch: 118,
    depth: 349,
    modifier: 1,
    slideShadows: false,
    scale: 0.8
  }
})

jQuery(document).ready(function ($) {
  ;(function initPlayVideo () {
    // var $videoSlide = $('.swiper-slide')
    var $videoCover = $('.f-video-cover')
    // var $videoPlayerIframe = $('.f-video-player iframe')

    $videoCover.on('click', function () {
      // if ($(this).hasClass('swiper-slide-active')) {
      //   $('.webinar__slide-img').fadeOut()
      // }
      // else {

      // }
      // $(this).fadeOut()
      $(this, '.webinar__slide-img').fadeOut()
      // $(this).src += '?feature=oembed&autoplay=1'
    })
  })()
})

// $('webinar__slide-wrapper').slick({
//   swipe: true
// })

// $(function () {
//   var videos = $('.video')

//   videos.on('click', function () {
//     var elm = $(this),
//       conts = elm.contents(),
//       le = conts.length,
//       ifr = null

//     for (var i = 0; i < le; i++) {
//       if (conts[i].nodeType == 8) ifr = conts[i].textContent
//     }

//     elm.addClass('player').html(ifr)
//     elm.off('click')
//   })
// })

// $(function () {
//   var videos = $('.YTvideo')

//   $('.YTslider').on('afterChange', function () {
//     videos.children('iframe').remove()
//     videos.removeClass('player')
//   })

//   videos.on('click', function () {
//     var that = $(this)

//     setTimeout(function () {
//       var YTid = that.data('yt_id')
//       that
//         .addClass('player')
//         .append(
//           '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
//             YTid +
//             '?autoplay=0" frameborder="0" allowfullscreen></iframe>'
//         )
//     }, 400)
//   })
// })

// (function ($) {
//   jQuery(document).ready(function ($) {
//     swiper.on('transitionEnd', function (swiper) {
//       var currentSlide, slideType, player, command
//       currentSlide = $('.webinar__swiper-wrapper').find('.swiper-slide-active')
//       previousSlide = $('.webinar__swiper-wrapper').find('.swiper-slide-prev')

//       slideType = currentSlide.attr('class').split(' ')[1]
//       player = currentSlide.find('iframe').get(0)
//       command = {
//         event: 'command',
//         func: 'playVideo'
//       }
//       if (player != undefined) {
//         player.contentWindow.postMessage(JSON.stringify(command), '*')
//       }

//       slideType = previousSlide.attr('class')
//       if (slideType != undefined) {
//         slideType = slideType.split(' ')[1]
//         player = previousSlide.find('iframe').get(0)
//         command = {
//           event: 'command',
//           func: 'pauseVideo'
//         }
//         // If you don't using autoplay you should use "stopVideo" instead of "pauseVideo"
//         if (player != undefined) {
//           player.contentWindow.postMessage(JSON.stringify(command), '*')
//         }
//       }
//     })
//   })
// })(jQuery)

// --------------- SMOOTH-LINK ---------------
// --------------- SMOOTH-LINK ---------------

$('.header__nav-list a, .footer__nav-list a, .footer__logo').on(
  'click',
  function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1000)
  }
)

// --------------- WOW ---------------
// --------------- WOW ---------------

wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 150,
  mobile: true, // default
  live: true // default
})
wow.init()
