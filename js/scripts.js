(function($){
    // Js code.
    $( document ).ready(function() {
        var $jsCollapse = $('.js-collapse');
        $jsCollapse.on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('is-active')) {
                $(this).removeClass('is-active');
                $(this).prev().slideUp();
                $(this).text('Chi tiết');
            } else {
                $(this).addClass('is-active');
                $(this).prev().slideDown();
                $(this).text('Thu gọn');
            }
        });

        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        
        $(".back-to-top").click(function() {
            $("html, body").animate({scrollTop: 0}, 300);
         });
    });
})(jQuery); 