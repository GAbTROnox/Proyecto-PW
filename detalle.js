const hoteles = [
    {
        id: 1,
        nombre: "Hotel Casa Grande",
        ubicacion: "La Paz",
        precio: 120,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=350&fit=crop",
        badge: "Popular",
        descripcion: "Acogedor apartamento ubicado en el corazón de Sopocachi. Perfecto para quienes buscan comodidad y una excelente ubicación. El espacio cuenta con todas las comodidades necesarias para una estancia inolvidable.",
        huespedes: 4,
        habitaciones: 2,
        camas: 2,
        banos: 1,
        anfitrion: "María Rodríguez"
    },
    {
        id: 2,
        nombre: "Hotel de Sal Luna Salada",
        ubicacion: "Uyuni",
        precio: 95,
        calificacion: 5.0,
        imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=350&fit=crop",
        badge: "Nuevo",
        descripcion: "Hotel único construido completamente de sal, ubicado cerca del majestuoso Salar de Uyuni. Una experiencia inolvidable rodeado del paisaje más impresionante de Bolivia.",
        huespedes: 3,
        habitaciones: 1,
        camas: 2,
        banos: 1,
        anfitrion: "Carlos Mamani"
    },
    {
        id: 3,
        nombre: "Hotel Rosario del Lago",
        ubicacion: "Copacabana",
        precio: 75,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hermoso hotel con vistas al Lago Titicaca. Disfruta de la tranquilidad y belleza del lago más alto del mundo. Perfecto para relajarse y conectar con la naturaleza.",
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        banos: 1,
        anfitrion: "Ana Quispe"
    },
    {
        id: 4,
        nombre: "Hotel Parador Santa María",
        ubicacion: "Sucre",
        precio: 85,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hotel colonial en el corazón de Sucre, la ciudad blanca de Bolivia. Arquitectura histórica con todas las comodidades modernas. Cerca de los principales atractivos turísticos.",
        huespedes: 4,
        habitaciones: 2,
        camas: 3,
        banos: 2,
        anfitrion: "Pedro Gutiérrez"
    },
    {
        id: 5,
        nombre: "Los Tajibos Hotel",
        ubicacion: "Santa Cruz",
        precio: 145,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=350&fit=crop",
        badge: "Premium",
        descripcion: "Resort de lujo en Santa Cruz. Disfruta de piscina, spa, restaurantes gourmet y todas las comodidades de un hotel 5 estrellas. Ideal para una estancia premium.",
        huespedes: 6,
        habitaciones: 3,
        camas: 4,
        banos: 3,
        anfitrion: "Hotel Los Tajibos"
    },
    {
        id: 6,
        nombre: "Chalalan Ecolodge",
        ubicacion: "Rurrenabaque",
        precio: 110,
        calificacion: 5.0,
        imagen: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=350&fit=crop",
        badge: "Eco",
        descripcion: "Ecolodge en medio de la selva amazónica. Una experiencia única de turismo sostenible. Incluye tours guiados por la naturaleza y contacto con comunidades locales.",
        huespedes: 2,
        habitaciones: 1,
        camas: 2,
        banos: 1,
        anfitrion: "Comunidad Chalalan"
    },
    {
        id: 7,
        nombre: "Hotel Colonial",
        ubicacion: "Potosí",
        precio: 65,
        calificacion: 4.7,
        imagen: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hotel acogedor en Potosí con vistas al Cerro Rico. Habitaciones cálidas con calefacción. Perfecto para explorar la ciudad minera más alta del mundo.",
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        banos: 1,
        anfitrion: "Luis Choque"
    },
    {
        id: 8,
        nombre: "Hotel Los Parrales",
        ubicacion: "Tarija",
        precio: 90,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hotel rodeado de viñedos en el valle tarijeño. Incluye tours de vino y degustaciones. Disfruta del clima cálido y la hospitalidad tarijeña.",
        huespedes: 4,
        habitaciones: 2,
        camas: 2,
        banos: 2,
        anfitrion: "Familia Parrales"
    },
    {
        id: 9,
        nombre: "Hotel Gloria",
        ubicacion: "La Paz",
        precio: 70,
        calificacion: 4.6,
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hotel céntrico en La Paz, cerca de los principales atractivos turísticos. Habitaciones confortables con desayuno incluido. Excelente relación calidad-precio.",
        huespedes: 2,
        habitaciones: 1,
        camas: 1,
        banos: 1,
        anfitrion: "Hotel Gloria"
    },
    {
        id: 10,
        nombre: "Hotel Mitru",
        ubicacion: "La Paz",
        precio: 95,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Hotel boutique en Sopocachi con restaurante gourmet. Diseño moderno y elegante. Ideal para viajeros que buscan estilo y comodidad.",
        huespedes: 3,
        habitaciones: 1,
        camas: 2,
        banos: 1,
        anfitrion: "Hotel Mitru"
    },
    {
        id: 11,
        nombre: "Camino Real Suites",
        ubicacion: "Santa Cruz",
        precio: 125,
        calificacion: 4.9,
        imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=350&fit=crop",
        badge: "Popular",
        descripcion: "Suites ejecutivas en Santa Cruz con todas las comodidades para viajeros de negocios. Gimnasio, business center y excelente ubicación en la zona del Equipetrol.",
        huespedes: 4,
        habitaciones: 2,
        camas: 2,
        banos: 2,
        anfitrion: "Camino Real"
    },
    {
        id: 12,
        nombre: "Hotel La Casona",
        ubicacion: "Sucre",
        precio: 78,
        calificacion: 4.8,
        imagen: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&h=350&fit=crop",
        badge: null,
        descripcion: "Casona colonial restaurada en Sucre. Jardines hermosos y arquitectura tradicional. Una joya escondida en la capital constitucional de Bolivia.",
        huespedes: 3,
        habitaciones: 2,
        camas: 2,
        banos: 1,
        anfitrion: "Rosa Flores"
    }
];

