$(window).on('load', function () {
    /* ----------------------
    LĂN CUỘT CUỘN MƯỢT
    ------------------------ */
    var Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector('.main-content'));

    /* ---------------------------
    CLICK DANH MỤC CUỘN MƯỢT
    ----------------------------- */
    $('a.smooth-scroll').on('click', function (e) {
        e.preventDefault();
        var section = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(section).offset().top - 0,
            },
            500, // thời gian chuyển động
            'easeInOutExpo', //'easeInOutCubic',
        );

        // xoá class 'active' có sẵn, sau đó thêm vào đúng thẻ đã chọn
        $('a.smooth-scroll').removeClass('active');
        $(this).toggleClass('active');
    });
});
