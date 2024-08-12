console.log(document.head);
console.log(document.body);

const btn = document.getElementById('btn');
const text = document.getElementById('text');

function handleClick() {
  text.textContent = 'ボタンをクリックしました';
}

btn.addEventListener('click', handleClick);