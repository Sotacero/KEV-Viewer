// Alternar contenido de las tarjetas al hacer clic en el encabezado
function toggleDetails(header) {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
}

// Filtrar por ransomware conocido
document.getElementById('ransomware-filter').addEventListener('change', function () {
    const value = this.value;
    const cards = document.querySelectorAll('.brand-card');
    cards.forEach(card => {
        const cveItems = card.querySelectorAll('.cve-item');
        let hasMatch = false;
        cveItems.forEach(item => {
            if (value === 'all' || item.getAttribute('data-ransomware') === value) {
                item.style.display = 'block';
                hasMatch = true;
            } else {
                item.style.display = 'none';
            }
        });
        card.style.display = hasMatch ? 'block' : 'none';
    });
});

// Buscar por CVE ID
document.getElementById('cve-search').addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll('.brand-card');
    let found = false;

    // Si el campo está vacío, cerrar todas las tarjetas y mostrar todas
    if (!value) {
        cards.forEach(card => {
            const content = card.querySelector('.brand-content');
            if (content.classList.contains('open')) {
                content.classList.remove('open'); // Cerrar tarjeta
            }
            card.style.display = 'block'; // Mostrar todas las tarjetas
        });
        return;
    }

    cards.forEach(card => {
        const cveItems = card.querySelectorAll('.cve-item');
        let cardHasMatch = false;

        cveItems.forEach(item => {
            const cve = item.getAttribute('data-cve');
            if (cve.includes(value)) {
                found = true;
                card.style.display = 'block'; // Mostrar tarjeta si hay coincidencia
                cardHasMatch = true;

                // Abrir la tarjeta que contiene el CVE
                const content = card.querySelector('.brand-content');
                if (!content.classList.contains('open')) {
                    content.classList.add('open'); // Abrir tarjeta
                }

                // Desplazar hacia el CVE encontrado
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100); // Dar tiempo para que se despliegue el contenido

                // Resaltar el CVE encontrado
                item.classList.add('highlight'); // Añadir resaltado
                setTimeout(() => item.classList.remove('highlight'), 3000); // Quitar resaltado después de 3 segundos
            }
        });

        // Ocultar tarjeta si no tiene coincidencias
        if (!cardHasMatch) {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert("CVE no encontrado.");
    }
});
