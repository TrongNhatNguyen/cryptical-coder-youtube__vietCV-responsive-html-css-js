jQuery(function ($) {
    var win = $(window),
        target = $('body'),
        // tìm thẻ div cần cuộn mượt
        // wrapper = target.find('> div'), // cuộn cả trang
        wrapper = target.find('.main-content'),
        easing = 'ease-out',
        duration = '500ms', // Tốc độ cuộn mượt ms(millisecond)
        top = 0,
        kineticScroll = {
            _init: function () {
                if (wrapper.length == 1) {
                    target.height(wrapper.height());
                    wrapper.css({
                        transition: 'transform ' + duration + ' ' + easing,
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        padding: '0',
                        zIndex: '2',
                    });

                    win.on({
                        scroll: function () {
                            kineticScroll._scroll();
                        },
                        resize: function () {
                            target.height(wrapper.outerHeight());
                        },
                    });

                    kineticScroll._scroll();
                }
            },
            _scroll: function () {
                top = win.scrollTop();
                wrapper.css('transform', 'translateY(-' + top + 'px)');
            },
        };

    if (typeof window.ontouchstart == 'undefined') {
        kineticScroll._init();
    }
});
