(function () {
    'use strict';

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


    // $(document).ready(function () {
        // $("ul > li > a").mouseenter(
        //     function (e) {
        //         $(this).css("color", "Black");
        //         $(this).css("background-color", "White");
        //     }
        // )

        // $("ul > li > a").mouseleave(
        //     function (e) {
        //         $(this).css("color", "White");
        //         $(this).css("background-color", "rgba(255, 255, 255, 0)");
        //     }
        // )

    //     $("ul > li > a").click(
    //         function (e) {
    //             $("ul > li > a").css("color", "White");                    
    //             $("ul > li > a").css("background-color", "rgba(255, 255, 255, 0)");                    

    //             $(this).css("color", "Black");
    //             $(this).css("background-color", "White");
    //         });
    // });



})();