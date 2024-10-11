let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'b00b07e15d77c2d3d5a476e02b85f22c'
let difkelvin = 273.15
let icono_animado = document.getElementById('icono_animado')
let contenedor = document.getElementById('contenedor')

// Evento para capturar el click en el botón de búsqueda
document.getElementById('botonBusqueda').addEventListener('click', () => {
  const ciudad = document.getElementById('ciudadEntrada').value.trim();
  if (ciudad) {
    FetchDatosClima(ciudad);
  } else {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = 'Por favor ingrese el nombre de una ciudad.';
    icono_animado.src = '';  // Limpiar el ícono si no se ingresa una ciudad
  }
});

// Función para obtener datos del clima
function FetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo encontrar el clima para esa ciudad.');
      }
      return response.json();
    })
    .then(data => mostrarDatosClima(data))
    .catch(error => {
      const divDatosClima = document.getElementById('datosClima');
      divDatosClima.innerHTML = 'Error: ' + error.message;
      icono_animado.src = '';  // Limpiar el ícono si hay un error
    });
}

// Función para mostrar los datos obtenidos en la página
function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById('datosClima');
  divDatosClima.innerHTML = '';  // Limpiar el contenido previo

  // Obtener los datos de la API
  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const icono = data.weather[0].main;

  // Crear elementos para mostrar los datos
  const ciudadTitulo = document.createElement('h4');
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;
  

  const temperaturaInfo = document.createElement('p');
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difkelvin)}°C`;

  const descripcion = document.createElement('span');

  // Mostrar el ícono correspondiente al clima
  switch (icono) {
    case 'Thunderstorm':
      icono_animado.src = '../../public/img/image/thunder.svg';
      descripcion.textContent = 'Tormenta';
      break;
    case 'Drizzle':
      icono_animado.src = '../../public/img/image/rainy-2.svg';
      descripcion.textContent = 'Llovizna';
      break;
    case 'Rain':
      icono_animado.src = '../../public/img/image/rainy-7.svg';
      descripcion.textContent = 'Lluvia';
      break;
    case 'Snow':
      icono_animado.src = '../../public/img/image/snowy-6.svg';
      descripcion.textContent = 'Nieve';
      break;
    case 'Clear':
      icono_animado.src = '../../public/img/image/day.svg';
      descripcion.textContent = 'Cielo Despejado';
      break;
    case 'Atmosphere':
      icono_animado.src = '../../public/img/image/weather.svg';
      descripcion.textContent = 'Inestable';
      break;
    case 'Clouds':
      icono_animado.src = '../../public/img/image/cloudy-night-1.svg';
      descripcion.textContent = 'Cielo nublado';
      break;
    default:
      icono_animado.src = '../../public/img/image/cloudy-day-1.svg';
      descripcion.textContent = 'Cielo despejado';
  }

  icono_animado.style.width = '25%';  // Ajustar el tamaño del ícono

  // Añadir los elementos creados al contenedor
  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(descripcion);
}
