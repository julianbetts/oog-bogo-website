document.addEventListener('DOMContentLoaded', () => {
    const responsiveMenuToggleButton = document.getElementById('responsiveMenuToggleButton');
    const navbarLinks = document.querySelector('.navbar-links');

    if (responsiveMenuToggleButton && navbarLinks) {
        responsiveMenuToggleButton.addEventListener('click', () => {
            responsiveMenuToggleButton.classList.toggle('open');
            navbarLinks.classList.toggle('show');
        });
    }

    const calendar = document.getElementById('calendar');
    if (!calendar) {
        return;
    }

    const tourYear = Number.parseInt(calendar.dataset.tourYear || '', 10);
    const fallbackYear = new Date().getFullYear();
    const eventYear = Number.isInteger(tourYear) ? tourYear : fallbackYear;

    const now = new Date();

    [...calendar.querySelectorAll('li')].forEach((showItem) => {
        const dateElement = showItem.querySelector('.show-date');
        if (!dateElement) {
            return;
        }

        const match = dateElement.textContent.trim().match(/^(\d{1,2})\/(\d{1,2})$/);
        if (!match) {
            return;
        }

        const day = Number.parseInt(match[1], 10);
        const month = Number.parseInt(match[2], 10);
        if (!Number.isInteger(day) || !Number.isInteger(month)) {
            return;
        }

        const endOfShowDay = new Date(eventYear, month - 1, day + 1);
        if (now >= endOfShowDay) {
            showItem.remove();
        }
    });
});
