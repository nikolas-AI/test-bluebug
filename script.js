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

})();