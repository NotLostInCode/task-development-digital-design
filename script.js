// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const categoryList = document.getElementById('categoryList');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const buyButtons = document.getElementsByClassName('buy-button');
    const buyForm = document.querySelector('.buy-form');
    const closeBtn = document.querySelector('.close-btn');
    const dateAddedElements = document.querySelectorAll('.date-added');

    // Sticky menu
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            menu.classList.add('sticky');
        } else {
            menu.classList.remove('sticky');
        }

        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Category links scroll
    menu.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target;
        if (target.tagName === 'A') {
            const href = target.getAttribute('href');
            const section = document.querySelector(href);
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    });

    // Category list scroll
    categoryList.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target;
        if (target.tagName === 'A') {
            const href = target.getAttribute('href');
            const section = document.querySelector(href);
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    });

    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        themeToggleBtn.classList.toggle('dark-theme');
    });

    // Buy form
    for (let i = 0; i < buyButtons.length; i++) {
        buyButtons[i].addEventListener('click', function () {
            buyForm.style.display = 'block';
        });
    }

    buyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const currentDate = new Date();
        const formattedDate = getDayInfo(currentDate);
        const dateElement = this.parentElement.querySelector('.date-added');
        dateElement.textContent = formattedDate;
        buyForm.style.display = 'none';
    });

    closeBtn.addEventListener('click', function () {
        buyForm.style.display = 'none';
    });

    // Format date
    function getDayInfo(dateStr) {
        const date = new Date(dateStr);
        const options = {
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            week: 'numeric'
        };
        return date.toLocaleString('ru-RU', options);
    }


    dateAddedElements.forEach((dateElement) => {
        const dateStr = dateElement.textContent.trim();
        const date = new Date(dateStr);
        const formattedDate = getDayInfo(date);
        dateElement.textContent = formattedDate;
    });
});
