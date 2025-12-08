const listadoAlojamientos = [
    {
        id: 1,
        nombre: "Hotel Casa Grande",
        ubicacion: "La Paz",
        precio: 120,
        calificacion: 4.9,
        badge: "Popular",
        imagen: "Imagenes/hotel-casa-grande.webp"
    },
    {
        id: 2,
        nombre: "Hotel de Sal Luna Salada",
        ubicacion: "Uyuni",
        precio: 95,
        calificacion: 5.0,
        imagen: "Imagenes/hotel-de-sal.jpeg",
        badge: null
    },
    {
        id: 13,
        nombre: "Hotel Regina Resort",
        ubicacion: "Cochabamba",
        precio: 98,
        calificacion: 4.7,
        imagen: "Imagenes/hotel-regina.jpg",
        badge: null
    },
    {
        id: 14,
        nombre: "Gran Hotel Cochabamba",
        ubicacion: "Cochabamba",
        precio: 115,
        calificacion: 4.8,
        imagen: "Imagenes/gran-hotel.jpg",
        badge: "Popular"
    },
    {
        id: 15,
        nombre: "Hotel Diplomat",
        ubicacion: "Cochabamba",
        precio: 85,
        calificacion: 4.6,
        imagen: "Imagenes/hotel-diplomat.jpg",
        badge: null
    },
    {
        id: 3,
        nombre: "Hotel Rosario del Lago",
        ubicacion: "Copacabana",
        precio: 75,
        calificacion: 4.8,
        imagen: "Imagenes/hotel-rosario-lago.jpg",
        badge: null
    },
    {
        id: 4,
        nombre: "Hotel Parador Santa María",
        ubicacion: "Sucre",
        precio: 85,
        calificacion: 4.9,
        imagen: "Imagenes/hotel-santa-maria.webp",
        badge: null
    },
    {
        id: 5,
        nombre: "Los Tajibos Hotel",
        ubicacion: "Santa Cruz",
        precio: 145,
        calificacion: 4.9,
        imagen: "Imagenes/los-tajibos.jpg",
        badge: "Premium"
    },
    {
        id: 6,
        nombre: "Chalalan Ecolodge",
        ubicacion: "Rurrenabaque",
        precio: 110,
        calificacion: 5.0,
        imagen: "Imagenes/chalalan-ecoledge.webp",
        badge: "Eco"
    },
    {
        id: 7,
        nombre: "Hotel Colonial",
        ubicacion: "Potosí",
        precio: 65,
        calificacion: 4.7,
        imagen: "Imagenes/hotel-colonial.webp",
        badge: null
    },
    {
        id: 8,
        nombre: "Hotel Los Parrales",
        ubicacion: "Tarija",
        precio: 90,
        calificacion: 4.9,
        imagen: "Imagenes/hotel-los-parrales.webp",
        badge: null
    },
    {
        id: 9,
        nombre: "Hotel Gloria",
        ubicacion: "La Paz",
        precio: 70,
        calificacion: 4.6,
        imagen: "Imagenes/hotel-gloria.jpg",
        badge: null
    },
    {
        id: 10,
        nombre: "Hotel Mitru",
        ubicacion: "La Paz",
        precio: 95,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=350&fit=crop",
        badge: null
    },
    {
        id: 11,
        nombre: "Camino Real Suites",
        ubicacion: "Santa Cruz",
        precio: 125,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=350&fit=crop",
        badge: "Popular"
    },
    {
        id: 12,
        nombre: "Hotel La Casona",
        ubicacion: "Sucre",
        precio: 78,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&h=350&fit=crop",
        badge: null
    }
];

// ========================================
// VARIABLES GLOBALES
// ========================================
let numPaginaActual = 1;
const maxAlojamientosPorPagina = 6;
const totalDePaginas = 2;

// ========================================
// CUANDO LA PÁGINA CARGA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ logicaPrincipal cargada correctamente');
    desplegarListado(); 
    activarControlesPagina();  
    escucharBuscador();   
    activarTarjetasDestino();
});

// ========================================
// FUNCIÓN: DESPLEGAR LISTADO
// ========================================
function desplegarListado() {
    console.log('📄 Mostrando página:', numPaginaActual);
    const contenedor = document.getElementById('contenedor-listados');
    contenedor.innerHTML = '';
    const inicio = (numPaginaActual - 1) * maxAlojamientosPorPagina;  
    const fin = inicio + maxAlojamientosPorPagina;           
    

    const alojamientosAMostrar = listadoAlojamientos.slice(inicio, fin);
    console.log('🏨 Mostrando alojamientos:', alojamientosAMostrar.length);
    
    alojamientosAMostrar.forEach(function(alojamiento) {
        const tarjeta = generarTarjetaAlojamiento(alojamiento);
        contenedor.appendChild(tarjeta);
    });
    actualizarContadoresPagina();
}

// ========================================
// FUNCIÓN: GENERAR TARJETA DE ALOJAMIENTO
// ========================================
function generarTarjetaAlojamiento(alojamiento) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-alojamiento';
    tarjeta.innerHTML = `
        <div class="contenedor-imagen">
            <img src="${alojamiento.imagen}" alt="${alojamiento.nombre}" class="imagen-alojamiento">
            ${alojamiento.badge ? `<span class="etiqueta">${alojamiento.badge}</span>` : ''}
        </div>
        <div class="datos-tarjeta">
            <h3>${alojamiento.nombre}</h3>
            <p class="ubicacion-detalle">
                <i class="fas fa-map-marker-alt"></i>
                ${alojamiento.ubicacion}
            </p>
            <div class="puntuacion-estrellas">
                <i class="fas fa-star"></i>
                <span>${alojamiento.calificacion}</span>
            </div>
            <p class="costo-noche">
                ${alojamiento.precio}Bs <span>/ noche</span>
            </p>
        </div>
    `;
    
    tarjeta.addEventListener('click', function() {
        console.log('🖱️ Click en alojamiento ID:', alojamiento.id, '-', alojamiento.nombre); // Para debug
        window.location.href = 'detalle.html?id=' + alojamiento.id;
    });
    
    return tarjeta;
}

