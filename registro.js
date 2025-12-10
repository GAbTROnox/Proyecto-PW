

// ========================================
// SISTEMA DE AUTENTICACIÓN
// ========================================

// Variables globales
let accionPendiente = null; // Guardar si hay una reserva pendiente
let modoActual = 'registro'; // 'registro' o 'login'

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Sistema de autenticación cargado');
    
    // Verificar si estamos en la página de registro
    if (document.getElementById('auth-modal')) {
        configurarModalRegistro();
    }
    
    // Configurar iconos de usuario en todas las páginas
    configurarIconosUsuario();
    
    // Configurar botones de reserva si estamos en página de detalle/índice
    configurarBotonesReserva();

    // Actualizar color del icono de usuario al cargar
    actualizarInterfazUsuario(); 
});

// ========================================
// VERIFICAR SI EL USUARIO ESTÁ REGISTRADO
// ========================================
function usuarioEstaRegistrado() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.length > 0;
}

// ========================================
// VERIFICAR SI EL USUARIO TIENE SESIÓN ACTIVA
// ========================================
function usuarioTieneSesion() {
    const sesionActiva = localStorage.getItem('sesionActiva');
    const usuarioActual = localStorage.getItem('usuarioActual');
    
    console.log('🔍 Verificando sesión...');
    console.log('   - sesionActiva:', sesionActiva);
    console.log('   - usuarioActual:', usuarioActual ? 'SÍ' : 'NO');
    
    const tieneSesion = sesionActiva === 'true' && usuarioActual !== null;
    console.log('   - Resultado:', tieneSesion ? '✅ TIENE SESIÓN' : '❌ NO TIENE SESIÓN');
    
    return tieneSesion;
}

// ========================================
// GUARDAR USUARIO EN LOCALSTORAGE
// ========================================
function guardarUsuario(email, password, nombre) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExiste = usuarios.find(u => u.email === email);
    if (usuarioExiste) {
        return { exito: false, mensaje: 'Este correo ya está registrado' };
    }
    usuarios.push({ 
        email, 
        password, 
        nombre: nombre || 'Usuario',
        fechaRegistro: new Date().toISOString() 
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    console.log('✅ Usuario registrado:', email);
    return { exito: true, mensaje: 'Usuario registrado correctamente' };
}

// ========================================
// VERIFICAR LOGIN
// ========================================
function verificarLogin(email, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('usuarioActual', JSON.stringify(usuario));
        console.log('✅ Login exitoso:', email);
        console.log('✅ Usuario guardado:', usuario);
        console.log('✅ Sesión activa:', localStorage.getItem('sesionActiva'));
        return { exito: true, mensaje: 'Login exitoso', usuario: usuario };
    }
    
    return { exito: false, mensaje: 'Correo o contraseña incorrectos' };
}

// ========================================
// CERRAR SESIÓN
// ========================================
function cerrarSesion() {
    localStorage.setItem('sesionActiva', 'false');
    localStorage.removeItem('usuarioActual');
    localStorage.removeItem('accionPendiente'); // Limpiamos cualquier acción pendiente
    console.log('👋 Sesión cerrada');
    alert('Sesión cerrada correctamente');
    window.location.href = 'index.html';
}

// ========================================
// CONFIGURAR MODAL DE REGISTRO
// ========================================
function configurarModalRegistro() {
    const mostrarRegistro = !usuarioEstaRegistrado();
    modoActual = mostrarRegistro ? 'registro' : 'login';
    
    if (modoActual === 'registro') {
        mostrarModoRegistro();
    } else {
        mostrarModoLogin();
    }
    
    // Configuramos el listener para cambio de modo
    configurarBotonCambioModo();
}

// ========================================
// MOSTRAR MODO REGISTRO
// ========================================
function mostrarModoRegistro() {
    const form = document.querySelector('.auth-form');
    if (!form) return;

    const titulo = document.querySelector('.modal-header h3');
    const welcomeTitle = document.querySelector('.welcome-title');
    const boton = document.querySelector('.continue-btn');
    
    titulo.innerHTML = '<b>Crear cuenta</b>';
    welcomeTitle.innerHTML = '<b>Bienvenido a BoliStay</b>';
    boton.textContent = 'Registrarse';
    
    // 1. Asegurar el campo Nombre
    let nombreInput = document.getElementById('nombre');
    if (!nombreInput) {
        const emailGroup = document.getElementById('email').parentNode;
        const nombreGroup = document.createElement('div');
        nombreGroup.className = 'input-group';
        nombreGroup.innerHTML = '<input type="text" id="nombre" placeholder="Nombre completo" required>';
        emailGroup.parentNode.insertBefore(nombreGroup, emailGroup);
        nombreInput = document.getElementById('nombre'); // Reasignar
    }
    
    // 2. Texto de cambio de modo
    const toggleMode = document.getElementById('toggle-mode');
    if (toggleMode) {
        toggleMode.innerHTML = '¿Ya tienes cuenta? <a href="#" id="switch-login"><strong>Inicia sesión</strong></a>';
    }

    // 3. Reasignar listener de Submit
    // Clonar y reemplazar el formulario es la forma más segura de limpiar listeners antiguos
    const nuevoForm = form.cloneNode(true);
    form.parentNode.replaceChild(nuevoForm, form);
    
    nuevoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        if (!nombre || !email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        const resultado = guardarUsuario(email, password, nombre);
        
        if (resultado.exito) {
            alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
            modoActual = 'login';
            mostrarModoLogin();
            // No llamar a configurarBotonCambioModo aquí. El listener es global y se mantiene.
        } else {
            alert(resultado.mensaje);
        }
    });
}

