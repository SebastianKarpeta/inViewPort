# inViewPort
This simple script detect that element is on viewPort and executed callbacks .in, .out on enter or exit into viewport.

## Usage:

Simply: 

var jqueryElements = $('.class' or '#id');

$(jqueryElements).inViewPort({
                paralax: true,
                onlyOne: false,
                in : function (_element) {
                    $(_element).addClass('animated pulse');
                },
                out: function (_element) {
                    $(_element).removeClass('animated pulse');
                }
            });
