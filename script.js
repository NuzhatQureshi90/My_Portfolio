function changeSlide(btn, direction) {
    const slides = btn.parentElement.querySelectorAll('.slide');
    let activeIndex = 0;
    slides.forEach((slide, i) => {
        if (slide.classList.contains('active')) activeIndex = i;
    });
    slides[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
}