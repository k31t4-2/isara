

// リスト表示・非表示 onクリック
// よくある質問リスト

$('.accordion__ttl').on('click', function () {

  // .accordion__ttl の隣の要素を
  // slideToggleで操作（200ミリ秒ごとに）
  $(this).next().slideToggle(200);
  // carretを付与、削除
  $(this).toggleClass("open", 200);
});


// Q and A リスト
// モバイルレスポンシブに対応させる
$('.flow__item').on("click", function () {
  // クリックした要素（this）の子要素を開く
  $(this).children(".item__description").slideToggle(300);
  $("figcaption").toggleClass("open", 200);
});


// -------------------------------------------------------
// スムーススクロール処理
// -------------------------------------------------------


// 1. すべてのhref="#"のaタグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// 2. 1のaタグにそれぞれクリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {

    // 3. ターゲットの位置を取得
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
    let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    const offset = window.pageYOffset; // 現在のスクロール量を取得
    const gap = 60; // 固定ヘッダー分の高さ
    const target = rect + offset - gap; //最終的な位置を割り出す

    // 4. スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });

  });

}

// hash = #以降の文字列のこと
// querySelectorAll = 任意のHTMl要素を検出・取得するメソッド
//
