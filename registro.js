document.addEventListener('DOMContentLoaded', () => {
    const closeModalBtn = document.getElementById('close-modal-btn');
    const authModal = document.getElementById('auth-modal');
    const form = document.querySelector('.auth-form');
    
    function closeModal() {
        authModal.style.display = 'none';
    }

    // 3. Asignar Event Listeners
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', );
    }

    // 4. Manejo del formulario
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Formulario de Continuar enviado (simulación exitosa).');
            closeModal();
        });
    }
});