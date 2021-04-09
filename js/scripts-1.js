$(document).ready(function() {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('↙ Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#8c8282",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#8c8282",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    // Модалка
    $('.button-up').magnificPopup({
        type: 'inline',
        midClick: true, 
        mainClass: 'mfp-fade'
    });
    // Мобильное меню
    $(function(){
        var mobMenu = $('.mobile-menu'),
            headNav = $('.header-nav'),
            mml1 = $('.mobile-menu-line-1'),
            mml2 = $('.mobile-menu-line-2'),
            mml3 = $('.mobile-menu-line-3'),
            body = $('body');
        mobMenu.on('click', function () {
            if (!headNav.hasClass('nav-active')) {
                $(this).css('position' , 'fixed');
                body.css('overflow' , 'hidden');
                headNav.addClass('nav-active');
                mml1.addClass('switched');
                mml2.addClass('switched');
                mml3.addClass('switched');
            } else {
                $(this).css('position' , 'absolute');
                body.css('overflow' , 'auto');
                headNav.removeClass('nav-active');
                mml1.removeClass('switched');
                mml2.removeClass('switched');
                mml3.removeClass('switched');
            }
        });
        });
    /*Конец документа*/
    });