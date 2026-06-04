document.addEventListener('DOMContentLoaded', function () {

    // Animated Counters
    document.querySelectorAll('[data-count]').forEach(function (el) {
        const target = parseInt(el.dataset.count);
        let count = 0;

        const timer = setInterval(function () {
            count += Math.ceil(target / 50);

            if (count >= target) {
                count = target;
                clearInterval(timer);
            }

            el.textContent = count + '+';
        }, 100);
    });

    // Floating WhatsApp Button
    // if (!document.querySelector('.whatsapp-float')) {

    //     const whatsappBtn = document.createElement('a');

    //     whatsappBtn.href = 'https://wa.me/919340837506'; // Replace with your WhatsApp number

    //     whatsappBtn.className = 'whatsapp-float';

    //     whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

    //     document.body.appendChild(whatsappBtn);
    // }

    // Scroll Reveal Animation
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal-up').forEach(function (el) {
        observer.observe(el);
    });

});