(function() {
    const accoridonLinks = [...document.querySelectorAll('[data-accordion-link]')];

    if (!accoridonLinks) return;
    accoridonLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.accordion__item').classList.toggle('is-accordion-open');
        });
    })
    const menu = document.querySelector('[data-menu]');
    menu.addEventListener('click', () => (document.body.classList.toggle('is-menu-open')));
}());




