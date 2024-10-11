const contenedorCart = document.getElementById('contenedorCart')
const monitoresPath = '../public/json/monitores.json';
function saludar (name, price, image){

    contenedorCart.innerHTML = `
    <div class="card-img">
      <img src="${image}" class="card-img-top" alt="${name}">
    </div>
    <div class="card-detalles">
      <h4>${name}</h4>
      
      <span>Precio: $${price}</span><br>
      
    </div>
  `;
  
};

const addToCart = document.getElementById('addToCart');

addToCart.addEventListener('click', saludar)