// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Initial hero section animation
const heroTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
});

heroTl.fromTo('.hero-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
)
.fromTo('.hero-subtitle',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    '-=0.5'
)
.fromTo('.hero-button',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
    '-=0.3'
)
.fromTo('.morph-wrapper',
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2 },
    '-=1'
);

// Menu page animations
if (document.querySelector('.menu-section')) {
    const menuTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.menu-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });

    menuTl
        .fromTo('.menu-header h1', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo('.menu-header p',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            '-=0.5'
        )
        .fromTo('.category-btn',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
            '-=0.4'
        )
        .fromTo('.menu-item',
            { y: 30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.2)' },
            '-=0.2'
        );

    // Menu filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        display: 'block',
                        ease: 'back.out(1.2)'
                    });
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        display: 'none',
                        ease: 'power2.in'
                    });
                }
            });
        });
    });
}

// About page animations
if (document.querySelector('.about-page')) {
    const aboutPageTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-page',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });

    aboutPageTl
        .fromTo('.about-header',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo('.about-story img',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.5'
        )
        .fromTo('.story-text',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=1'
        );

    gsap.from('.value-item', {
        scrollTrigger: {
            trigger: '.about-values',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)'
    });

    gsap.from('.team-member', {
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.2)'
    });
}

// Contact page animations
if (document.querySelector('.contact-page')) {
    const contactPageTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-page',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        }
    });

    contactPageTl
        .fromTo('.contact-header',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo('.map-container',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        )
        .fromTo('.contact-info-card',
            { y: 30, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' },
            '-=0.4'
        )
        .fromTo('.form-container',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.2'
        );

    // Enhanced form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                borderColor: '#b68f65',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                borderColor: '#ddd',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    gsap.to(contactForm, {
        scale: 1.02,
        duration: 0.2,
        yoyo: true,
        repeat: 1
    });
    alert('Message sent successfully!');
    contactForm.reset();
});

newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    gsap.to(newsletterForm, {
        scale: 1.02,
        duration: 0.2,
        yoyo: true,
        repeat: 1
    });
    alert('Thank you for subscribing!');
    newsletterForm.reset();
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add this near the top of your main.js file
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Scroll Animations for Index Page
gsap.registerPlugin(ScrollTrigger);

// About Section Animation
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Features Counter Animation
const features = gsap.utils.toArray('.feature');
features.forEach(feature => {
    const number = feature.querySelector('.feature-number');
    const endValue = parseInt(number.textContent);
    
    gsap.to(number, {
        scrollTrigger: {
            trigger: feature,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        textContent: endValue,
        duration: 2,
        snap: { textContent: 1 },
        stagger: 1,
        ease: 'power1.in'
    });
});

// Contact Section Animation
const contactItems = gsap.utils.toArray('.contact-item');
gsap.from(contactItems, {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Footer Animation
const footerSections = gsap.utils.toArray('.footer-section');
gsap.from(footerSections, {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

// Parallax effect for hero section
gsap.to('.hero-content', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 100,
    ease: 'none'
});

// Smooth reveal for sections
const sections = gsap.utils.toArray('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });
});