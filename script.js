// Mobile Navigation Toggle
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

 const backToTopButton = document.getElementById("backToTop");

        // Show or hide the button based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block"; // Show button
            } else {
                backToTopButton.style.display = "none"; // Hide button
            }
        };

        // Scroll to the top smoothly when the button is clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling effect
            });
        });