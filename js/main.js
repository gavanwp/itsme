/**
 * Portfolio Website - Main JavaScript
 * Handles navigation, form submissions, and basic UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    // ======================
    // Navigation and Header
    // ======================
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const activateNavOnScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        // Header sticky effect
        if (scrollPosition > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            header.style.height = '60px';
        } else {
            header.style.boxShadow = '';
            header.style.height = '';
        }
        
        // Show/hide back to top button
        if (scrollPosition > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Update active nav link
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', activateNavOnScroll);
    
    // Back to top button
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ======================
    // Project Filtering
    // ======================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ======================
    // Contact Form
    // ======================
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // FormSubmit.co will handle the form submission
            // You can add client-side validation here if needed
            
            // Optional: Show visual feedback during form submission
            const submitBtn = this.querySelector('.btn-submit');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Form will be handled by FormSubmit.co
            // after submission, so no need to prevent default
        });
    }
    
    // ======================
    // Skill Bar Animation
    // ======================
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress;
        });
    }
    
    // Initial animations setup
    setTimeout(animateSkillBars, 500);
    
    // ======================
    // Content Loading Animation
    // ======================
    const revealContent = () => {
        document.querySelector('.home-section .fade-in').classList.add('animate');
    };
    
    // Start animations after page load
    window.addEventListener('load', () => {
        setTimeout(revealContent, 100);
    });
});
