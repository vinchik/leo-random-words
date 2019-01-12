const input = document.querySelector('input');
const span = document.querySelector('span');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody');

async function getWords() {
  const wordsResp = await fetch('./words.json');
  return wordsResp.json();
}

async function displaySeveralWords(n) {
  if (n < 1) {
    alert('The number of words should be at least 1');
    return;
  }

  const words = await getWords();
  tbody.innerHTML = '';

  for (let i=0; i<n; i++) {
    const randomNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomNumber];

    const tableRaw = document.createElement('tr')
    tableRaw.innerHTML = `<td>${randomWord.word}</td><td>${randomWord.translation}</td>`;

    tbody.appendChild(tableRaw);
  }

}

async function main() {
  input.addEventListener('input', () => { span.innerHTML = input.value });
  button.addEventListener('click', () => displaySeveralWords(input.value));
}

main();