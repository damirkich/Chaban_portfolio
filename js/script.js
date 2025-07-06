document.addEventListener('DOMContentLoaded', function() {
    const btnsOpenModal = document.querySelectorAll('[data-open-modal]');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');

    console.log("Elements:", {btnsOpenModal, backdrop, modal});

    btnsOpenModal.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Button clicked - removing is-hidden");

            backdrop.classList.remove('is-hidden');

  
            void modal.offsetWidth;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

document.querySelector('.modal-close').addEventListener('click', function() {
    modal.classList.remove('show'); // triggers the closing animation
    document.body.style.overflow = 'auto';


    setTimeout(() => {
        backdrop.classList.add('is-hidden'); 
    }, 1000); 
});

    });

