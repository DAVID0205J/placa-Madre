document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.grid-button');
    const componentInfoSections = document.querySelectorAll('.component-info');
    const flags = document.querySelectorAll('.flag');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const showTooltipsBtn = document.getElementById('show-tooltips-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const component = button.getAttribute('data-component');
            
            componentInfoSections.forEach(section => {
                section.classList.add('hidden');
            });

            document.getElementById(`${component}-info`).classList.remove('hidden');
        });
    });

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const category = checkbox.getAttribute('data-category');
            const checked = checkbox.checked;

            flags.forEach(flag => {
                if (flag.getAttribute('data-category') === category) {
                    flag.classList.toggle('show', checked);
                }
            });

            const anyChecked = Array.from(filterCheckboxes).some(checkbox => checkbox.checked);
            if (!anyChecked) {
                flags.forEach(flag => {
                    flag.classList.remove('show');
                });
            }
        });
    });

    showTooltipsBtn.addEventListener('click', function () {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        setTimeout(() => {
            tooltips.forEach(tooltip => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        }, 5000);
    });

    buttons.forEach(button => {
        const tooltip = button.querySelector('.tooltip');
        button.addEventListener('mouseover', function () {
            tooltip.style.display = 'block';
        });
        button.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
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
