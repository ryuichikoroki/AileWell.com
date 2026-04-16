'use strict';

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    const header = document.querySelector('[data-header]');
    if (header) {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    header.classList.toggle('header-scrolled', window.scrollY > 60);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }
});