// ========================================
// OBTENER ID DEL HOTEL DE LA URL
// ========================================
function obtenerIdDeURL() {
    // Leer los parámetros de la URL
    const parametros = new URLSearchParams(window.location.search);
    // Obtener el ID (si no existe, usar 1 por defecto)
    const id = parseInt(parametros.get('id')) || 1;
    return id;
}

// ========================================
// BUSCAR HOTEL POR ID
// ========================================
function buscarHotelPorId(id) {
    // Buscar el hotel en el array
    const hotel = hoteles.find(function(h) {
        return h.id === id;
    });
    
    // Si no se encuentra, usar el primer hotel
    return hotel || hoteles[0];
}

// ========================================
// CARGAR INFORMACIÓN DEL HOTEL
// ========================================
function cargarInformacionHotel() {
    // Obtener el ID de la URL
    const idHotel = obtenerIdDeURL();
    
    // Buscar el hotel
    const hotel = buscarHotelPorId(idHotel);
    
    // Actualizar el título de la página
    document.title = hotel.nombre + " - Detalle";
    
    // Actualizar el título principal
    document.querySelector('.hotel-header h1').textContent = 
        "Hermoso alojamiento en " + hotel.ubicacion;
    
    // Actualizar calificación y ubicación
    document.querySelector('.header-info .rating').innerHTML = 
        `<i class="fas fa-star"></i> ${hotel.calificacion} (128 reseñas)`;
    
    document.querySelector('.header-info .location').innerHTML = 
        `<i class="fas fa-map-marker-alt"></i> ${hotel.ubicacion}, Bolivia`;
    
    // Actualizar información del anfitrión
    document.querySelector('.host-info h2').textContent = 
        "Anfitrión: " + hotel.anfitrion;
    
    document.querySelector('.host-info p').textContent = 
        `${hotel.huespedes} huéspedes · ${hotel.habitaciones} habitaciones · ${hotel.camas} camas · ${hotel.banos} baño${hotel.banos > 1 ? 's' : ''}`;
    
    // Actualizar descripción
    document.querySelector('.description p').textContent = hotel.descripcion;
    
    // Actualizar imagen principal
    document.querySelector('.main-photo img').src = hotel.imagen;
    
    // Actualizar precio en la tarjeta de reserva
    document.querySelector('.price').innerHTML = 
        `$${hotel.precio}Bs <small>/ noche</small>`;
    
    // Actualizar precio en el desglose
    actualizarPrecioInicial(hotel.precio);
    
    // Guardar el precio del hotel para cálculos posteriores
    window.precioHotel = hotel.precio;
}

