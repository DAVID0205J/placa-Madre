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

    document.getElementById('download-btn').addEventListener('click', function () {
        const componentImage = document.getElementById('component-image');
        const link = document.createElement('a');
        link.href = componentImage.src;
        link.download = 'componente.png';
        link.click();
    });
});
