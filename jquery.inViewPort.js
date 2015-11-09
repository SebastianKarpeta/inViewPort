/*
 * jQuery.inViewPort
 * https://github.com/SebastianKarpeta/inViewPort/
 *
 * Copyright (c) 2015 Sebastian Karpeta
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
    $.fn.inViewPort = function (options) {

        var settings = $.extend({
            paralax: false,
            debug: false
        }, options);

        return this.each(function () {

            var _element = $(this);
            var win = $(window);
            var viewport = {
                top: win.scrollTop(),
                left: win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();

            var bounds = _element.offset();
            bounds.right = bounds.left + _element.outerWidth();
            bounds.bottom = bounds.top + _element.outerHeight();

            var isOnScreen = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));


            if (settings.paralax) {
                _element.css('backgroundPosition', '50% ' + Math.round((bounds.top - viewport.top) * 3 / 8) + 'px');
            }

            if (isOnScreen && settings.in) {
                if (settings.onlyOne && _element.attr('data-f-executed')) {} else {
                    settings.in(_element);
                    _element.attr('data-f-executed', true);
                }

            }

            if (!isOnScreen && settings.out) {
                settings.out(_element);
            }


            if (settings.debug) {
                console.log(viewport);
                console.log(bounds);
                console.log(isOnScreen);
            }
        });
    };
})(jQuery);
