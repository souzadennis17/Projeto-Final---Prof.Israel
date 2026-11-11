document.querySelectorAll('[data-filtro-lista]').forEach((filtro) => {
  const secao = filtro.closest('section');
  const lista = secao.querySelector('ul');
  const status = secao.querySelector('[data-status-filtro]');
  const itens = Array.from(lista.querySelectorAll('li'));

  filtro.addEventListener('input', () => {
    const termo = filtro.value.trim().toLocaleLowerCase('pt-BR');
    let encontrados = 0;

    itens.forEach((item) => {
      const corresponde = item.textContent.toLocaleLowerCase('pt-BR').includes(termo);
      item.hidden = !corresponde;
      if (corresponde) encontrados += 1;
    });

    if (!termo) {
      status.textContent = '';
    } else if (encontrados === 0) {
      status.textContent = 'Nenhum resultado encontrado.';
    } else {
      status.textContent = `${encontrados} ${encontrados === 1 ? 'resultado encontrado' : 'resultados encontrados'}.`;
    }
  });
});
