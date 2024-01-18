

// レスポンシブ ナビゲーション
$('#target').click(()=>{
  $('#target').toggleClass('button2');
  $('#resnav').toggleClass('nav_active');
});

// おためしローディング
$(window).on('load',function(){
  $("#splash").delay(500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  // $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// モーダル


$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 
});