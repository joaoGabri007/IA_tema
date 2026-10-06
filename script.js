const botao = document.getElementById('botao-tema');
const body = document.body;

botao.addEventListener('click', function () {

    body.classList.toggle('escuro');

    if (body.classList.contains('escuro')) {

        botao.innerHTML = '☀️';

        localStorage.setItem('tema', 'escuro');

    } else {

        botao.innerHTML = '🌙';

        localStorage.setItem('tema', 'claro');

    }

});


// Verifica se existe um tema salvo

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {

    body.classList.add('escuro');
    botao.innerHTML = '☀️';

}