const botaoSorteio = document.querySelector('[data-sortear-curiosidade]');
const resultadoSorteio = document.querySelector('[data-curiosidade-sorteada]');
const fatos = Array.from(document.querySelectorAll('#fatos li'));

botaoSorteio.hidden = false;
botaoSorteio.addEventListener('click', () => {
  const indice = Math.floor(Math.random() * fatos.length);
  resultadoSorteio.textContent = `Curiosidade sorteada: ${fatos[indice].textContent}`;
});
