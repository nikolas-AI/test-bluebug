(function() {
    'use strict';

    let counter = 1;

    function contentRotator() {
        $(`#quotes p:nth-child(${counter})`).fadeIn(3000, function() {
            if ($(this).is('#quotes p:last-child')){
                setTimeout(function(){
                    $(`#quotes p:nth-child(${counter})`).fadeOut(1000, function() {
                        counter = 1;
                        contentRotator();
                    })
                },1000)
            }
            else{
                setTimeout(function(){
                    $(`#quotes p:nth-child(${counter})`).fadeOut(1000, function() {
                        counter++;
                        contentRotator();
                    })
                },1000)
                
            }
        });
    }

    contentRotator();

})();