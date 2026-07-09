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
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});
window.addEventListener('scroll', function() {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});