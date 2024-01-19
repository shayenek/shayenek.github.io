/* eslint-disable no-undef */

$(function() {
  if ( document.location.href.indexOf('portfolio/') < 1 ) {
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 1000);
    setTimeout(() => {
      $('body').css('overflow-y', 'visible');
    }, 1500);
  } else {
    $('body').css('overflow-y', 'visible');
  }
});
