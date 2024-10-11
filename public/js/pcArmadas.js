const cardContainer = document.getElementById('card');

// Ruta del archivo JSON
const pcArmadasPath = '../public/json/pcArmadas.json';

// Función para crear tarjetas dinámicamente
function createCard(name, description, price, image) {
  const div = document.createElement('div');
  div.classList.add('card');
  
  // Estructura de la tarjeta
  div.innerHTML = `
    <div class="card-img">
      <img src="${image}" class="card-img-top" alt="${name}">
    </div>
    <div class="card-detalles d-flex flex-column align-items-center justify-content-between">
      <div class="mb-2">
      <h4>${name}</h4>
      <p>${description}</p>
      <span>price: $${price}</span><br>
      </div>
      <div class="button d-flex flex-row align-items-center justify-content-center mt-1">
      <button class="px-1">Agregar al carrito</button>
      <button class="px-1">Comprar</button>
      </div>
    </div>
  `;
  
  cardContainer.appendChild(div);
}

// Función para cargar las sillas gamer desde el archivo JSON
async function loadPcArmadas() {
  try {
    const response = await fetch(pcArmadasPath);
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const pcArmadas = await response.json();

    // Itera sobre cada silla gamer y crea las tarjetas
    pcArmadas.forEach(item => {
      createCard(item.name, item.description, item.price, item.image);
    });
  } catch (error) {
    console.error("Error cargando las Pc Armadas:", error);
  }
}

// Llama a la función para cargar las sillas
loadPcArmadas();
