/*// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy Bank Details Function
function copyBankDetails() {
    const bankDetails = `St.Lawrence and Margarita Dosal School
A/C 0330299445971
Bank Equity Bank Kenya Limited
Branch- Kitale
Swift Code-EQBLKENAXXX`;
    
    navigator.clipboard.writeText(bankDetails).then(() => {
        const message = document.getElementById('copyMessage');
        message.style.display = 'inline';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }).catch(err => {
        alert('Failed to copy bank details. Please copy manually.');
        console.error('Copy failed:', err);
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simulate sending (replace with actual backend call)
    setTimeout(() => {
        contactMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        contactMessage.className = 'form-message success';
        contactForm.reset();

        setTimeout(() => {
            contactMessage.className = 'form-message';
        }, 5000);
    }, 1000);
});

// Payment Form Handler
const paymentForm = document.getElementById('payment-form');
const paymentMessage = document.getElementById('payment-message');
const submitButton = document.getElementById('submit-button');
const buttonText = document.getElementById('button-text');
const spinner = document.getElementById('spinner');

// Card number formatting
const cardNumberInput = document.getElementById('cardNumber');
if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });
}

// Expiry date formatting
const cardExpiryInput = document.getElementById('cardExpiry');
if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });
}

// CVV - only numbers
const cardCVVInput = document.getElementById('cardCVV');
if (cardCVVInput) {
    cardCVVInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

paymentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cardAmount = parseInt(document.getElementById('cardAmount').value);
    const donorName = document.getElementById('donorName').value;
    const donorEmail = document.getElementById('donorEmail').value;
    const cardNumber = document.getElementById('cardNumber').value;

    if (cardAmount < 100) {
        paymentMessage.textContent = 'Please enter a donation amount (minimum KSh 100).';
        paymentMessage.className = 'form-message error';
        return;
    }

    if (!donorName || !donorEmail || !cardNumber) {
        paymentMessage.textContent = 'Please fill in all required fields.';
        paymentMessage.className = 'form-message error';
        return;
    }

    // Show loading state
    submitButton.disabled = true;
    buttonText.textContent = 'Processing...';
    spinner.classList.remove('hidden');

    // Simulate payment processing
    setTimeout(() => {
        // Success message
        paymentMessage.textContent = `Thank you ${donorName} for your generous donation of KSh ${cardAmount.toLocaleString()}! Your support makes a real difference.`;
        paymentMessage.className = 'form-message success';

        // Reset form
        paymentForm.reset();

        // Reset button state
        submitButton.disabled = false;
        buttonText.textContent = 'Donate Now';
        spinner.classList.add('hidden');

        // Hide message after 10 seconds
        setTimeout(() => {
            paymentMessage.className = 'form-message';
        }, 10000);
    }, 2000);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
});
// Redirect to payment with custom amount
function redirectToPayment() {
    const amount = document.getElementById('customDonationAmount').value;
    
    if (!amount || amount < 100) {
        alert('Please enter a valid amount (minimum KSh 100)');
        return;
    }
    
    // Replace with your actual payment link
    const paymentLink = 'YOUR_PAYMENT_LINK_HERE?amount=' + amount;
    window.open(paymentLink, '_blank');
}
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
});
*/
document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. MOBILE NAVIGATION
    // =========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // =========================================
    // 2. SMOOTH SCROLLING
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Account for fixed header height (80px)
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================================
    // 3. CONTACT FORM HANDLING
    // =========================================
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const btn = contactForm.querySelector('button');
            const originalBtnText = btn.innerText;

            // Show loading state
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate sending (Replace this setTimeout with actual EmailJS or Backend fetch)
            setTimeout(() => {
                contactMessage.innerHTML = `Thank you <b>${name}</b>! Your message has been sent.`;
                contactMessage.className = 'form-message success';
                contactMessage.style.color = 'green';
                
                contactForm.reset();
                btn.innerText = originalBtnText;
                btn.disabled = false;

                // Clear message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                    contactMessage.className = 'form-message';
                }, 5000);
            }, 1500);
        });
    }

    // =========================================
    // 4. SCROLL ANIMATIONS (FADE IN)
    // =========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize sections with hidden state
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
});

// =========================================
// 5. GLOBAL FUNCTIONS (Accessible by HTML onclick)
// =========================================

// Copy Bank Details
window.copyBankDetails = function() {
    const bankDetails = `St.Lawrence and Margarita Dosal School
A/C 0330299445971
Bank Equity Bank Kenya Limited
Branch- Kitale
Swift Code-EQBLKENAXXX`;
    
    navigator.clipboard.writeText(bankDetails).then(() => {
        const message = document.getElementById('copyMessage');
        const btn = document.querySelector('.copy-btn');
        
        // Visual Feedback
        message.style.display = 'inline';
        if(btn) btn.innerHTML = '📋 Copied!';
        
        setTimeout(() => {
            message.style.display = 'none';
            if(btn) btn.innerHTML = '📋 Copy Bank Details';
        }, 3000);
    }).catch(err => {
        alert('Failed to copy bank details. Please copy manually.');
        console.error('Copy failed:', err);
    });
};

// Redirect to Payment (Custom Amount)
window.redirectToPayment = function() {
    const amountInput = document.getElementById('customDonationAmount');
    const amount = amountInput ? amountInput.value : 0;
    
    if (!amount || amount < 100) {
        alert('Please enter a valid amount (minimum KSh 100)');
        return;
    }
    
    // IMPORTANT: Replace this URL with your actual payment gateway link (PayPal, Pesapal, etc.)
    // If using a service that accepts query parameters, use the format below:
    const paymentBaseUrl = "YOUR_PAYMENT_GATEWAY_URL_HERE"; 
    
    // Example alert for demonstration
    alert(`Redirecting to payment gateway for KSh ${amount}... \n(Configure the URL in script.js)`);
    
    // Uncomment the line below when you have the real URL
    // window.open(`${paymentBaseUrl}?amount=${amount}`, '_blank');
};
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = image.src; // Set the image source to the clicked image
    });
});

// Close the lightbox when clicking the close button
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        document.getElementById('lightbox').style.display = 'none';
    }
});

 document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it has faded in
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in'); // Add fade-in class
        observer.observe(section);
    });
});
// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block'; // Show button
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide button
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});
