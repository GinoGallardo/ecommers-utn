document.addEventListener('DOMContentLoaded', function () {
  const navbarNav = document.getElementById('navbarNav'); // Asegúrate de que uses el ID correcto 'navbarNav'

  let items = [
    { name: 'Home', href: '/ecommers/index.html' },
    { name: 'PC Armadas', href: '/ecommers/views/pcArmadas.html' },
    { name: 'Monitores', href: '/ecommers/views/monitores.html' },
    { name: 'Periféricos', href: '/ecommers/views/perifericos.html' },
    { name: 'Sillas Gamer', href: '/ecommers/views/sillasGamer.html' },
    { name: 'Contacto', href: '/ecommers/views/contacto.html' }
  ];
  function headers(items) { 
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav'); // Añadir las clases necesarias

    items.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('nav-item', 'mx-3');

      const a = document.createElement('a');
      a.classList.add('nav-link');

      a.href = item.href;
      a.textContent = item.name;

      li.appendChild(a);
      ul.appendChild(li);
    });

    navbarNav.appendChild(ul); // Inserta el <ul> en el elemento 'navbarNav'
  }

  headers(items);
});
