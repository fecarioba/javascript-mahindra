document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const arrow = header.querySelector('.arrow');
            body.classList.toggle('active');
            arrow.classList.toggle('rotate');
        });
    });
});