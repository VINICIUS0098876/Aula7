'use strict'

const pessoas = [
    {
        nome: 'Vinicius',
        mensagem: 'Vi, qual a proxima aula? ',
        quantidade: '1',
        tempo: 'Há 30 minutos',
        foto: 'vinicius.jfif',
        contato: 'Cauã'
    },
    {
        nome: 'Leticia',
        mensagem: 'Vai ir hoje?',
        quantidade: '3',
        tempo: 'Há 30 minutos',
        foto: 'leticia.png',
        contato: 'Vinicius'
    },
    {
        nome: 'Rubens',
        mensagem: 'Oque tem que fazer ne...',
        quantidade: '2',
        tempo: 'Há 30 minuto',
        foto: 'luis.avif',
        contato: 'Luis Backer'
    },
    {
        nome: 'Cauã',
        mensagem: 'Cauã, vai conseguir sa...',
        quantidade: '2',
        tempo: 'Há 30 minutos',
        foto: 'caua.png',
        contato: 'Gustavo Ribeiro'
    }
]

function mostrarCards(pessoas){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoas.foto}`
    img.alt = pessoas.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = pessoas.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qtdMensagem')
    qtdMensagem.textContent = pessoas.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoas.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = pessoas.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

pessoas.forEach(mostrarCards)