document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelectorAll('.hero-carousel-img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const dots = document.querySelectorAll('.dot');
    const backToTopButton = document.querySelector('.foot-panel1'); // Assuming foot-panel1 exists and acts as back to top

    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Remove active class from all images and dots
        carouselImages.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to the current image and dot
        carouselImages[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showSlide(currentIndex);
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        stopAutoSlide(); // Clear any existing interval
        autoSlideInterval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            goToPrevSlide();
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            goToNextSlide();
            startAutoSlide();
        });
    }

    // Event listeners for dots
    if (dotsContainer) {
        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                stopAutoSlide();
                const index = parseInt(event.target.dataset.index);
                currentIndex = index;
                showSlide(currentIndex);
                startAutoSlide();
            });
        });
    }

    // Initialize carousel
    if (carouselImages.length > 0) {
        showSlide(currentIndex);
        startAutoSlide();
    }

    // Back to Top button functionality
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
