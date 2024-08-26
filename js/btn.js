document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.grid-button');
    const componentInfoSections = document.querySelectorAll('.component-info');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const component = button.getAttribute('data-component');
            
            // Oculta todas las secciones de información
            componentInfoSections.forEach(section => {
                section.classList.add('hidden');
            });

            // Muestra la sección correspondiente
            document.getElementById(`${component}-info`).classList.remove('hidden');
        });
    });

    // Funcionalidad del botón de descarga para cada componente
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const component = button.getAttribute('data-component');
            const componentInfo = document.getElementById(`${component}-info`);

            // Captura la sección de información del componente y la descarga como imagen PNG
            html2canvas(componentInfo).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = `${component}-info.png`;
                link.click();
            });
        });
    });
});
