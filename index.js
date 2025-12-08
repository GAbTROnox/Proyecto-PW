const hoteles = [
    {
        id: 1,
        nombre: "Hotel Casa Grande",
        ubicacion: "La Paz",
        precio: 120,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=350&fit=crop",
        badge: "Popular"
    },
    {
        id: 2,
        nombre: "Hotel de Sal Luna Salada",
        ubicacion: "Uyuni",
        precio: 95,
        calificacion: 5.0,
        imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=350&fit=crop",
        badge: "Nuevo"
    },
    {
        id: 3,
        nombre: "Hotel Rosario del Lago",
        ubicacion: "Copacabana",
        precio: 75,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop",
        badge: null
    },
    {
        id: 4,
        nombre: "Hotel Parador Santa María",
        ubicacion: "Sucre",
        precio: 85,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=350&fit=crop",
        badge: null
    },
    {
        id: 5,
        nombre: "Los Tajibos Hotel",
        ubicacion: "Santa Cruz",
        precio: 145,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=350&fit=crop",
        badge: "Premium"
    },
    {
        id: 6,
        nombre: "Chalalan Ecolodge",
        ubicacion: "Rurrenabaque",
        precio: 110,
        calificacion: 5.0,
        imagen: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=350&fit=crop",
        badge: "Eco"
    },
    {
        id: 7,
        nombre: "Hotel Colonial",
        ubicacion: "Potosí",
        precio: 65,
        calificacion: 4.7,
        imagen: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&h=350&fit=crop",
        badge: null
    },
    {
        id: 8,
        nombre: "Hotel Los Parrales",
        ubicacion: "Tarija",
        precio: 90,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=350&fit=crop",
        badge: null
    },
    {
        id: 9,
        nombre: "Hotel Gloria",
        ubicacion: "La Paz",
        precio: 70,
        calificacion: 4.6,
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=350&fit=crop",
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
let paginaActual = 1;           // Página que estamos viendo
const hotelesPorPagina = 6;     // Cuántos hoteles mostrar por página
const totalPaginas = 2;         // Total de páginas (12 hoteles / 6 = 2 páginas)

// ========================================
// CUANDO LA PÁGINA CARGA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    mostrarHoteles();           // Mostrar los primeros 6 hoteles
    configurarPaginacion();     // Configurar los botones de paginación
    configurarBusqueda();       // Configurar el buscador
});

// ========================================
// FUNCIÓN: MOSTRAR HOTELES
// ========================================
function mostrarHoteles() {
    // Obtener el contenedor donde van los hoteles
    const contenedor = document.getElementById('listings-grid');
    contenedor.innerHTML = ''; // Limpiar el contenedor
    
    // Calcular qué hoteles mostrar
    const inicio = (paginaActual - 1) * hotelesPorPagina;  // Si página 1: 0, Si página 2: 6
    const fin = inicio + hotelesPorPagina;                  // Si página 1: 6, Si página 2: 12
    
    // Obtener solo los hoteles de esta página
    const hotelesAMostrar = hoteles.slice(inicio, fin);
    
    // Crear una tarjeta para cada hotel
    hotelesAMostrar.forEach(function(hotel) {
        const tarjeta = crearTarjetaHotel(hotel);
        contenedor.appendChild(tarjeta);
    });
    
    // Actualizar la información de la página
    actualizarInfoPagina();
}

// ========================================
// FUNCIÓN: CREAR TARJETA DE HOTEL
// ========================================
function crearTarjetaHotel(hotel) {
    // Crear el elemento article
    const tarjeta = document.createElement('article');
    tarjeta.className = 'listing-card';
    
    // Si es el primer hotel, agregar enlace a página de detalles
    if (hotel.id === 1) {
        tarjeta.style.cursor = 'pointer';
        tarjeta.onclick = function() {
            window.location.href = 'detalle.html?id=' + hotel.id;
        };
    }
    
    // Crear el HTML interno de la tarjeta
    tarjeta.innerHTML = `
        <div class="image-container">
            <img src="${hotel.imagen}" alt="${hotel.nombre}" class="listing-image">
            ${hotel.badge ? `<span class="badge">${hotel.badge}</span>` : ''}
        </div>
        <div class="info">
            <h3>${hotel.nombre}</h3>
            <p class="location">
                <i class="fas fa-map-marker-alt"></i>
                ${hotel.ubicacion}
            </p>
            <div class="rating">
                <i class="fas fa-star"></i>
                <span>${hotel.calificacion}</span>
            </div>
            <p class="price">
                ${hotel.precio} <span>/ noche</span>
            </p>
        </div>
    `;
    
    return tarjeta;
}

