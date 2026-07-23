function changeSlide(btn, direction) {
    const slides = btn.parentElement.querySelectorAll('.slide');
    let activeIndex = 0;
    slides.forEach((slide, i) => {
        if (slide.classList.contains('active')) activeIndex = i;
    });

    function toggleMenu() {
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("navLinks").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("hamburger").classList.remove("open");
    document.getElementById("navLinks").classList.remove("open");
}
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

const texts = [
    "IT Student",
    "Web Developer",
    "Backend Learner",
    "Open to Internship"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typing = document.getElementById("typing");

if (typing) {
    (function type() {

        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typing.textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                index = 0;
                count++;
                type();
            }, 1800);

        } else {
            setTimeout(type, 100);
        }

    })();
}

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();