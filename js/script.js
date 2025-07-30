document.addEventListener('DOMContentLoaded', () => {
    const responsiveMenuToggleButton = document.getElementById('responsiveMenuToggleButton')
    const navbarLinks = document.querySelector('.navbar-links')

    responsiveMenuToggleButton.addEventListener('click', () => {
        responsiveMenuToggleButton.classList.toggle('open');
        navbarLinks.classList.toggle('show');
    })
})