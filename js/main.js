
window.onload = function () {
    var button = document.querySelector('.spin-trigger');
    button.onclick = function () {
        if ( $('.wheel__button').hasClass('first_spin') ) {
            spin_1();
        }
    };


    function spin_1 () {
        $('.wheel__button').attr('disabled','disabled');
        document.querySelector('.wheel__spinner').classList.add('wheel__spinner_animated-1');
        setTimeout(function () {
            localStorage.currentSpin = '9555_spin_1';
            document.querySelector('.wheel__spinner').classList.remove('wheel__spinner_animated-1');
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','flex');
            $('.circle-button').removeClass('first_spin');
        }, 4000);
    }

    function spin_2 () {
        $('.wheel__button').attr('disabled','disabled');
        document.querySelector('.wheel__spinner').classList.add('wheel__spinner_animated-2');
        setTimeout(function () {
            localStorage.currentSpin = '9555_spin_2';
            $('.fewmodal').css('display','flex');
            $('#level-2').css('display','flex');
        }, 4000);
    }


    $('#popup_btn_1').click(function () {
        $('.fewmodal').css('display','none');
        $('#level-1').css('display','none');
        $('.circle-button').addClass('second_spin').removeClass('first_spin').removeAttr('disabled');
        $('.wheel__spinner').css('transform','rotate(1060deg)').removeClass('wheel__spinner_animated');

        spin_2();
    });


    switch(localStorage.currentSpin) {
        case '9555_spin_1':
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','flex');
            $('.circle-button').addClass('second_spin').removeClass('first_spin');
            break;

        case '9555_spin_2':
            $('.fewmodal').css('display','flex');
            $('#level-1').css('display','none');
            $('#level-2').css('display','flex');
            $('.circle-button').removeClass('second_spin').removeClass('first_spin');
            break;
    }




};