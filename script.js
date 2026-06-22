// Smooth scroll behavior is handled by CSS scroll-behavior: smooth;

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // For demonstration, show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset the form
    form.reset();
    
    // In a real application, you would send this data to a server
    // Example with fetch:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Thank you for your message!');
    //     form.reset();
    // })
    // .catch(error => console.error('Error:', error));
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add active state to nav links based on scroll position
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #003da5;
        border-bottom: 2px solid #003da5;
    }
`;
document.head.appendChild(style);