// Tarjetas de preview al estilo Wikipedia: cualquier <a data-preview="..."> del blog
// muestra una tarjetita con texto (y opcionalmente data-preview-img) al pasar el mouse.
// En pantallas táctiles, el primer tap abre la tarjeta en vez de seguir el link.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[data-preview]').forEach((link) => {
    link.classList.add('link-preview');

    const card = document.createElement('span');
    card.className = 'link-preview-card';

    const imagen = link.getAttribute('data-preview-img');
    if (imagen) {
      const img = document.createElement('img');
      img.src = imagen;
      img.alt = '';
      card.appendChild(img);
    }

    const texto = document.createElement('span');
    texto.textContent = link.getAttribute('data-preview');
    card.appendChild(texto);

    link.appendChild(card);

    link.addEventListener('click', (evento) => {
      if (window.matchMedia('(hover: hover)').matches) return;
      if (!link.classList.contains('activa')) {
        evento.preventDefault();
        document.querySelectorAll('.link-preview.activa').forEach((el) => el.classList.remove('activa'));
        link.classList.add('activa');
      }
    });
  });

  document.addEventListener('click', (evento) => {
    if (!evento.target.closest('.link-preview')) {
      document.querySelectorAll('.link-preview.activa').forEach((el) => el.classList.remove('activa'));
    }
  });
});
