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
// CUANDO LA PÁGINA CARGA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ logicaDetalle cargada correctamente'); 
    
    // 1. Obtener el ID del alojamiento de la URL
    const params = new URLSearchParams(window.location.search);
    const alojamientoId = parseInt(params.get('id')); 
    
    // 2. Buscar el alojamiento en la lista
    const alojamientoSeleccionado = listadoAlojamientos.find(function(h) {
        return h.id === alojamientoId;
    });
    
    // 3. Mostrar la información o mensaje de error
    if (alojamientoSeleccionado) {
        mostrarDetalleAlojamiento(alojamientoSeleccionado);
        configurarFormularioReserva(alojamientoSeleccionado);
    } else {
        mostrarMensajeError();
    }
});

// ========================================
// FUNCIÓN: MOSTRAR DETALLE DEL ALOJAMIENTO
// ========================================
function mostrarDetalleAlojamiento(alojamiento) {
    document.title = `${alojamiento.nombre} - Detalle`;
    
    const nombreAlojamiento = document.getElementById('alojamiento-nombre');
    if (nombreAlojamiento) nombreAlojamiento.textContent = alojamiento.nombre;

    const ubicacionAlojamiento = document.getElementById('alojamiento-ubicacion');
    if (ubicacionAlojamiento) ubicacionAlojamiento.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${alojamiento.ubicacion}`;

    const calificacionAlojamiento = document.getElementById('alojamiento-calificacion');
    if (calificacionAlojamiento) calificacionAlojamiento.textContent = alojamiento.calificacion;
    
    const calificacionResumen = document.getElementById('alojamiento-calificacion-resumen');
    if (calificacionResumen) calificacionResumen.textContent = alojamiento.calificacion;

    const puntuacionReserva = document.getElementById('puntuacion-reserva');
    if (puntuacionReserva) puntuacionReserva.textContent = alojamiento.calificacion;
    const imagenPrincipal = document.querySelector('.foto-principal img');
    if (imagenPrincipal) {
        imagenPrincipal.src = alojamiento.imagen;
        imagenPrincipal.alt = alojamiento.nombre;
    }
    
    // 3. Descripción
    const descripcionAlojamiento = document.getElementById('alojamiento-descripcion');
    if (descripcionAlojamiento) descripcionAlojamiento.textContent = alojamiento.descripcion || "Descripción no disponible. Este alojamiento ofrece un excelente servicio y ubicación.";
    const nombreAnfitrion = document.getElementById('anfitrion-nombre');
    if (nombreAnfitrion) nombreAnfitrion.textContent = `Anfitrión: ${alojamiento.anfitrion || 'N/A'}`;
    const infoHuespedes = document.getElementById('huespedes-info');
    if (infoHuespedes) infoHuespedes.textContent = `${alojamiento.huespedes || 0}`;
    const infoHabitaciones = document.getElementById('habitaciones-info');
    if (infoHabitaciones) infoHabitaciones.textContent = `${alojamiento.habitaciones || 0}`;
    const infoCamas = document.getElementById('camas-info');
    if (infoCamas) infoCamas.textContent = `${alojamiento.camas || 0}`;
    const infoBanos = document.getElementById('banos-info');
    if (infoBanos) infoBanos.textContent = `${alojamiento.banos || 0}`;
    const precioNocheElement = document.getElementById('precio-noche');
    if (precioNocheElement) precioNocheElement.textContent = `$${alojamiento.precio}Bs`;
    const selectHuespedes = document.getElementById('select-huespedes');
    const maxHuespedes = alojamiento.huespedes || 4; 
    if (selectHuespedes) {
        selectHuespedes.innerHTML = '';
        for (let i = 1; i <= maxHuespedes; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i} huésped${i > 1 ? 'es' : ''}`;
            if (i === 2 && maxHuespedes >= 2) option.selected = true; // Seleccionar 2 si es posible
            selectHuespedes.appendChild(option);
        }
    }
}


// ========================================
// FUNCIÓN: MOSTRAR MENSAJE DE ERROR
// ========================================
function mostrarMensajeError() {
    document.title = "Error - Alojamiento no encontrado";
    const contenidoPrincipal = document.querySelector('.contenido-principal'); 
    if (contenidoPrincipal) {
        // Ocultar la tarjeta de reserva para el error
        const tarjetaReserva = document.querySelector('.tarjeta-reserva');
        if (tarjetaReserva) {
            tarjetaReserva.style.display = 'none';
        }
        
        // Mostrar mensaje de error en el contenedor principal
        contenidoPrincipal.innerHTML = `
            <div class="error-container" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3em; color: #ff385c; margin-bottom: 20px;"></i>
                <h2>Alojamiento no encontrado</h2>
                <p>El identificador de alojamiento no es válido o no existe.</p>
                <a href="index.html" class="btn-volver" style="position: static; margin-top: 20px; display: inline-block;">Volver al inicio</a>
            </div>
        `;
    }
}

