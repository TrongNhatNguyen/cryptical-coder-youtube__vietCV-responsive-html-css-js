$(window).on('load', function () {
    /* ----------------------
    LĂN CUỘT CUỘN MƯỢT
    ------------------------ */
    var Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector('.container'));

    /* ----------------------------
    CLICK DANH MỤC SLIDE SECTION
    ------------------------------ */
    $('a.smooth-scroll').on('click', function (e) {
        e.preventDefault();
        var nameSection = $(this).attr('href').replace('#', '');

        // Lọc tất cả section - Hiển thị section vừa chọn
        var allSection = $('section.section');
        var index = allSection.length;
        allSection.each(function (index, el) {
            // 1. chuyển section active sang previous để chìm xuống
            $(el).hasClass('active') ? $(el).addClass('previous') : $(el).removeClass('previous');

            // 2. hiển thị section mới vừa chọn
            res = $(el).attr('id');
            nameSection == res ? $(el).addClass('active previous') : $(el).removeClass('active');
        });

        // xoá class 'active' có sẵn ở menu, sau đó thêm vào đúng thẻ đã chọn
        $('a.smooth-scroll').removeClass('active');
        $(this).addClass('active');
    });

    /* -----------------------------------
    CLICK DANH MỤC CUỘN MƯỢT - Easing.js
    ------------------------------------ */
    // $('a.smooth-scroll').on('click', function (e) {
    //     e.preventDefault();
    //     var nameSection = $(this).attr('href');

    //     $('html, body').animate(
    //         {
    //             scrollTop: $(nameSection).offset().top - 0,
    //         },
    //         500, // thời gian chuyển động
    //         'easeInOutExpo', //'easeInOutCubic',
    //     );

    //     // xoá class 'active' có sẵn, sau đó thêm vào đúng thẻ đã chọn
    //     $('a.smooth-scroll').removeClass('active');
    //     $(this).addClass('active');
    // });
});
