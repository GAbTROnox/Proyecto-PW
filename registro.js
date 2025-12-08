document.addEventListener('DOMContentLoaded', () => {
    const closeModalBtn = document.getElementById('close-modal-btn');
    const authModal = document.getElementById('auth-modal');
    const form = document.querySelector('.auth-form');
    
    function closeModal() {
        authModal.style.display = 'none';
        // Si quieres usar la clase 'active' del CSS:
        // authModal.classList.remove('active'); 
    }

    // 3. Asignar Event Listeners

    // Cierra la modal cuando se hace clic en la X
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', );
    }

    // 4. Manejo del formulario
    if (form) {
        form.addEventListener('submit', (event) => {
            // Previene que la página se recargue al enviar el formulario
            event.preventDefault(); 
            alert('Formulario de Continuar enviado (simulación exitosa).');
            closeModal();
        });
    }
});