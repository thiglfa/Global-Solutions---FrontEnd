document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded and ready for interaction.");

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

function filterTable() {
    const filter = document.getElementById('pollution-level').value;
    const rows = document.querySelectorAll('#pollutionTable tbody tr');

    rows.forEach(row => {
        const level = row.getAttribute('data-level');
        if (filter === 'all' || filter === level) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}