// ========================================
// DATOS DE LOS 15 ALOJAMIENTOS EN BOLIVIA
// ========================================
const listadoAlojamientos = [
    {
        id: 1,
        nombre: "Hotel Casa Grande",
        ubicacion: "La Paz",
        precio: 120,
        calificacion: 4.9,
        badge: "Popular",
        imagen: "Imagenes/hotel-casa-grande.webp",
        descripcion: "Acogedor apartamento ubicado en el corazón de Sopocachi. Perfecto para quienes buscan comodidad y una excelente ubicación. El espacio cuenta con todas las comodidades necesarias para una estancia inolvidable.",
        huespedes: 4,
        habitaciones: 2,
        camas: 2,
        banos: 1,
        anfitrion: "María Rodríguez",
        reseñas: [
            { nombre: "Ana L.", fecha: "Mayo 2024", texto: "Excelente ubicación y la atención de María fue inmejorable.", calificacion: 5 },
            { nombre: "Carlos G.", fecha: "Abril 2024", texto: "El lugar es tal cual las fotos, muy limpio y cómodo.", calificacion: 4 }
        ]
    },
    {
        id: 2,
        nombre: "Hotel de Sal Luna Salada",
        ubicacion: "Uyuni",
        precio: 95,
        calificacion: 5.0,
        imagen: "Imagenes/hotel-de-sal.jpeg",
        badge: null,
        descripcion: "Hotel único construido completamente de sal, ubicado cerca del majestuoso Salar de Uyuni. Una experiencia inolvidable rodeado del paisaje más impresionante de Bolivia.",
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        banos: 1,
        anfitrion: "Agencia Turística",
        reseñas: [
            { nombre: "Pedro M.", fecha: "Junio 2024", texto: "Una experiencia mágica, el hotel es increíble.", calificacion: 5 },
            { nombre: "Laura V.", fecha: "Mayo 2024", texto: "Caro, pero vale totalmente la pena por la vista.", calificacion: 5 }
        ]
    },
    {
        id: 13,
        nombre: "Hotel Regina Resort",
        ubicacion: "Cochabamba",
        precio: 98,
        calificacion: 4.7,
        imagen: "Imagenes/hotel-regina.jpg",
        badge: null,
        descripcion: "Un resort completo con piscinas y áreas verdes. Ideal para familias y relajarse en el clima de Cochabamba.",
        huespedes: 5,
        habitaciones: 3,
        camas: 3,
        banos: 2,
        anfitrion: "La familia Pérez",
        reseñas: [
            { nombre: "Ricardo R.", fecha: "Abril 2024", texto: "Perfecto para niños, la pasamos muy bien.", calificacion: 4 },
            { nombre: "Sofia C.", fecha: "Marzo 2024", texto: "Servicio de restaurante podría mejorar, pero las instalaciones son buenas.", calificacion: 4 }
        ]
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
let accommodations = []; 
let filteredAccommodations = []; 
const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let currentFilter = 'todos';
let currentCity = '';

// ========================================
// INFORMACIÓN DETALLADA DE CIUDADES
// ========================================
const cityDetails = {
    'La Paz': {
        descripcion: "Descubre la vibrante ciudad de La Paz, una metrópoli andina con impresionantes vistas y una rica cultura.",
        color: '#00A896',
        hoteles: 4 
    },
    'Uyuni': {
        descripcion: "Hospédate cerca del Salar de Uyuni, el desierto de sal más grande del mundo. Una experiencia natural única.",
        color: '#8A2BE2',
        hoteles: 1
    },
    'Cochabamba': {
        descripcion: "Conocida como la 'Ciudad Jardín', Cochabamba ofrece un clima agradable y una excelente gastronomía.",
        color: '#FF6F61',
        hoteles: 3
    },
    'Copacabana': {
        descripcion: "Un hermoso pueblo a orillas del Lago Titicaca, centro de peregrinación y belleza natural.",
        color: '#00BFFF',
        hoteles: 1
    },
    'Sucre': {
        descripcion: "La capital constitucional de Bolivia, conocida como la 'Ciudad Blanca' por su arquitectura colonial.",
        color: '#F0E68C',
        hoteles: 2
    },
    'Santa Cruz': {
        descripcion: "El motor económico de Bolivia, con un clima cálido, moderno y vibrante vida nocturna.",
        color: '#FFA500',
        hoteles: 2
    },
    'Rurrenabaque': {
        descripcion: "Puerta de entrada al Amazonas boliviano, ideal para el ecoturismo y la aventura en la selva.",
        color: '#228B22',
        hoteles: 1
    },
    'Potosí': {
        descripcion: "Una ciudad histórica de la época colonial, famosa por su Cerro Rico y su impresionante historia minera.",
        color: '#A9A9A9',
        hoteles: 1
    },
    'Tarija': {
        descripcion: "Tarija es la capital del vino boliviano, con viñedos y una atmósfera relajada y festiva.",
        color: '#800000',
        hoteles: 1
    }
};


// ========================================
// CUANDO LA PÁGINA CARGA
// ========================================
document.addEventListener('DOMContentLoaded', setupPage);

// ========================================
// FUNCIÓN: CONFIGURAR PÁGINA
// ========================================
function setupPage() {
    console.log('✅ destino.js cargado correctamente');
    const params = new URLSearchParams(window.location.search);
    currentCity = params.get('ciudad');
    accommodations = currentCity 
        ? listadoAlojamientos.filter(h => h.ubicacion === currentCity)
        : [...listadoAlojamientos];       
    filteredAccommodations = [...accommodations];
    updateDestinationHeader();
    showAccommodations();
    setupFilters();
    setupSorting();
}

// ========================================
// FUNCIÓN: ACTUALIZAR CABECERA DEL DESTINO
// ========================================
function updateDestinationHeader() {
    const infoCiudad = cityDetails[currentCity] || {
        descripcion: "Alojamientos disponibles en esta ubicación.",
        color: '#ff385c',
        hoteles: accommodations.length
    };

    const nameElement = document.getElementById('city-name');
    const descriptionElement = document.getElementById('city-description');
    const totalElement = document.getElementById('total-accommodations');
    const headerElement = document.querySelector('.destination-header');

    if (nameElement) nameElement.textContent = currentCity || "Todos los Alojamientos";
    if (descriptionElement) descriptionElement.textContent = infoCiudad.descripcion;
    if (totalElement) totalElement.textContent = `${accommodations.length} alojamientos disponibles`;
    if (headerElement) {
        headerElement.style.background = `linear-gradient(135deg, ${infoCiudad.color} 0%, ${infoCiudad.color}E6 100%)`; 
        document.title = `${currentCity || 'Todos'} - BoliStay`;
    }
}

// ========================================
// FUNCIÓN: MOSTRAR ALOJAMIENTOS (PAGINADOS)
// ========================================
function showAccommodations() {
    const container = document.getElementById('accommodations-grid');
    const noResultsElement = document.getElementById('no-results');
    container.innerHTML = '';
    
    if (filteredAccommodations.length === 0) {
        container.style.display = 'none';
        noResultsElement.style.display = 'block';
        document.getElementById('total-accommodations').textContent = `0 alojamientos disponibles`;
        document.getElementById('pagination').style.display = 'none';
        return;
    }
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageAccommodations = filteredAccommodations.slice(start, end);
    container.style.display = 'grid';
    noResultsElement.style.display = 'none';
    pageAccommodations.forEach(function(accommodation) {
        container.appendChild(createAccommodationCard(accommodation));
    });
    setupPagination();
    const totalElement = document.getElementById('total-accommodations');
    if (totalElement) {
        totalElement.textContent = `${filteredAccommodations.length} alojamientos disponibles`;
    }
}

// ========================================
// FUNCIÓN: CREAR TARJETA DE ALOJAMIENTO
// ========================================
function createAccommodationCard(accommodation) {
    const card = document.createElement('a');
    card.href = `detalle.html?id=${accommodation.id}`;
    card.className = 'accommodation-card';
    const badgeHTML = accommodation.badge 
        ? `<div class="card-badge badge-${accommodation.badge.toLowerCase()}">${accommodation.badge}</div>` 
        : '';

    card.innerHTML = `
        <div class="card-image">
            <img src="${accommodation.imagen}" alt="Imagen de ${accommodation.nombre}">
            ${badgeHTML}
        </div>
        <div class="card-info">
            <div class="card-title">
                <h3>${accommodation.nombre}</h3>
                <span class="card-rating"><i class="fas fa-star"></i> ${accommodation.calificacion}</span>
            </div>
            <p class="card-location">${accommodation.ubicacion}</p>
            <p class="card-price">
                <span class="price-value">$${accommodation.precio}Bs</span> / noche
            </p>
        </div>
    `;
    
    return card;
}


// ========================================
// FUNCIÓN: CONFIGURAR FILTROS
// ========================================
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-button');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            applyFilter();
        });
    });
}

