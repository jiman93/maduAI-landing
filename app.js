document.getElementById('y').textContent = new Date().getFullYear();

const form = document.querySelector('form');
const success = document.getElementById('success');

form?.addEventListener('submit', () => {
    // Netlify handles POST; show optimistic success
    setTimeout(() => {
        success.hidden = false;
        form.hidden = true;
    }, 300);
});

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add floating animation to trust badges
const trustItems = document.querySelectorAll('.trust li');
trustItems.forEach((item, index) => {
    item.style.animationDelay = `${1.2 + index * 0.2}s`;

    // Add subtle floating animation
    setInterval(() => {
        if (Math.random() > 0.7) {
            item.style.transform = 'translateY(-2px)';
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
            }, 200);
        }
    }, 3000 + index * 1000);
});

// Add ripple effect to button clicks
document.querySelector('.form button')?.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add typing effect to the main heading
const heading = document.querySelector('.hero h1');
if (heading) {
    const text = heading.textContent;
    heading.textContent = '';
    heading.style.opacity = '1';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Start typing effect after initial animations
    setTimeout(typeWriter, 800);
}
