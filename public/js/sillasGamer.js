const cardContainer = document.getElementById('card');

// Ruta del archivo JSON
const sillasGamerPath = '../public/json/sillasGamer.json';

// Función para crear tarjetas dinámicamente
function createCard(nombre, descripcion, precio, imagen) {
  const div = document.createElement('div');
  div.classList.add('card');
  
  // Estructura de la tarjeta
  div.innerHTML = `
    <div class="card-img">
      <img src="${imagen}" class="card-img-top" alt="${nombre}">
    </div>
    <div class="card-detalles">
      <h4>${nombre}</h4>
      <p>${descripcion}</p>
      <span>Precio: $${precio}</span><br>
      <div class="button">
      <button class="btn btn-primary">Agregar al carrito</button>
      <button class="btn btn-primary">Comprar</button>
      </div>
    </div>
  `;
  
  cardContainer.appendChild(div);
}

// Función para cargar las sillas gamer desde el archivo JSON
async function loadSillasGamer() {
  try {
    const response = await fetch(sillasGamerPath);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const sillasGamer = await response.json();

    // Itera sobre cada silla gamer y crea las tarjetas
    sillasGamer.forEach(item => {
      createCard(item.nombre, item.descripcion, item.precio, item.imagen);
    });
  } catch (error) {
    console.error("Error cargando las sillas gamer:", error);
  }
}

// Llama a la función para cargar las sillas
loadSillasGamer();
