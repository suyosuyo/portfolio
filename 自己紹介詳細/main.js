
// レスポンシブ ナビゲーション
$(function () {
  $('#target').click(() => {
    $('#target').toggleClass('button2');
    $('#resnav').toggleClass('nav_active');
  });
  // ナビ内リンクでジャンプ時、メニューを閉じる

  $('.btn').click(() => {
    $('#target').removeClass('button2');
    $('#resnav').removeClass('nav_active');
  });
});

// おためしローディング
$(window).on('load',function(){
  $("#splash").delay(500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  // $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});