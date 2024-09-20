const words = {
    A: ['apple', 'ant'],
    B: ['bat', 'bag'],
    C: ['cat', 'car'],
    H: ['hat', 'hot'],
};

const buttonContainer = document.getElementById('buttons');
const wordListContainer = document.getElementById('wordList');

for (let letter in words) {
    const button = document.createElement('button');
    button.innerText = letter;
    button.onclick = () => {
        wordListContainer.innerHTML = words[letter].join(', ');
    };
    buttonContainer.appendChild(button);
}