// ========================================
// FUNCIÓN: CONFIGURAR FORMULARIO DE RESERVA
// ========================================
function configurarFormularioReserva(alojamiento) {
    const formularioReserva = document.getElementById('formulario-reserva'); 
    const inputLlegada = document.getElementById('fecha-llegada');
    const inputSalida = document.getElementById('fecha-salida');
    const selectHuespedes = document.getElementById('select-huespedes'); 
    const btnReservar = document.querySelector('.btn-reservar');
    
    if (!formularioReserva || !inputLlegada || !inputSalida || !selectHuespedes) return;

    // Función para calcular noches
    function calcularNumeroNoches() {
        const dateIn = new Date(inputLlegada.value);
        const dateOut = new Date(inputSalida.value);
        
        if (dateIn && dateOut && dateOut > dateIn) {
            const diffTime = Math.abs(dateOut - dateIn);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            return diffDays;
        }
        return 0; 
    }
    function actualizarDatosReserva() {
        const noches = calcularNumeroNoches();
        const huespedes = parseInt(selectHuespedes.value) || 1;
        
        if (noches > 0) {
            calcularYActualizarPrecio(alojamiento.precio, noches, huespedes);
            btnReservar.disabled = false;
        } else {
            calcularYActualizarPrecio(alojamiento.precio, 0, huespedes);
            btnReservar.disabled = true;
        }
    
    inputLlegada.addEventListener('change', actualizarDatosReserva);
    inputSalida.addEventListener('change', actualizarDatosReserva);
    selectHuespedes.addEventListener('change', actualizarDatosReserva);
    actualizarDatosReserva();
    formularioReserva.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const noches = calcularNumeroNoches();
        const huespedes = selectHuespedes.value;

        if (noches <= 0) {
             alert('Por favor, selecciona fechas de llegada y salida válidas (la salida debe ser posterior a la llegada).');
             return;
        }
        
        const totalElement = document.querySelector('.desglose-precio .fila-precio.total strong:last-child');
        const totalReserva = totalElement ? totalElement.textContent : 'Calculando...';

        alert(`🎉 ¡Reserva para ${alojamiento.nombre} confirmada!\n\nEstancia: ${noches} noches\nHuéspedes: ${huespedes}\nTotal: ${totalReserva}`);
    });
}

// ========================================
// FUNCIÓN: CALCULAR Y ACTUALIZAR PRECIO
// ========================================
function calcularYActualizarPrecio(precioPorNoche, noches, huespedes) {
    noches = parseInt(noches) || 0;
    huespedes = parseInt(huespedes) || 1; 

    if (precioPorNoche) {
        const tarifaLimpieza = 100; 
        const tarifaServicio = 50;  
        const subtotal = precioPorNoche * noches * huespedes; 
        const total = subtotal + tarifaLimpieza + tarifaServicio;
        actualizarDesglosePrecioHTML(precioPorNoche, noches, huespedes, subtotal, tarifaLimpieza, tarifaServicio, total);
    }
}

// ========================================
// FUNCIÓN: ACTUALIZAR DESGLOSE DE PRECIO HTML
// ========================================
function actualizarDesglosePrecioHTML(precioPorNoche, noches, huespedes, subtotal, limpieza, servicio, total) {
    const desglosePrecio = document.querySelector('.desglose-precio');
    if (noches === 0) {
        desglosePrecio.innerHTML = `
            <p style="text-align: center; color: #717171; font-weight: 600;">
                Ingresa fechas para calcular el total.
            </p>
            <div class="fila-precio total" style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px;">
                <strong>Total Estimado</strong>
                <strong>--</strong>
            </div>
        `;
        return;
    }

    desglosePrecio.innerHTML = `
        <div class="fila-precio">
            <span>${precioPorNoche}Bs x ${noches} ${noches === 1 ? 'Noche' : 'Noches'} x ${huespedes} ${huespedes === 1 ? 'Huésped' : 'Huéspedes'}</span>
            <span>${subtotal}Bs</span>
        </div>
        <div class="fila-precio">
            <span>Tarifa de limpieza</span>
            <span>${limpieza}Bs</span>
        </div>
        <div class="fila-precio">
            <span>Tarifa de servicio</span>
            <span>${servicio}Bs</span>
        </div>
        <hr>
        <div class="fila-precio total">
            <strong>Total</strong>
            <strong>${total}Bs</strong>
        </div>
    `;
}
}