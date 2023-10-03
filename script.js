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
    const images = document.querySelectorAll('.social-links img');
console.log(images)

    root_btn.addEventListener('change', () => {

        if (class_list[0] == 'day') {
            root_btn.classList.remove('day');
            root_btn.classList.add('night');
            root_btn.innerText = 'Night'
            root_theme.style.setProperty('--bg', '#010a21');
            root_theme.style.setProperty('--nav-bg', '#091352f2');
            root_theme.style.setProperty('--bg-home', 'linear-gradient(40deg, #03012ae5 4%, #000072c9 20%, #00447cdd 78%, #002931e1 99%)');
            root_theme.style.setProperty('--bg-about', 'linear-gradient(240deg, #03012ae5 4%, #000072c9 20%, #00447cdd 78%, #002931e1 99%)');
            root_theme.style.setProperty('--bg-events', 'linear-gradient(40deg, #03012ae5 4%, #000072c9 20%, #00447cdd 78%, #002931e1 99%)');
            root_theme.style.setProperty('--bg-contact', 'linear-gradient(240deg, #03012ae5 4%, #000072c9 20%, #00447cdd 78%, #002931e1 99%)');
            root_theme.style.setProperty('--color', '#fff9f9');
            root_theme.style.setProperty('--txt-color', 'white');
            root_theme.style.setProperty('--hover-color', '#ffffff');
            root_theme.style.setProperty('--hover-active', '#0a0a0a');
            root_theme.style.setProperty('--hover-bg', '#2bb5b5');

            for (let i = 0; i < images.length; i++) {
                images[i].style.setProperty('filter', 'invert(100%)')
            }
        }
        
        else {
            root_btn.classList.remove('night');
            root_btn.classList.add('day');
            root_btn.innerText = 'Day'

            root_theme.style.setProperty('--bg', '#ffffff');
            root_theme.style.setProperty('--nav-bg', '#0174b6c8');
            root_theme.style.setProperty('--bg-home', 'linear-gradient(40deg, #0b0663e5 4%, #1010acc9 20%, #0c7bb5cc 78%, #05d5ffb8 99%)');
            root_theme.style.setProperty('--bg-about', 'linear-gradient(240deg, #0b0663e5 4%, #1010acc9 20%, #0c7bb5cc 78%, #05d5ffb8 99%)');
            root_theme.style.setProperty('--bg-events', 'linear-gradient(40deg, #0b0663e5 4%, #1010acc9 20%, #0c7bb5cc 78%, #05d5ffb8 99%)');
            root_theme.style.setProperty('--bg-contact', 'linear-gradient(240deg, #0b0663e5 4%, #212179c9 20%, #0c7bb5cc 78%, #05d5ffb8 99%)');
            root_theme.style.setProperty('--color', '#ffffff');
            root_theme.style.setProperty('--txt-color', 'black');
            root_theme.style.setProperty('--hover-color', '#000000');
            root_theme.style.setProperty('--hover-active', '#00b13b');
            root_theme.style.setProperty('--hover-bg', '#ffffff');
            
            for (let i = 0; i < images.length; i++) {
                images[i].style.setProperty('filter', 'invert(0%)')
            }
        }
    });
    
})();