// ========================================
// FUNCIÓN: ACTIVAR CONTROLES DE PÁGINA
// ========================================
function activarControlesPagina() {
    const btnAnterior = document.getElementById('btn-pagina-anterior');
    const btnSiguiente = document.getElementById('btn-pagina-siguiente');
    
    btnAnterior.addEventListener('click', function() {
        if (numPaginaActual > 1) {
            numPaginaActual--;
            desplegarListado();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    btnSiguiente.addEventListener('click', function() {
        if (numPaginaActual < totalDePaginas) {
            numPaginaActual++;
            desplegarListado();
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }
    });
}

// ========================================
// FUNCIÓN: ACTUALIZAR CONTADORES DE PÁGINA
// ========================================
function actualizarContadoresPagina() {
    document.getElementById('contador-actual').textContent = numPaginaActual;
    document.getElementById('contador-total').textContent = totalDePaginas;
    const btnAnterior = document.getElementById('btn-pagina-anterior');
    const btnSiguiente = document.getElementById('btn-pagina-siguiente');
    if (numPaginaActual === 1) {
        btnAnterior.disabled = true;
    } else {
        btnAnterior.disabled = false;
    }
    if (numPaginaActual === totalDePaginas) {
        btnSiguiente.disabled = true;
    } else {
        btnSiguiente.disabled = false;
    }
}

// ========================================
// FUNCIÓN: ESCUCHAR BUSCADOR
// ========================================
function escucharBuscador() {
    const formulario = document.getElementById('formulario-busqueda');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const textoBusqueda = document.getElementById('input-destino').value.toLowerCase();
        
        if (textoBusqueda === '') {
            alert('Por favor escribe un destino');
            return;
        }
        
        const resultadosEncontrados = listadoAlojamientos.filter(function(alojamiento) {
            return alojamiento.ubicacion.toLowerCase().includes(textoBusqueda) ||
                   alojamiento.nombre.toLowerCase().includes(textoBusqueda);
        });
        
        // Mostrar resultados
        if (resultadosEncontrados.length > 0) {
            desplegarResultadosBusqueda(resultadosEncontrados);
        } else {
            alert('No se encontraron alojamientos en ese destino');
        }
    });
}

// ========================================
// FUNCIÓN: DESPLEGAR RESULTADOS DE BÚSQUEDA
// ========================================
function desplegarResultadosBusqueda(resultadosEncontrados) {
    const contenedor = document.getElementById('contenedor-listados');
    contenedor.innerHTML = ''; 
    resultadosEncontrados.forEach(function(alojamiento) {
        const tarjeta = generarTarjetaAlojamiento(alojamiento);
        contenedor.appendChild(tarjeta);
    });
    const contenedorPaginacion = document.getElementById('contenedor-paginacion');
    contenedorPaginacion.style.display = 'none';
    contenedorPaginacion.innerHTML = `
        <button id="btn-ver-todo" class="btn-control-pagina">
            <i class="fas fa-arrow-left"></i>
            Ver todos los alojamientos
        </button>
    `;
    contenedorPaginacion.style.display = 'flex';
    document.getElementById('btn-ver-todo').addEventListener('click', restaurarVistaPrincipal);
}

// ========================================
// FUNCIÓN: RESTAURAR VISTA PRINCIPAL
// ========================================
function restaurarVistaPrincipal() {
    numPaginaActual = 1;
    desplegarListado();
    const contenedorPaginacion = document.getElementById('contenedor-paginacion');
    contenedorPaginacion.innerHTML = `
        <button id="btn-pagina-anterior" class="btn-control-pagina">
            <i class="fas fa-chevron-left"></i>
            Anterior
        </button>
        <span class="info-pagina">
            Página <span id="contador-actual">1</span> de <span id="contador-total">2</span>
        </span>
        <button id="btn-pagina-siguiente" class="btn-control-pagina">
            Siguiente
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    activarControlesPagina();
}

// ========================================
// FUNCIÓN: ACTIVAR TARJETAS DESTINO
// ========================================
function activarTarjetasDestino() {
    const tarjetas = document.querySelectorAll('.tarjeta-destino');
    const mapeoCiudades = {
        'la paz': 'La Paz',
        'salar de uyuni': 'Uyuni', 
        'santa cruz': 'Santa Cruz',
        'sucre': 'Sucre'
    };
    
    tarjetas.forEach(function(tarjeta) {
        const nombreDestinoHTML = tarjeta.querySelector('h3').textContent.toLowerCase().trim();
        const ciudad = mapeoCiudades[nombreDestinoHTML];
        
        if (ciudad) {
            tarjeta.style.cursor = 'pointer'; 
            
            tarjeta.addEventListener('click', function() {
                console.log('🖱️ Click en destino:', ciudad);
                window.location.href = 'destinos.html?ciudad=' + encodeURIComponent(ciudad);
            });
        } else {
             console.error('⚠️ Ciudad no mapeada para el destino:', nombreDestinoHTML);
        }
    });
}

// ========================================
// SCROLL SUAVE PARA LOS ENLACES
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});