// ========================================
// FUNCIÓN: CONFIGURAR PAGINACIÓN
// ========================================
function configurarPaginacion() {
    // Obtener los botones
    const btnAnterior = document.getElementById('prev-btn');
    const btnSiguiente = document.getElementById('next-btn');
    
    // Cuando hagan click en "Anterior"
    btnAnterior.addEventListener('click', function() {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarHoteles();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Subir arriba suavemente
        }
    });
    
    // Cuando hagan click en "Siguiente"
    btnSiguiente.addEventListener('click', function() {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            mostrarHoteles();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Subir arriba suavemente
        }
    });
}

// ========================================
// FUNCIÓN: ACTUALIZAR INFO DE PÁGINA
// ========================================
function actualizarInfoPagina() {
    // Actualizar el texto que dice "Página 1 de 2"
    document.getElementById('current-page').textContent = paginaActual;
    document.getElementById('total-pages').textContent = totalPaginas;
    
    // Obtener los botones
    const btnAnterior = document.getElementById('prev-btn');
    const btnSiguiente = document.getElementById('next-btn');
    
    // Deshabilitar el botón "Anterior" si estamos en la página 1
    if (paginaActual === 1) {
        btnAnterior.disabled = true;
    } else {
        btnAnterior.disabled = false;
    }
    
    // Deshabilitar el botón "Siguiente" si estamos en la última página
    if (paginaActual === totalPaginas) {
        btnSiguiente.disabled = true;
    } else {
        btnSiguiente.disabled = false;
    }
}

// ========================================
// FUNCIÓN: CONFIGURAR BÚSQUEDA
// ========================================
function configurarBusqueda() {
    const formulario = document.getElementById('search-form');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evitar que la página se recargue
        
        // Obtener el texto que escribió el usuario
        const textoBusqueda = document.getElementById('destination').value.toLowerCase();
        
        if (textoBusqueda === '') {
            // Si no escribió nada, mostrar todos los hoteles
            alert('Por favor escribe un destino');
            return;
        }
        
        // Buscar hoteles que coincidan
        const hotelesEncontrados = hoteles.filter(function(hotel) {
            return hotel.ubicacion.toLowerCase().includes(textoBusqueda) ||
                   hotel.nombre.toLowerCase().includes(textoBusqueda);
        });
        
        // Mostrar resultados
        if (hotelesEncontrados.length > 0) {
            mostrarResultadosBusqueda(hotelesEncontrados);
        } else {
            alert('No se encontraron hoteles en ese destino');
        }
    });
}

// ========================================
// FUNCIÓN: MOSTRAR RESULTADOS DE BÚSQUEDA
// ========================================
function mostrarResultadosBusqueda(hotelesEncontrados) {
    const contenedor = document.getElementById('listings-grid');
    contenedor.innerHTML = ''; // Limpiar
    
    // Mostrar cada hotel encontrado
    hotelesEncontrados.forEach(function(hotel) {
        const tarjeta = crearTarjetaHotel(hotel);
        contenedor.appendChild(tarjeta);
    });
    
    // Ocultar la paginación cuando hay búsqueda
    document.getElementById('pagination').style.display = 'none';
    
    // Agregar un botón para volver a ver todos
    const contenedorPaginacion = document.getElementById('pagination');
    contenedorPaginacion.innerHTML = `
        <button onclick="volverATodos()" class="pagination-btn">
            <i class="fas fa-arrow-left"></i>
            Ver todos los hoteles
        </button>
    `;
    contenedorPaginacion.style.display = 'flex';
}

// ========================================
// FUNCIÓN: VOLVER A VER TODOS LOS HOTELES
// ========================================
function volverATodos() {
    paginaActual = 1;
    mostrarHoteles();
    configurarPaginacion();
    
    // Restaurar la paginación original
    document.getElementById('pagination').innerHTML = `
        <button id="prev-btn" class="pagination-btn">
            <i class="fas fa-chevron-left"></i>
            Anterior
        </button>
        <span class="page-info">
            Página <span id="current-page">1</span> de <span id="total-pages">2</span>
        </span>
        <button id="next-btn" class="pagination-btn">
            Siguiente
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    configurarPaginacion();
}

// ========================================
// SMOOTH SCROLL PARA LOS ENLACES
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