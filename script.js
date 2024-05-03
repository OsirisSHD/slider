document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;

    function showSlide(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
    }

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});
