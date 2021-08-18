/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 * Developed by cmpolis https://github.com/cmpolis/scrollIt.js
 * Forked by Rbto https://github.com/cmpolis/scrollIt.js
 * 
 */(function(e){"use strict";var t="ScrollIt",n="1.0.1",r={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};e.scrollIt=function(t){var n=e.extend(r,t),i=0,s=e("[data-scroll-index]:last").attr("data-scroll-index"),o=function(t){var r=e("[data-scroll-index="+t+"]").offset().top+n.topOffset;e("html,body").animate({scrollTop:r,easing:n.easing},n.scrollTime)},u=function(t){t.preventDefault();var n=e(t.target).attr("data-scroll-nav")||e(t.target).attr("data-scroll-goto");o(n)},a=function(e){var t=e.which;if(t==n.upKey&&i>0){o(parseInt(i)-1);return!1}if(t==n.downKey&&i<s){o(parseInt(i)+1);return!1}return!0},f=function(t){n.onPageChange&&t&&i!=t&&n.onPageChange(t);i=t;e("[data-scroll-nav]").removeClass(n.activeClass);e("[data-scroll-nav="+t+"]").addClass(n.activeClass);window.history&&window.history.pushState&&typeof t!="undefined"&&window.history.replaceState(t,t,"#"+t)},l=function(){var t=e(window).scrollTop(),r=e("[data-scroll-index]").filter(function(r,i){return t>=e(i).offset().top+n.topOffset&&t<e(i).offset().top+n.topOffset+e(i).outerHeight()}),i=r.first().attr("data-scroll-index");f(i)};e(window).on("scroll",l,80).on("scroll",80);e(window).on("keydown",a);e("body").on("click","[data-scroll-nav], [data-scroll-goto]",u)}})(jQuery);(function(e){var t=e.fn.on,n;e.fn.on=function(){var e=Array.apply(null,arguments),r=e[e.length-1];if(isNaN(r)||r===1&&e.pop())return t.apply(this,e);var i=e.pop(),s=e.pop();e.push(function(){var e=this,t=arguments;clearTimeout(n);n=setTimeout(function(){s.apply(e,t)},i)});return t.apply(this,e)}})(this.jQuery||this.Zepto);