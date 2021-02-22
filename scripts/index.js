const h1 = document.querySelector('#titulo');
h1.innerText = 'Outro titulo interno';

const a = document.querySelector('article a.botao');

a.addEventListener('click', (event) => {
    event.preventDefault();
    alert('foi clicado');
})