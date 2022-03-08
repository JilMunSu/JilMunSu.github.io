$(document).ready(function(){

  // rem 계산기
  $('#remResult').click(function() {
    const usePx = $('.remCal .usePx').val();
    const perPx = $('.remCal .perPx').val();
    const resRem = usePx/perPx;
    $('.remCal .result').text(resRem.toFixed(2));
  });

  
});