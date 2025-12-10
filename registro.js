// ========================================
// SISTEMA DE AUTENTICACIÓN
// ========================================

let accionPendiente = null;
let modoActual = 'registro';

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Sistema de autenticación cargado');
    if (document.getElementById('auth-modal')) {
        configurarModalRegistro();
    }
    configurarIconosUsuario();
    configurarBotonesReserva();
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
    console.log('   - sesionActiva:', sesionActiva);
    console.log('   - usuarioActual:', usuarioActual ? 'SÍ' : 'NO');
    
    const tieneSesion = sesionActiva === 'true' && usuarioActual !== null;
    console.log('   - Resultado:', tieneSesion ? '✅ TIENE SESIÓN' : '❌ NO TIENE SESIÓN');
    
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
    console.log('👋 Sesión cerrada');
    alert('Sesión cerrada correctamente');
    window.location.href = 'index.html';
}

// ========================================
// CONFIGURAR MODAL DE REGISTRO
// ========================================
function configurarModalRegistro() {
    const form = document.querySelector('.auth-form');
    const mostrarRegistro = !usuarioEstaRegistrado();
    modoActual = mostrarRegistro ? 'registro' : 'login';
    
    if (mostrarRegistro) {
        mostrarModoRegistro();
    } else {
        mostrarModoLogin();
    }
    configurarBotonCambioModo();
}

// ========================================
// MOSTRAR MODO REGISTRO
// ========================================
function mostrarModoRegistro() {
    const titulo = document.querySelector('.modal-header h3');
    const welcomeTitle = document.querySelector('.welcome-title');
    const boton = document.querySelector('.continue-btn');
    const form = document.querySelector('.auth-form');
    
    titulo.innerHTML = '<b>Crear cuenta</b>';
    welcomeTitle.innerHTML = '<b>Bienvenido a BoliStay</b>';
    boton.textContent = 'Registrarse';
    let nombreInput = document.getElementById('nombre');
    if (!nombreInput) {
        const emailGroup = form.querySelector('.input-group');
        const nombreGroup = document.createElement('div');
        nombreGroup.className = 'input-group';
        nombreGroup.innerHTML = '<input type="text" id="nombre" placeholder="Nombre completo" required>';
        emailGroup.parentNode.insertBefore(nombreGroup, emailGroup);
    }
    const toggleMode = document.getElementById('toggle-mode');
    if (toggleMode) {
        toggleMode.innerHTML = '¿Ya tienes cuenta? <a href="#" id="switch-login"><strong>Inicia sesión</strong></a>';
    }
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
        } else {
            alert(resultado.mensaje);
        }
    });
}

// ========================================
// MOSTRAR MODO LOGIN
// ========================================
function mostrarModoLogin() {
    const titulo = document.querySelector('.modal-header h3');
    const welcomeTitle = document.querySelector('.welcome-title');
    const boton = document.querySelector('.continue-btn');
    const form = document.querySelector('.auth-form');
    
    titulo.innerHTML = '<b>Iniciar sesión</b>';
    welcomeTitle.innerHTML = '<b>¡Bienvenido de vuelta!</b>';
    boton.textContent = 'Iniciar sesión';
    const nombreGroup = form.querySelector('.input-group:has(#nombre)');
    if (nombreGroup) {
        nombreGroup.remove();
    }
    const toggleMode = document.getElementById('toggle-mode');
    if (toggleMode) {
        toggleMode.innerHTML = '¿No tienes cuenta? <a href="#" id="switch-registro"><strong>Regístrate</strong></a>';
    }
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';
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
            if (resultado.exito) {
        console.log('✅ Login exitoso, redirigiendo...');
        alert('¡Login exitoso! Bienvenido a BoliStay');
        if (accionPendiente === 'reservar') {
            window.history.back(); 
        } else {
            window.location.href = 'index.html';
        }
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
    document.addEventListener('click', function(e) {
        if (e.target.id === 'switch-login' || e.target.parentElement.id === 'switch-login') {
            e.preventDefault();
            modoActual = 'login';
            mostrarModoLogin();
            configurarBotonCambioModo();
        }
        
        if (e.target.id === 'switch-registro' || e.target.parentElement.id === 'switch-registro') {
            e.preventDefault();
            modoActual = 'registro';
            mostrarModoRegistro();
            configurarBotonCambioModo();
        }
    });
}

// ========================================
// CONFIGURAR ICONOS DE USUARIO
// ========================================
function configurarIconosUsuario() {
    const iconosUsuario = document.querySelectorAll('.profile-icon, .btn-usuario');
    
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
    const botonesReserva = document.querySelectorAll('.btn-reservar, .btn-reserve');

    botonesReserva.forEach(boton => {
        const form = boton.closest('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                if (!usuarioTieneSesion()) { 
                    e.preventDefault();
                    accionPendiente = 'reservar';
                    alert('Para reservar, primero debes iniciar sesión');
                    window.location.href = 'Registro.html';
                }
            });
        }
    });
}

// ========================================
// ACTUALIZAR ESTADO DE LA INTERFAZ
// ========================================
function actualizarInterfazUsuario() {
    if (usuarioTieneSesion()) {
        const usuarioData = JSON.parse(localStorage.getItem('usuarioActual'));
        const iconosUsuario = document.querySelectorAll('.profile-icon');
        
        iconosUsuario.forEach(icono => {
            icono.style.color = '#ff385c';
            icono.title = 'Mi perfil: ' + usuarioData.email;
        });
    }
}

actualizarInterfazUsuario();