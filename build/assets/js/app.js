$(window).scroll(function(){var e=$(window).scrollTop()/650%Math.PI;$("#logo").css({transform:"rotate("+e+"rad)"})}),window.sr=ScrollReveal(),sr.reveal("#main-intro, #work-intro",{delay:0,duration:2e3,origin:"bottom",distance:"50px"}),$(window).scroll(function(){var e=$("#nav-item-1"),t=$("#nav-item-1").offset().top,o=$("#nav-item-1").height(),i=$("#experience").offset().top,n=$("#experience").height();t+o<i?e.removeClass("white"):i+n<t?e.removeClass("white"):e.addClass("white")}),$(window).scroll(function(){var e=$("#nav-item-2"),t=$("#nav-item-2").offset().top,o=$("#nav-item-2").height(),i=$("#experience").offset().top,n=$("#experience").height();t+o<i?e.removeClass("white"):i+n<t?e.removeClass("white"):e.addClass("white")}),$(window).scroll(function(){var e=$("#nav-item-3"),t=$("#nav-item-3").offset().top,o=$("#nav-item-3").height(),i=$("#experience").offset().top,n=$("#experience").height();t+o<i?e.removeClass("white"):i+n<t?e.removeClass("white"):e.addClass("white")}),$(window).scroll(function(){var e=$("#logo"),t=$("#logo").offset().top,o=$("#logo").height(),i=$("#experience").offset().top,n=$("#experience").height();t+o<i?e.removeClass("white-logo"):i+n<t?e.removeClass("white-logo"):e.addClass("white-logo")}),$("#pan-am-project").hover(function(){$("#pan-am-project .project-title").animate({bottom:"0px"},500,"easeInOutSine"),$("#pan-am-project .overlay").animate({height:"40%"},500,"easeInOutSine")},function(){$("#pan-am-project .project-title").animate({bottom:"25%"},500,"easeInOutSine"),$("#pan-am-project .overlay").animate({bottom:"0px",height:"100%"},500,"easeInOutSine")}),768<$(window).width()&&$("#pan-am-project").hover(function(){$("#pan-am-project .project-title").css({display:"none"},500,"easeInOutSine"),$("#pan-am-project .overlay").animate({height:"40%"},500,"easeInOutSine")},function(){$("#pan-am-project .project-title").animate({bottom:"25%"},500,"easeInOutSine"),$("#pan-am-project .overlay").animate({bottom:"0px",height:"100%"},500,"easeInOutSine")}),$("#kopi-project").hover(function(){$("#kopi-project .project-title").animate({bottom:"0px"},500,"easeInOutSine"),$("#kopi-project .overlay").animate({height:"40%"},500,"easeInOutSine")},function(){$("#kopi-project .project-title").animate({bottom:"25%"},500,"easeInOutSine"),$("#kopi-project .overlay").animate({bottom:"0px",height:"100%"},500,"easeInOutSine")}),$("#wantaim-project").hover(function(){$("#wantaim-project .project-title").animate({bottom:"0px"},500,"easeInOutSine"),$("#wantaim-project .overlay").animate({height:"40%"},500,"easeInOutSine")},function(){$("#wantaim-project .project-title").animate({bottom:"25%"},500,"easeInOutSine"),$("#wantaim-project .overlay").animate({bottom:"0px",height:"100%"},500,"easeInOutSine")}),$("#finless-project").hover(function(){$("#finless-project .project-title").animate({bottom:"0px"},500,"easeInOutSine"),$("#finless-project .overlay").animate({height:"40%"},500,"easeInOutSine")},function(){$("#finless-project .project-title").animate({bottom:"25%"},500,"easeInOutSine"),$("#finless-project .overlay").animate({bottom:"0px",height:"100%"},500,"easeInOutSine")});