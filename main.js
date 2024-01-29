
// ナビゲーションが消える
$(window).scroll(function () {
  var check = window.pageYOffset; //現在のスクロール位置を取得
  var docHeight = $(document).height(); //ページ全体の高さを取得
  var dispHeight = $(window).height(); //表示されている高さを取得
  if(check > docHeight-dispHeight-60){ //消えるときのフッターからの距離を数字で調整※サイトに合わせて変更
    $('.nav-1').fadeOut(300); //数字が大きいほどゆっくり消える
  }else{
    $('.nav-1').fadeIn(300); //数字が大きいほどゆっくり出る
  }
});


//   ナビゲーション変わる
$(window).on("scroll", function () {

  if (400 < $(this).scrollTop() && 1000 > $(this).scrollTop()) {
      $(".popimg1").fadeOut();
      $(".popimg2").fadeIn();
      $(".popimg3").fadeOut();
      $(".popimg4").fadeOut();
      $(".popimg5").fadeOut();
      
      // pop
      $(".popno2").fadeOut();
      $(".popno1").fadeIn();
      $(".popno3").fadeIn();
      $(".popno4").fadeIn();
      $(".popno5").fadeIn();

  } else if (999 < $(this).scrollTop() && 1800 > $(this).scrollTop()) {
      $(".popimg3").fadeIn();
      $(".popimg2").fadeOut();
      $(".popimg1").fadeOut();
      $(".popimg4").fadeOut();
      $(".popimg5").fadeOut();

      // pop
      $(".popno3").fadeOut();
      $(".popno1").fadeIn();
      $(".popno2").fadeIn();
      $(".popno4").fadeIn();
      $(".popno5").fadeIn();

  } else if (1799 < $(this).scrollTop() && 2500 > $(this).scrollTop()) {
      $(".popimg4").fadeIn();
      $(".popimg3").fadeOut();
      $(".popimg1").fadeOut();
      $(".popimg2").fadeOut();
      $(".popimg5").fadeOut();
      
      // pop
      $(".popno4").fadeOut();
      $(".popno1").fadeIn();
      $(".popno2").fadeIn();
      $(".popno3").fadeIn();
      $(".popno5").fadeIn();

  } else if (2499 < $(this).scrollTop() && 4000 > $(this).scrollTop()) {
      $(".popimg5").fadeIn();
      $(".popimg4").fadeOut();
      $(".popimg1").fadeOut();
      $(".popimg2").fadeOut();
      $(".popimg3").fadeOut();
      
      // pop
      $(".popno5").fadeOut();
      $(".popno1").fadeIn();
      $(".popno2").fadeIn();
      $(".popno3").fadeIn();
      $(".popno4").fadeIn();

  } 

   else {
      $(".popimg1").fadeIn();
      $(".popimg2").fadeOut();
      $(".popimg3").fadeOut();
      $(".popimg4").fadeOut();
      $(".popimg5").fadeOut();
      
      // pop
      $(".popno1").fadeOut();
      $(".popno2").fadeIn();
      $(".popno3").fadeIn();
      $(".popno4").fadeIn();
      $(".popno5").fadeIn();

  }
});


// レスポンシブナビゲーション
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


// ローディング
$(window).on('load',function(){
  $("#splash").delay(500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  // $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});