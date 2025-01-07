const scrollContainer = document.getElementById('scroll-container');

// ホイールイベントをリスン
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();  // デフォルトの縦スクロール動作を防止

  // deltaYを使って横スクロールに変換
  scrollContainer.scrollLeft += event.deltaY * 2;  // スクロール速度を調整
});