// ========================================
// ACTUALIZAR PRECIO INICIAL
// ========================================
function actualizarPrecioInicial(precio) {
    const tarifaLimpieza = 100;
    const tarifaServicio = 50;
    const noches = 5;
    const subtotal = precio * noches;
    const total = subtotal + tarifaLimpieza + tarifaServicio;
    
    document.querySelector('.price-breakdown').innerHTML = `
        <div class="price-row">
            <span>$${precio}Bs x ${noches} Noches</span>
            <span>${subtotal}Bs</span>
        </div>
        <div class="price-row">
            <span>Tarifa de limpieza</span>
            <span>${tarifaLimpieza}Bs</span>
        </div>
        <div class="price-row">
            <span>Tarifa de servicio</span>
            <span>${tarifaServicio}Bs</span>
        </div>
        <hr>
        <div class="price-row total">
            <strong>Total</strong>
            <strong>${total}Bs</strong>
        </div>
    `;
}

// ========================================
// CUANDO LA PÁGINA CARGA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    cargarInformacionHotel();  // CARGAR INFO DEL HOTEL
    configurarFormulario();
    calcularPrecioTotal();
});

// ========================================
// CONFIGURAR FORMULARIO DE RESERVA
// ========================================
function configurarFormulario() {
    const formulario = document.querySelector('.booking-form');
    
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const llegada = document.getElementById('checkin').value;
        const salida = document.getElementById('checkout').value;
        const huespedes = document.getElementById('guests').value;
        
        if (!llegada || !salida) {
            alert('Por favor selecciona las fechas de llegada y salida');
            return;
        }
        
        if (new Date(salida) <= new Date(llegada)) {
            alert('La fecha de salida debe ser después de la fecha de llegada');
            return;
        }
        
        alert('¡Reserva solicitada!\n\nLlegada: ' + llegada + '\nSalida: ' + salida + '\nHuéspedes: ' + huespedes);
    });
    
    document.getElementById('checkin').addEventListener('change', calcularPrecioTotal);
    document.getElementById('checkout').addEventListener('change', calcularPrecioTotal);
}

// ========================================
// CALCULAR PRECIO TOTAL
// ========================================
function calcularPrecioTotal() {
    const llegada = document.getElementById('checkin').value;
    const salida = document.getElementById('checkout').value;
    
    if (llegada && salida) {
        const fechaLlegada = new Date(llegada);
        const fechaSalida = new Date(salida);
        const diferencia = fechaSalida - fechaLlegada;
        const noches = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
        
        if (noches > 0) {
            const precioPorNoche = window.precioHotel || 120;
            const tarifaLimpieza = 100;
            const tarifaServicio = 50;
            
            const subtotal = precioPorNoche * noches;
            const total = subtotal + tarifaLimpieza + tarifaServicio;
            
            actualizarPrecioHTML(precioPorNoche, noches, subtotal, tarifaLimpieza, tarifaServicio, total);
        }
    }
}

// ========================================
// ACTUALIZAR HTML CON PRECIOS
// ========================================
function actualizarPrecioHTML(precioPorNoche, noches, subtotal, limpieza, servicio, total) {
    const desglose = document.querySelector('.price-breakdown');
    
    desglose.innerHTML = `
        <div class="price-row">
            <span>$${precioPorNoche}Bs x ${noches} ${noches === 1 ? 'Noche' : 'Noches'}</span>
            <span>${subtotal}Bs</span>
        </div>
        <div class="price-row">
            <span>Tarifa de limpieza</span>
            <span>${limpieza}Bs</span>
        </div>
        <div class="price-row">
            <span>Tarifa de servicio</span>
            <span>${servicio}Bs</span>
        </div>
        <hr>
        <div class="price-row total">
            <strong>Total</strong>
            <strong>${total}Bs</strong>
        </div>
    `;
}

// ========================================
// BOTÓN DE MOSTRAR MÁS RESEÑAS
// ========================================
const btnMostrarMas = document.querySelector('.btn-more');

if (btnMostrarMas) {
    btnMostrarMas.addEventListener('click', function() {
        alert('En una aplicación real, aquí se mostrarían todas las reseñas');
    });
}