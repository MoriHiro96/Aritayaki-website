$(function(){

    $(window).scroll(function(){

        let scrollTopValue = $(document).scrollTop();

        console.log(scrollTopValue);

        if(scrollTopValue > 100){
            $('.bar').fadeIn(1500);
        }else{
            $('#image1').fadeOut(1000);
        }

        let sectionTop = $('#image1').offset().top;

        if(scrollTopValue > sectionTop - 200){
            $('#image1').animate({left: 0}, 2000);
        }

    })

})