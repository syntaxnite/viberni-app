// Viberni Website JavaScript
// A social media platform that adapts to how you feel

document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('viberni-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('viberni-theme', newTheme);
            
            // Add a smooth transition effect
            html.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                html.style.transition = '';
            }, 300);
            
            // Optional: Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'theme_toggle', {
                    'theme': newTheme
                });
            }
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            mobileMenuBtn.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('mobile-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form Enhancement
    const questionnaireForm = document.getElementById('emotional-questionnaire');
    
    if (questionnaireForm) {
        // Add form validation feedback
        const requiredFields = questionnaireForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('change', function() {
                validateField(this);
            });
        });
        
        // Form submission handling
        questionnaireForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Optional: Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    'form_name': 'emotional_questionnaire'
                });
            }
            
            // Re-enable button after a delay (in case of form errors)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        });
    }
    
    // Field validation function
    function validateField(field) {
        const fieldType = field.type;
        const fieldName = field.name;
        let isValid = true;
        
        // Remove existing error styling
        field.classList.remove('error');
        
        if (field.hasAttribute('required')) {
            if (fieldType === 'radio') {
                const radioGroup = document.querySelectorAll(`input[name="${fieldName}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    isValid = false;
                    radioGroup.forEach(radio => {
                        radio.closest('.radio-label').classList.add('error');
                    });
                }
            } else if (fieldType === 'checkbox') {
                const checkboxGroup = document.querySelectorAll(`input[name="${fieldName}"]`);
                const isChecked = Array.from(checkboxGroup).some(checkbox => checkbox.checked);
                if (!isChecked) {
                    isValid = false;
                    checkboxGroup.forEach(checkbox => {
                        checkbox.closest('.checkbox-label').classList.add('error');
                    });
                }
            } else if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            }
        }
        
        // Email validation
        if (fieldType === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
            }
        }
        
        return isValid;
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            backgroundColor: type === 'error' ? '#ef4444' : '#3b82f6',
            color: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: '9999',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    // Success page functionality
    if (window.location.pathname.includes('questionnaire-success') || 
        document.querySelector('.success-hero')) {
        
        // Animate success elements
        const successElements = document.querySelectorAll('.heart-float');
        successElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }
    
    // Animation on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .stat-item, .faq-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Performance optimization: Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            '/images/viberni-logo.png',
            '/images/hero-background.jpg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
    
    // Initialize on page load
    preloadCriticalResources();
    
    // Add error handling for forms
    window.addEventListener('unhandledrejection', function(event) {
        console.error('Unhandled promise rejection:', event.reason);
        showNotification('Something went wrong. Please try again.', 'error');
    });
    
    console.log('🌟 Viberni website loaded successfully!');
    console.log('💙 Building social media that adapts to how you feel');
});

// Share functionality for success page
function shareViberni() {
    if (navigator.share) {
        navigator.share({
            title: 'Viberni - Social Media That Adapts to How You Feel',
            text: 'Check out Viberni, a new social media platform being built with emotional intelligence at its core.',
            url: window.location.origin
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

function fallbackShare() {
    const text = 'Check out Viberni, a social media platform that adapts to how you feel! ' + window.location.origin;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Share text copied to clipboard!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Share text copied to clipboard!', 'success');
    }
}

function copyURL() {
    const url = window.location.origin;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('URL copied to clipboard!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('URL copied to clipboard!', 'success');
    }
}

// Utility function for showing notifications (if not defined above)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6',
        color: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}
