const scrollContainer = document.getElementById('scroll-container');

// ページ読み込み時に右端にスクロール位置を設定
scrollContainer.scrollLeft = scrollContainer.scrollWidth;

// ホイールイベントでスクロールを制御
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft -= event.deltaY * 2; // スクロール方向を反転
});