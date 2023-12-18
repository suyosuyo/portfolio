



// フェードイン 画像
//ウィンドウをスクロールさせたときに
$(window).scroll(function() {
  $('.fadein1,.fadein2,.fadein3').each(function() {
  //要素「hide」のTOPの縦位置を「hTop」とする
    var hTop = $(this).offset().top;
  //要素「hide」の高さを「hHeight」とする
    var hHeight = $(this).height();
  //要素「hide」のbottomの縦位置（TOPの縦位置+高さ）を「hBottom」とする
    var hBottom = hTop + hHeight;
  //ウィンドウ表示領域のTOPの縦位置を「wTop」とする
    var wTop = $(window).scrollTop();
  //ウィンドウ表示領域の高さを「wHeight」とする
    var wHeight = $(window).height();
  //ウィンドウ表示領域のbottomの縦位置（TOPの縦位置+高さ）を「wBottom」とする
    var wBottom = wTop + wHeight;
  //要素「hide」が完全にウィンドウ表示領域の内側に位置したら
    if (hBottom <= wBottom) {
  //要素「hide」の透明度を下げる
      $(this).css('opacity', '1');
      }
    })
  });



// ナビゲーション 項目ごとに変化
let targets = document.querySelectorAll('.block'); //アニメーションさせたい要素
//スクロールイベント
window.addEventListener('scroll', function () {
  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('on'); //is-animatedクラスを加える
    }
  }
}); 


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