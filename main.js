  

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

// ナビゲーション量でのアイコン変化はサイト構成のブクマに入ってる


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