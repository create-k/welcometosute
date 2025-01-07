// JavaScript
//console.log('Hello world!');

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded'); 
}

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );


const scrollContainer = document.getElementById('scroll-container');

// 横スクロールに変換するためのイベントリスナー
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY * 2; // スクロール速度を調整（倍率を調整可能）
});

