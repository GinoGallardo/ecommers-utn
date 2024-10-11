const cardContainer = document.getElementById('card');

// Ruta del archivo JSON
const perifericosPath = '../public/json/perifericos.json';

// Función para crear tarjetas dinámicamente
function createCard(nombre, descripcion, precio, imagen, title) {
  const div = document.createElement('div');
  div.classList.add('card');
  
  // Estructura de la tarjeta
  div.innerHTML = `
    <div class="card-img">
      <img src="${imagen}" class="card-img-top" alt="${nombre}">
    </div>
    <div class="card-body card-detalles">
      <h4 class="card-title">${nombre}</h4>
      <p class="card-text">${descripcion}</p>
      <span>Precio: $${precio}</span><br>
      <div class="button">
      <button class="px-1">Agregar al carrito</button>
      <button class="px-1">Comprar</button>
      </div>
    </div>
  `;
  
  return div;
}

// Función para cargar las periféricos desde el archivo JSON
async function loadperifericos() {
  try {
    const response = await fetch(perifericosPath);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const perifericos = await response.json();

    // Itera sobre cada periférico y crea las tarjetas
    perifericos.forEach(category => {
      const categoryTitle = category.title;

      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('card-container');

       // Añadir el título de la categoría (h3)
      const h3 = document.createElement('h3');
      h3.textContent = categoryTitle;
      categoryContainer.appendChild(h3);

     // Itera sobre cada producto dentro de la categoría y crea las tarjetas
    category.product.forEach(item => {
      const card = createCard(item.nombre, item.descripcion, item.precio, item.imagen);
      categoryContainer.appendChild(card);
    });
      // Añadir el contenedor de la categoría al contenedor principal
      cardContainer.appendChild(categoryContainer);
  });
  } catch (error) {
    console.error("Error cargando los periféricos:", error);
  }
}

// Llama a la función para cargar los periféricos
loadperifericos();