// ========================================
// FUNCIÓN: APLICAR FILTRO
// ========================================
function applyFilter() {
    filteredAccommodations = [...accommodations];
    
    if (currentFilter === 'barato') {
        filteredAccommodations = accommodations.filter(h => h.precio <= 80);
    } else if (currentFilter === 'medio') {
        filteredAccommodations = accommodations.filter(h => h.precio > 80 && h.precio <= 110);
    } else if (currentFilter === 'caro') {
        filteredAccommodations = accommodations.filter(h => h.precio > 110);
    }
    const sortValue = document.getElementById('sort-select').value;
    sortAccommodations(filteredAccommodations, sortValue);
    currentPage = 1;
    showAccommodations();
}

// ========================================
// FUNCIÓN: CONFIGURAR ORDENAMIENTO
// ========================================
function setupSorting() {
    const selectSort = document.getElementById('sort-select');
    
    selectSort.addEventListener('change', function() {
        const sortValue = this.value;
        let accommodationsToSort = [...filteredAccommodations];
        sortAccommodations(accommodationsToSort, sortValue);
        filteredAccommodations = accommodationsToSort;
        currentPage = 1;
        showAccommodations();
    });
}

// ========================================
// FUNCIÓN: LÓGICA DE ORDENAMIENTO
// ========================================
function sortAccommodations(arr, sortValue) {
    if (sortValue === 'precio-menor') {
        arr.sort((a, b) => a.precio - b.precio);
    } else if (sortValue === 'precio-mayor') {
        arr.sort((a, b) => b.precio - a.precio);
    } else if (sortValue === 'calificacion') {
        arr.sort((a, b) => b.calificacion - a.calificacion); // Mayor a menor
    }
}

// ========================================
// FUNCIÓN: CONFIGURAR PAGINACIÓN
// ========================================
function setupPagination() {
    const totalItems = filteredAccommodations.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    
    const prevBtn = document.getElementById('prev-button');
    const nextBtn = document.getElementById('next-button');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    const paginationContainer = document.getElementById('pagination');

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';

    if (currentPageSpan) currentPageSpan.textContent = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    if (prevBtn) {
        prevBtn.onclick = function() {
            if (currentPage > 1) {
                currentPage--;
                showAccommodations();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function() {
            if (currentPage < totalPages) {
                currentPage++;
                showAccommodations();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    }
}