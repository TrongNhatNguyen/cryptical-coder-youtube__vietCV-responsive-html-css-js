// $(document).ready(function () {
$(window).on('load', function () {
    /*--------------------------------
    HIỆN - ẨN KHUNG CÀI ĐẶT
    --------------------------------*/
    $('.style-switcher-toggler').click(function () {
        $('.skin-switcher').toggleClass('open-switcher').siblings().removeClass('open-switcher');
    });

    /*-------------------------
    ẨN KHUNG CÀI ĐẶT KHI CUỘN
    -------------------------*/
    $(window).scroll(function () {
        if ($('.skin-switcher').hasClass('open-switcher')) {
            setTimeout(function () {
                $('.skin-switcher').removeClass('open-switcher');
            }, 300);
        }
    });

    /*--------------------
    THAY ĐỔI MÀU CHỦ ĐỀ
    ---------------------*/
    $('.alternate-style').click(function () {
        // tìm màu đã chọn trong các ô màu
        $.map($(this), function (el) {
            skinColor = $(el).attr('skinColor');
        });

        // thay đổi chủ đề theo màu đã chọn
        changeSkinColor(skinColor);

        // lưu màu đã thay đổi vào SESSION
        sessionStorage.setItem('SKIN_COLOR_SELECTED', skinColor);
    });

    // sau khi vừa load trang giữ nguyên màu chủ đề đã chọn
    if ((skinColor = sessionStorage.getItem('SKIN_COLOR_SELECTED'))) {
        changeSkinColor(skinColor);
    }

    function changeSkinColor(skinColor) {
        $(':root').css('--skin-color-used', 'var(--' + skinColor + ')');
    }

    /*------------------------------
    THAY ĐỔI GIAO DIỆN NGÀY - ĐÊM
    -------------------------------*/
});
