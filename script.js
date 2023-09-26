(function () {
    'use strict';

$(document).ready(function () {
    // Function to highlight the active navigation link when a section enters the viewport
    function highlightActiveNav(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                const linkSelector = `a[href="#${targetId}"]`;

                // Remove 'active' class from all links
                $('nav ul li a').removeClass('active');

                // Add 'active' class to the link corresponding to the current section
                $(linkSelector).addClass('active');
            }
        });
    }

    // Define the sections to observe
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(highlightActiveNav, {
        root: null, // Viewport
        rootMargin: '0px', // Margin around the viewport
        threshold: 0.5, // 50% of the section is visible
    });

    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add 'active' class to the "Home" link on page load
    $('nav ul li a[href="#home"]').addClass('active');

    // Handle click event on navigation links (if you want to keep the highlight when clicked)
    $('nav ul li a').click(function () {
        // Remove 'active' class from all links
        $('nav ul li a').removeClass('active');

        // Add 'active' class to the clicked link
        $(this).addClass('active');
    });
});

let counter = 1;

function contentRotator() {
    $(`#quotes p:nth-child(${counter})`).fadeIn(3000, function () {
        if ($(this).is('#quotes p:last-child')) {
            setTimeout(function () {
                $(`#quotes p:nth-child(${counter})`).fadeOut(1000, function () {
                    counter = 1;
                    contentRotator();
                })
            }, 1000)
        }
        else {
            setTimeout(function () {
                $(`#quotes p:nth-child(${counter})`).fadeOut(1000, function () {
                    counter++;
                    contentRotator();
                })
            }, 1000)

        }
    });
}

contentRotator();

// Date for the footer
var date = new Date()
$('footer b').text(date.getFullYear())


// Toggle button
const root_theme = document.querySelector(':root');
const root_btn = document.querySelector('#toggle');
const class_list = document.querySelector('#toggle').classList;


root_btn.addEventListener('change', () => {

    if (class_list[0] == 'day') {
        root_btn.classList.remove('day');
        root_btn.classList.add('night');
        root_btn.innerText = 'Night'
        root_theme.style.setProperty('--light-bg', 'black');

    }

    else {
        root_btn.classList.remove('night');
        root_btn.classList.add('day');
        root_btn.innerText = 'Day'

        root_theme.style.setProperty('--light-bg', '#ffffff');

    }
});

})();