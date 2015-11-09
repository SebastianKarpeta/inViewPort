# inViewPort
This simple script detect that element is on viewPort and executed callbacks .in, .out on enter or exit into viewport. Demo avaiable [http://jsfiddle.net/HlivSeTar/zhdohqd7](http://jsfiddle.net/HlivSeTar/zhdohqd7/).

## Usage:

Simply: 

```javascript
var jqueryElements = $('.class' or '#id');

$(jqueryElements).inViewPort({
                paralax: true,  /* optional */
                onlyOne: false, /* execute callback only one */
                in : function (_element) {
                    /* Function on enter into viewPort */
                },
                out: function (_element) {
                    /* Function on exit into viewPort */
                }
            });
```

## Params

`inViewPort()` will return an object with the following:

- `in(_element)` execute callback function on `_element` param when element enter into viewPort.
- `out(_element)` execute callback function on `_element` param when element outfrom viewPort.
- `onlyOne` (default: false) execute callback function on `_element` param when element enter into viewPort only one time.
- `paralax` (default: false) make element background as paralax effect.
