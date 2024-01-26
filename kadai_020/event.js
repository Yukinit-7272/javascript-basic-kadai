//btnというidを持つHTML要素を取得し、定数に代入
const Btn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、定数に代入
const Text = document.getElementById('text');

//ボタンがクリックされた時にイベント処理を実行
Btn.addEventListener('click', () => {
  //textの文字列を変更
  Text.textContent = 'ボタンをクリックしました';
});