$(document).ready(function () {
    /*--------------------------------
    HIỆN - ẨN KHUNG CÀI ĐẶT
    --------------------------------*/
    $('.style-switcher-toggler').click(function () {
        $('.skin-switcher').toggleClass('open-switcher').siblings().removeClass('open-switcher');
    });

    /*--------------------
    THAY ĐỔI Ô MÀU CHỦ ĐỀ
    ---------------------*/
    $('.alternate-style').click(function () {
        // tìm màu đã chọn trong các ô màu
        skinColor = $(this).attr('skinColor');

        // thay đổi chủ đề theo màu này
        changeSkinColor(skinColor);

        // lưu màu này vào SESSION
        sessionStorage.setItem('SKIN_COLOR_SELECTED', skinColor);

        // chuyển class active sang ô màu này
        $('.alternate-style').removeClass('active');
        $(this).addClass('active');
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
    // Click icon mặt trăng - trời
    $('.day-night').click(function () {
        // thay đổi icon ngày - đêm
        $(this).children('i').toggleClass('fa-sun').siblings().removeClass('fa-sun');
        $(this).children('i').toggleClass('fa-moon').siblings().removeClass('fa-moon');

        // chuyển giao diện
        $('body').toggleClass('dark').siblings().removeClass('dark');

        // lưu Giao diện đã thay đổi vào SESSION
        if ($('body').hasClass('dark')) {
            sessionStorage.setItem('DAY_NIGHT_SELECTED', 'dark');
        } else {
            sessionStorage.setItem('DAY_NIGHT_SELECTED', 'light');
        }
    });

    // thay đổi ngày - đêm sau khi reload
    if (sessionStorage.getItem('DAY_NIGHT_SELECTED') == 'dark') {
        $('.day-night').children('i').removeClass('fa-moon').addClass('fa-sun');
        $('body').addClass('dark');
    }
    if (sessionStorage.getItem('DAY_NIGHT_SELECTED') == 'light') {
        $('.day-night').children('i').removeClass('fa-sun').addClass('fa-moon');
        $('body').removeClass('dark');
    }
});
// sessionStorage.clear();
/*-------------------------
ẨN KHUNG CÀI ĐẶT KHI CUỘN
-------------------------*/
$(window).scroll(function () {
    if ($('.skin-switcher').hasClass('open-switcher')) {
        setTimeout(function () {
            $('.skin-switcher').removeClass('open-switcher');
        }, 200);
    }
});
