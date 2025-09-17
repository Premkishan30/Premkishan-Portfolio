import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize lightweight animations for the portfolio
 * Focuses on simple, performance-friendly effects
 */
export const initAnimations = () => {
  // Simple hero entrance animation
  initHeroAnimations();
  
  // Lightweight scroll animations
  initScrollAnimations();
  
  // Basic hover effects
  initHoverAnimations();
  
  // Form micro-interactions
  initFormAnimations();
  
  // Navigation animations
  initNavigationAnimations();
};

/**
 * Simple hero section entrance animations
 */
const initHeroAnimations = () => {
  const tl = gsap.timeline({ delay: 0.3 });
  
  tl.from('.hero-avatar', {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: 'power2.out'
  })
  .from('.hero-name', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out'
  }, '-=0.3')
  .from('.hero-tagline', {
    opacity: 0,
    y: 15,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.2')
  .from('.hero-contact', {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.1')
  .from('.hero-social', {
    opacity: 0,
    y: 10,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.1');
};

/**
 * Lightweight scroll-triggered animations
 */
const initScrollAnimations = () => {
  // Simple fade-in for section headers
  gsap.utils.toArray('h2').forEach((heading) => {
    gsap.fromTo(heading, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Simple fade-in for cards
  gsap.utils.toArray('.card-fade').forEach((card) => {
    gsap.fromTo(card,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
};

/**
 * Simple hover animations
 */
const initHoverAnimations = () => {
  // Button hover effects
  gsap.utils.toArray('.btn-hover').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.02,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });

  // Card hover effects
  gsap.utils.toArray('.card-hover').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -3,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
};

/**
 * Form input animations
 */
const initFormAnimations = () => {
  // Input focus animations
  gsap.utils.toArray('.form-input').forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        scale: 1.01,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
};

/**
 * Navigation animations
 */
const initNavigationAnimations = () => {
  // Smooth scroll for navigation links
  gsap.utils.toArray('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: 'power2.inOut'
          });
        }
      }
    });
  });
};

/**
 * Mobile menu toggle animation
 */
export const toggleMobileMenu = (isOpen) => {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;

  if (isOpen) {
    gsap.to(mobileMenu, {
      height: 'auto',
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out'
    });
  } else {
    gsap.to(mobileMenu, {
      height: 0,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out'
    });
  }
};

/**
 * Utility function to refresh ScrollTrigger
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

/**
 * Clean up animations
 */
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};