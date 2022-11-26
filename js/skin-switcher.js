$(document).ready(function () {
    /*--------------------------------
    HIỆN - ẨN KHUNG CÀI ĐẶT
    --------------------------------*/
    $('.style-switcher-toggler').click(function () {
        $('.skin-switcher').toggleClass('open-switcher').siblings().removeClass('open-switcher');
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

/*------------------------------
THAY ĐỔI GIAO DIỆN NGÀY - ĐÊM
-------------------------------*/
$(window).on('load', function () {
    $('.day-night').click(function () {
        // thay đổi icon ngày - đêm
        $(this).children('i').toggleClass('fa-sun').siblings().removeClass('fa-sun');
        $(this).children('i').toggleClass('fa-moon').siblings().removeClass('fa-moon');
        $('body').toggleClass('dark').siblings().removeClass('dark');
    });

    // thay đổi ngày - đêm sau khi load
    if ($('body').hasClass('dark')) {
        $('.day-night').children('i').toggleClass('fa-sun').siblings().removeClass('fa-sun');
    }
});
