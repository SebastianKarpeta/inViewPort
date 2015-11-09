# inViewPort
This simple script detect that element is on viewPort and executed callbacks .in, .out on enter or exit into viewport.

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
