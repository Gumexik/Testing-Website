const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav_links_wrapper');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})