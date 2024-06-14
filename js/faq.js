document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('.question');
        const answer = faq.nextElementSibling; // Seleciona o próximo elemento irmão para encontrar a resposta

        question.addEventListener("click", () => {
            faq.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });
});
