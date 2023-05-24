const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector('body')
const imgBotaoTrocaTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
    body.classList.toggle('modo-escuro')
    const modoEscuroAtivo = body.classList.contains('modo-escuro');
    if (modoEscuroAtivo) {
        imgBotaoTrocaTema.setAttribute("src", "./src/img/sun.png")
    } else {
        imgBotaoTrocaTema.setAttribute("src", "./src/img/moon.png")
    }
})