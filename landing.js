document.addEventListener('DOMContentLoaded', () => {
    // Navigation behavior
    const nav = document.querySelector('nav');
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;
    
    // Scroll behavior
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Show/hide navbar based on scroll direction
        if (currentScroll > lastScroll && currentScroll > nav.offsetHeight) {
            // Scrolling down - hide navbar
            nav.classList.add('nav-hidden');
        } else {
            // Scrolling up - show navbar
            nav.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle with animation
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        menuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-button')) {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    menuButton.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Smooth scroll to target
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Highlight active section in navigation
    const navObserverOptions = {
        root: null,
        rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`,
        threshold: 0.5
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, navObserverOptions);
    
    // Observe all sections for navigation
    document.querySelectorAll('section[id]').forEach(section => {
        navObserver.observe(section);
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('i').classList.remove('rotated');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.classList.add('rotated');
            } else {
                answer.style.maxHeight = null;
                icon.classList.remove('rotated');
            }
        });
    });

    // Intersection Observer for animations
    const animationObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, animationObserverOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-card, .step-card, .generation-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        animationObserver.observe(element);
    });

    // Statistics counter animation
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        if (animated) return;
        
        stats.forEach(stat => {
            const target = stat.innerText;
            const suffix = target.match(/[+%]/)?.[0] || '';
            const number = parseInt(target.replace(/[^0-9]/g, ''));
            let current = 0;
            
            const step = number / 50; // Animate in 50 steps
            const interval = setInterval(() => {
                current += step;
                if (current >= number) {
                    clearInterval(interval);
                    stat.innerText = target;
                } else {
                    stat.innerText = Math.floor(current) + suffix;
                }
            }, 20);
        });
        
        animated = true;
    };

    // Observe hero stats section for animation
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
        }
    });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});
