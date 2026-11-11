const botaoVoltarAoTopo = document.createElement('button');

botaoVoltarAoTopo.type = 'button';
botaoVoltarAoTopo.className = 'voltar-ao-topo';
botaoVoltarAoTopo.textContent = '↑ Topo';
botaoVoltarAoTopo.setAttribute('aria-label', 'Voltar ao topo da página');
botaoVoltarAoTopo.hidden = true;

botaoVoltarAoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  botaoVoltarAoTopo.hidden = window.scrollY < 300;
}, { passive: true });

document.body.append(botaoVoltarAoTopo);