// ========================================
// MOSTRAR MODO LOGIN
// ========================================
function mostrarModoLogin() {
    const form = document.querySelector('.auth-form');
    if (!form) return;

    const titulo = document.querySelector('.modal-header h3');
    const welcomeTitle = document.querySelector('.welcome-title');
    const boton = document.querySelector('.continue-btn');
    
    titulo.innerHTML = '<b>Iniciar sesión</b>';
    welcomeTitle.innerHTML = '<b>¡Bienvenido de vuelta!</b>';
    boton.textContent = 'Iniciar sesión';
    
    // 1. Eliminar el campo Nombre (si existe)
    const nombreGroup = document.getElementById('nombre')?.closest('.input-group');
    if (nombreGroup) {
        nombreGroup.remove();
    }
    
    // 2. Limpiar campos
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';

    // 3. Texto de cambio de modo
    const toggleMode = document.getElementById('toggle-mode');
    if (toggleMode) {
        toggleMode.innerHTML = '¿No tienes cuenta? <a href="#" id="switch-registro"><strong>Regístrate</strong></a>';
    }

    // 4. Reasignar listener de Submit
    const nuevoForm = form.cloneNode(true);
    form.parentNode.replaceChild(nuevoForm, form);

    nuevoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        console.log('🔑 Intentando login con:', email);
        
        if (!email || !password) {
            alert('Por favor completa todos los campos');
            return;
        }
        
        const resultado = verificarLogin(email, password);
        
        if (resultado.exito) {
            console.log('✅ Login exitoso, redirigiendo...');
            alert('¡Login exitoso! Bienvenido a BoliStay');
            
            // Actualizar interfaz antes de la redirección
            actualizarInterfazUsuario(); 
            
            if (accionPendiente === 'reservar') {
                // Volver a la página de detalle para intentar la reserva de nuevo (ahora con sesión)
                window.history.back(); 
            } else {
                // Ir al inicio
                window.location.href = 'index.html';
            }
        } else {
            alert(resultado.mensaje);
        }
    });
}

// ========================================
// CONFIGURAR BOTÓN DE CAMBIO DE MODO
// ========================================
function configurarBotonCambioModo() {
    // Escucha clics en todo el documento
    document.addEventListener('click', function(e) {
        // Lógica para cambiar a Login
        if (e.target.id === 'switch-login' || e.target.parentElement.id === 'switch-login') {
            e.preventDefault();
            if (modoActual !== 'login') {
                modoActual = 'login';
                mostrarModoLogin();
            }
        }
        
        // Lógica para cambiar a Registro
        if (e.target.id === 'switch-registro' || e.target.parentElement.id === 'switch-registro') {
            e.preventDefault();
            if (modoActual !== 'registro') {
                modoActual = 'registro';
                mostrarModoRegistro();
            }
        }
    });
}

// ========================================
// CONFIGURAR ICONOS DE USUARIO
// ========================================
function configurarIconosUsuario() {
    const iconosUsuario = document.querySelectorAll('.icono-perfil'); // Usar selector correcto del index.html
    
    iconosUsuario.forEach(icono => {
        icono.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (usuarioTieneSesion()) {
                window.location.href = 'perfil.html';
            } else {
                window.location.href = 'Registro.html';
            }
        });
    });
}

// ========================================
// CONFIGURAR BOTONES DE RESERVA (En registro.js)
// ========================================
function configurarBotonesReserva() {
    // Usamos selectores más genéricos
    const botonesReserva = document.querySelectorAll('.btn-reservar, .btn-reserve');

    botonesReserva.forEach(boton => {
        const form = boton.closest('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                // Esta lógica se ejecuta primero en cualquier página
                if (!usuarioTieneSesion()) { 
                    e.preventDefault();
                    // Guardar la acción pendiente ANTES de redirigir
                    localStorage.setItem('accionPendiente', 'reservar'); 
                    alert('Para reservar, primero debes iniciar sesión');
                    window.location.href = 'Registro.html';
                }
                // Si tiene sesión, el submit continúa y detalle.js se encarga de la reserva
            });
        }
    });
}

// ========================================
// ACTUALIZAR ESTADO DE LA INTERFAZ
// ========================================
function actualizarInterfazUsuario() {
    const iconosUsuario = document.querySelectorAll('.icono-perfil'); // Selector del icono en el header
    
    if (usuarioTieneSesion()) {
        const usuarioData = JSON.parse(localStorage.getItem('usuarioActual'));
        
        iconosUsuario.forEach(icono => {
            // Cambiar el estilo para indicar sesión activa (ej. color)
            icono.style.color = '#ff385c'; 
            icono.title = 'Mi perfil: ' + (usuarioData.nombre || 'Usuario');
        });
    } else {
        iconosUsuario.forEach(icono => {
            // Restaurar estilo si no hay sesión
            icono.style.color = '#222222'; 
            icono.title = 'Iniciar sesión / Registrarse';
        });
    }
}