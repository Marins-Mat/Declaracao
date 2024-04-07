/*- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir a seção com as declarações que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele */

const botao = document.querySelector('.btn-mostrar-amor');
const mostrarAmor = document.querySelector('.amor');
 
console.log(mostrarAmor);

botao.addEventListener('click', () => {
    botao.classList.add('remover');
    mostrarAmor.classList.add('ativo')
})
