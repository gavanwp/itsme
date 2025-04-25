/**
 * Portfolio Website - Animation Scripts
 * Handles scroll animations, typing effect, and other visual effects
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    // ======================
    // Typing Animation
    // ======================
    function setupTypingAnimation() {
        const typingTextElement = document.querySelector('.typing-text');
        const phrases = [
            'Creating smart apps & websites',
            'Building stunning user interfaces',
            'Developing Java applications',
            'Crafting digital experiences',
            'Solving complex problems'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100; // Base typing speed in ms
        
        function typeText() {
            const currentPhrase = phrases[phraseIndex];
            
            // Determine if we're typing or deleting
            if (isDeleting) {
                // Remove a character
                typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Faster when deleting
            } else {
                // Add a character
                typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100; // Normal speed when typing
            }
            
            // If finished typing the phrase
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at the end of the phrase
            } 
            // If finished deleting the phrase
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
                typingSpeed = 500; // Pause before typing next phrase
            }
            
            // Continue the typing animation
            setTimeout(typeText, typingSpeed);
        }
        
        // Start the typing animation
        setTimeout(typeText, 1000);
    }
    
    // ======================
    // Scroll Animations
    // ======================
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
                rect.bottom >= 0
            );
        }
        
        // Animate elements when they come into view
        function animateOnScroll() {
            animatedElements.forEach(element => {
                if (isInViewport(element)) {
                    const delay = element.dataset.delay || 0;
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, delay * 1000);
                }
            });
        }
        
        // Run on scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // Run once on page load
        animateOnScroll();
    }
    
    // ======================
    // Parallax Effects
    // ======================
    function setupParallaxEffects() {
        const circles = document.querySelectorAll('.blur-circle');
        
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            circles.forEach((circle, index) => {
                const speed = (index + 1) * 0.05;
                const x = (0.5 - mouseX) * speed * 100;
                const y = (0.5 - mouseY) * speed * 100;
                
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
    
    // ======================
    // Card Hover Effects
    // ======================
    function setupCardHoverEffects() {
        const cards = document.querySelectorAll('.project-card, .blog-card, .skill-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Initialize all animations
    function initAnimations() {
        setupTypingAnimation();
        setupScrollAnimations();
        setupParallaxEffects();
        setupCardHoverEffects();
    }
    
    // Start animations after slight delay
    setTimeout(initAnimations, 100);
});
