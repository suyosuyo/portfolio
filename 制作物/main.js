

// フェードイン 画像
//ウィンドウをスクロールさせたときに
// $(window).scroll(function() {
//   $('.fadein1,.fadein2,.fadein3').each(function() {
//   //要素「hide」のTOPの縦位置を「hTop」とする
//     var hTop = $(this).offset().top;
//   //要素「hide」の高さを「hHeight」とする
//     var hHeight = $(this).height();
//   //要素「hide」のbottomの縦位置（TOPの縦位置+高さ）を「hBottom」とする
//     var hBottom = hTop + hHeight;
//   //ウィンドウ表示領域のTOPの縦位置を「wTop」とする
//     var wTop = $(window).scrollTop();
//   //ウィンドウ表示領域の高さを「wHeight」とする
//     var wHeight = $(window).height();
//   //ウィンドウ表示領域のbottomの縦位置（TOPの縦位置+高さ）を「wBottom」とする
//     var wBottom = wTop + wHeight;
//   //要素「hide」が完全にウィンドウ表示領域の内側に位置したら
//     if (hBottom <= wBottom) {
//   //要素「hide」の透明度を下げる
//       $(this).css('opacity', '1');
//       }
//     })
//   });


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