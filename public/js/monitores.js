const cardContainer = document.getElementById('card');

// Ruta del archivo JSON
const monitoresPath = '../public/json/monitores.json';

// Función para crear tarjetas dinámicamente
function createCard(name, description, price, image) {
  const div = document.createElement('div');
  div.classList.add('card');
  
  // Estructura de la tarjeta
  div.innerHTML = `
    <div class="card-img">
      <img src="${image}" class="card-img-top" alt="${name}">
    </div>
    <div class="card-detalles">
      <h4>${name}</h4>
      <p>${description}</p>
      <span>Precio: $${price}</span><br>
      <div class="button">
      <button id="addCarrito" class="px-1">Agregar al carrito</button>
      <button id="comprar" class="px-1">Comprar</button>
      </div>
    </div>
  `;
  
  cardContainer.appendChild(div);
}

// Función para cargar los monitores desde el archivo JSON
async function loadMonitores() {
  try {
    const response = await fetch(monitoresPath);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const monitores = await response.json();

    // Itera sobre cada monitor y crea las tarjetas
    monitores.forEach(item => {
      createCard(item.name, item.description, item.price, item.image);
    });
  } catch (error) {
    console.error("Error cargando las monitores:", error);
  }
}

// Llama a la función para cargar los monitores
loadMonitores();
