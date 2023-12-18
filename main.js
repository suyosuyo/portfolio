// 横スクロール

//    window.addEventListener("load", function(){

// //プラグインを定義
// gsap.registerPlugin(ScrollTrigger);

// const area  = document.querySelector(".scroll");
// const wrap  = document.querySelector(".mainscr");
// const items = document.querySelectorAll(".secscr");
// const num   = items.length;

// gsap.set(wrap,  { width: num * 100 + "%" });//横幅を指定
// gsap.set(items, { width: 100 / num + "%" });//横幅を指定

// gsap.to(items, {
//   xPercent: -100 * ( num - 1 ), //x方向に移動させる
//   ease: "none",
//   scrollTrigger: {
//     trigger: area, //トリガー
//     start: "top top", //開始位置
//     end: "+=3000", //終了位置 スクロール量の幅調整
//     pin: true, //ピン留め
//     scrub: true, //スクロール量に応じて動かす
//   }
// });
// });



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
//       $('.fadein1').css('display', 'block');
//       // $('.fadein1').css('transition', 'opacity 1s;');
//       $('.fadein2,.fadein3').css('opacity', '1');
//       }
//     })
//   });
  


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


// フェードインアニメーション

$(function(){
	$(window).scroll(function (){
		$('.fadein1,.fadein2,.fadein3').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});


// おためしローディング
$(window).on('load',function(){
  $("#splash").delay(500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  // $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});