window = global;//node环境没有window变量，这里直接指向global
setTimeout = function(){};//无法更改混淆的代码，只有置空了，JS覆盖原则。
 document = {cookie:''};//以下模拟浏览器的document.cookie功能，也可以用jsdom，但是效率太低了，性能上不优雅。
 cookie_cache = document.cookie;
Object.defineProperty(document, 'cookie', {
    get: function() {
        return cookie_cache;
    },
    set: function(val) {
        var cookie = val.split(";")[0];
        var ncookie = cookie.split("=");
        var flag = false;
        var cache = cookie_cache.split(";");
        cache = cache.map(function(a){
            if (a.split("=")[0] === ncookie[0]){
                flag = true;
                return cookie;
            }
            return a;
        })
        cookie_cache = cache.join(";");
        if (!flag){
            cookie_cache += cookie + ";";
        }
    },
});

 oo1 = 'xKIOt5jUZQcS8wurcX4lghwlET9K0IWBUsS3ZqmSamCBTAPg7Fl5sVr443dyK42p';
 oo2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 oo3 = "5d649bbf281967eb054926c03ccdf691";
 oo4 = "b25307ef850b487196b99e3c7af9a8e6";
 oo5 = "721d4f847c476f9e36a134000ca89ce1";
 oo6 = "9f0041844aa3a6f3cce07976a33efa6e";
 oo7 = "2cd338e9eb6c7cfc5bab11ab1d9928af";
 oo8 = "19e79de4afab92151f0eef202293e8c4";
 oo9 = "e26d8920e748659c51874ae6ed6720f6";
$ = ~[];
$ = {
    ___: ++$,
    $$$$: (![] + "")[$],
    __$: ++$,
    $_$_: (![] + "")[$],
    _$_: ++$,
    $_$$: ({} + "")[$],
    $$_$: ($[$] + "")[$],
    _$$: ++$,
    $$$_: (!"" + "")[$],
    $__: ++$,
    $_$: ++$,
    $$__: ({} + "")[$],
    $$_: ++$,
    $$$: ++$,
    $___: ++$,
    $__$: ++$
};
$.$_ = ($.$_ = $ + "")[$.$_$] + ($._$ = $.$_[$.__$]) + ($.$$ = ($.$ + "")[$.__$]) + ((!$) + "")[$._$$] + ($.__ = $.$_[$.$$_]) + ($.$ = (!"" + "")[$.__$]) + ($._ = (!"" + "")[$._$_]) + $.$_[$.$_$] + $.__ + $._$ + $.$;
$.$$ = $.$ + (!"" + "")[$._$$] + $.__ + $._ + $.$ + $.$$;
$.$ = ($.___)[$.$_][$.$_];
$.$(
    $.$(
        $.$$ + "\"" + "\\"
        + $.__$ + $.$_$ + $.__$ + $.$$$$ + "(\\" + $.__$ + $.$$_
        + $.$$$ + "\\"
        + $.__$ + $.$_$ + $.__$ + "\\"
        + $.__$ + $.$_$ + $.$$_ + $.$$_$ + $._$ + "\\"
        + $.__$ + $.$$_ + $.$$$ + "."
        + $._$ + $._$ + $.__$ + "){" + $.$$_$ + $._$ + $.$$__ + $._
        + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$ + $.$_$ + $.$$_ + $.__ + "."
        + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$ + $.__$ + $.$$$_
        + "='\\" + $.__$ + $.__$ + $.$$$ + "\\" + $.__$ + $._$_ + $.___ + "\\" + $.__$ + $.___ + $.$_$
        + "\\" + $.__$ + $.__$ + $.$$_ + "_\\" + $.__$ + $.___ + $._$$ + "\\" + $.__$ + $.___
        + $.__$ + $.__$ + $.$__$ + $.$$$ + $.$___ + "\\" + $.__$ + $.___ + $.$__
        + $._$_ + "\\" + $.__$ + $.___ + $._$$ + $._$_ + "='+" + $._$ + $._$ + $.$__ + ";"
        + $.$$_$ + $._$ + $.$$__ + $._ + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.__ + "." + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\"
        + $.__$ + $.$_$ + $.__$ + $.$$$_ + "='\\" + $.__$ + $.__$ + $.$$$ + "\\" + $.__$ + $._$_
        + $.___ + "\\" + $.__$ + $.___ + $.$_$ + "\\" + $.__$ + $.__$ + $.$$_ + "_\\" + $.__$ + $.__$
        + $.__$ + "\\" + $.__$ + $.___ + $.$__ + "=\\" + $.__$ + $.__$ + $.$$_ + "\\" + $.__$
        + $.$_$ + $.__$ + "\\" + $.__$ + $.__$ + $._$_ + "\\" + $.__$ + $.$$$ + $.___ + "\\"
        + $.__$ + $.$$$ + $._$_ + "\\" + $.__$ + $._$_ + $.___ + "\\" + $.__$ + $.___ + $._$_ + "\\" + $.__$
        + $.$$$ + $._$_ + "\\" + $.__$ + $.$$_ + $._$$ + $._ + $._ + "\\"
        + $.__$ + $.__$ + $.$$_ + $.$$$_ + $.$$_$ + "\\" + $.__$
        + $.$$$ + $.__$ + $.___ + "\\" + $.__$ + $.__$ + $.__$
        + $.$$_$ + "\\" + $.__$ + $.___ + $.$$$ + $.$__$ + "\\" + $.__$
        + $.___ + $.$__ + $.$___ + "\\" + $.__$ + $.$_$ + $.$$_
        + "\\" + $.__$ + $._$$ + $._$_ + $._$_ + "\\" + $.__$
        + $._$_ + $._$$ + $.$$_$ + "\\" + $.__$ + $.$$_
        + $.$$_ + $.$_$_ + "\\" + $.__$ + $.__$ + $._$_ + "\\"
        + $.__$ + $._$_ + $.$$$ + $.$$$$ + $._$ + $.$$$$ + "\\"
        + $.__$ + $.$_$ + $.$_$ + $.___ + "\\" + $.__$ + $._$_ + $._$_
        + "\\" + $.__$ + $.$$$ + $.___ + $.$$__ + "\\" + $.__$ + $._$_
        + $.__$ + $.$$$ + "\\" + $.__$ + $.__$ + $.$_$ + "\\" + $.__$
        + $.___ + $.$_$ + "=';" + $.$$_$ + $._$ + $.$$__ + $._
        + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.__ + "." + $.$$__ + $._$ + $._$
        + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$ + $.__$
        + $.$$$_ + "='\\" + $.__$ + $._$_ + $.$_$ + "\\" + $.__$ + $.__$
        + $.$_$ + "_\\" + $.__$ + $.___ + $.$__ + "\\" + $.__$
        + $.__$ + $.__$ + "\\" + $.__$ + $._$_ + $._$$
        + "\\" + $.__$ + $._$_ + $.$__ + "\\" + $.__$
        + $.__$ + $.__$ + "\\" + $.__$ + $.__$ + $.$$_
        + "\\" + $.__$ + $.___ + $._$$ + "\\" + $.__$ + $._$_ + $.$__
        + "\\" + $.__$ + $.__$ + $.__$ + "\\"
        + $.__$ + $.___ + $.$__ + "=" + $.$$$
        + $.$__$ + $.__$ + $.$$$ + $.___
        + $.$_$ + $._$_ + $.$$_ + $.___ + $._$$
        + $.$$_ + $.$$$ + $._$$ + "'}\\" + $.__$ + $.$$_ + $.$$_
        + $.$_$_ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.$__
        + $.___ + "\\" + $.__$ + $.$__ + $.$$$ + $.$$$_ + $.__
        + "\\" + $.__$ + $.___ + $.$$$ + (![] + "")[$._$_]
        + $._$ + $.$_$$ + $.$_$_ + (![] + "")[$._$_] + "="
        + $.$$$$ + $._ + "\\" + $.__$ + $.$_$ + $.$$_
        + $.$$__ + $.__ + "\\" + $.__$ + $.$_$ + $.__$
        + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + "(){\\"
        + $.__$ + $.$_$ + $.__$ + $.$$$$ + "(" + $.__ + "\\"
        + $.__$ + $.$$$ + $.__$ + "\\" + $.__$ + $.$$_ + $.___
        + $.$$$_ + $._$ + $.$$$$ + "\\" + $.$__ + $.___ + "\\"
        + $.__$ + $.$$_ + $._$$ + $.$$$_ + (![] + "")[$._$_] + $.$$$$
        + "!=='" + $._ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$_$ + $.$$$_
        + $.$$$$ + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.$$$_ + $.$$_$ + "'){\\" + $.__$
        + $.$$_ + $._$_ + $.$$$_ + $.__ + $._ + "\\" + $.__$ + $.$$_
        + $._$_ + "\\" + $.__$ + $.$_$ + $.$$_ + "\\"
        + $.$__ + $.___ + "\\" + $.__$ + $.$$_ + $._$$
        + $.$$$_ + (![] + "")[$._$_] + $.$$$$ + "};\\"
        + $.__$ + $.$_$ + $.__$ + $.$$$$ + "(" + $.__
        + "\\" + $.__$ + $.$$$ + $.__$ + "\\" + $.__$ + $.$$_ + $.___
        + $.$$$_ + $._$ + $.$$$$ + "\\" + $.$__ + $.___ + "\\" + $.__$
        + $.$$_ + $.$$$ + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.$$_$ + $._$ + "\\" + $.__$ + $.$$_ + $.$$$
        + "!=='" + $._ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$_$ + $.$$$_
        + $.$$$$ + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$
        + $.$$_ + $.$$$_ + $.$$_$ + "'){\\" + $.__$ + $.$$_ + $._$_
        + $.$$$_ + $.__ + $._ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$
        + $.$_$ + $.$$_ + "\\" + $.$__ + $.___ + "\\" + $.__$ + $.$$_ + $.$$$
        + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$_$
        + $._$ + "\\" + $.__$ + $.$$_ + $.$$$ + "};\\" + $.__$ + $.$_$ + $.__$
        + $.$$$$ + "(" + $.__ + "\\" + $.__$ + $.$$$ + $.__$ + "\\" + $.__$
        + $.$$_ + $.___ + $.$$$_ + $._$ + $.$$$$ + "\\" + $.$__ + $.___ + "\\"
        + $.__$ + $.$__ + $.$$$ + (![] + "")[$._$_] + $._$ + $.$_$$ + $.$_$_
        + (![] + "")[$._$_] + "!=='" + $._ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$_$
        + $.$$$_ + $.$$$$ + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$
        + $.$$_ + $.$$$_ + $.$$_$ + "'){\\" + $.__$ + $.$$_ + $._$_ + $.$$$_
        + $.__ + $._ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$ + $.$_$
        + $.$$_ + "\\" + $.$__ + $.___ + "\\" + $.__$ + $.$__ + $.$$$
        + (![] + "")[$._$_] + $._$ + $.$_$$ + $.$_$_ + (![] + "")[$._$_]
        + "};" + $.__ + "\\" + $.__$ + $.$_$ + $.___ + "\\" + $.__$ + $.$$_
        + $._$_ + $._$ + "\\" + $.__$ + $.$$_ + $.$$$ + "\\" + $.$__ + $.___
        + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$$_ + "\\" + $.__$ + $.$$_
        + $.$$$ + "\\" + $.$__ + $.___ + "\\" + $.__$ + $.___ + $.$_$
        + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$ + $.$$_
        + $._$_ + $._$ + "\\" + $.__$ + $.$$_ + $._$_ + "('" + $._ + "\\"
        + $.__$ + $.$_$ + $.$$_ + $.$_$_ + $.$_$$ + (![] + "")[$._$_]
        + $.$$$_ + "\\" + $.$__ + $.___ + $.__ + $._$ + "\\" + $.$__
        + $.___ + (![] + "")[$._$_] + $._$ + $.$$__ + $.$_$_ + $.__
        + $.$$$_ + "\\" + $.$__ + $.___ + "\\" + $.__$ + $.$__ + $.$$$
        + (![] + "")[$._$_] + $._$ + $.$_$$ + $.$_$_ + (![] + "")[$._$_]
        + "\\" + $.$__ + $.___ + $._$ + $.$_$$ + "\\" + $.__$ + $.$_$
        + $._$_ + $.$$$_ + $.$$__ + $.__ + "')};" + $.$$$$ + $._ + "\\"
        + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.__ + "\\" + $.__$ + $.$_$
        + $.__$ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + "\\" + $.$__
        + $.___ + "_\\" + $.__$ + $.$$_ + $.___ + "\\" + $.__$ + $.$$_
        + $._$_ + $._$ + $.$$__ + $.$$$_ + "\\" + $.__$ + $.$$_ + $._$$
        + "\\" + $.__$ + $.$$_ + $._$$ + "(\\" + $.__$ + $.$$_ + $._$$
        + ")\\" + $.$__ + $.___ + "{\\" + $.__$ + $.$$_ + $.$$_ + $.$_$_
        + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.$__ + $.___ + "\\"
        + $.__$ + $.$$_ + $._$_ + $.$$$_ + "\\" + $.__$ + $.$$_ + $._$$
        + $._ + (![] + "")[$._$_] + $.__ + "\\" + $.$__ + $.___ + "=\\"
        + $.$__ + $.___ + "\\" + $.__$ + $.$$_ + $._$$ + ".\\" + $.__$
        + $.$$_ + $._$$ + $._ + $.$_$$ + "\\" + $.__$ + $.$$_ + $._$$
        + $.__ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$ + $.$_$
        + $.__$ + "\\" + $.__$ + $.$_$ + $.$$_ + "\\" + $.__$ + $.$__
        + $.$$$ + "(" + $.$$$ + ",\\" + $.$__ + $.___ + $.$__$ + ")."
        + $.$$__ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.$_$_
        + $.__ + "('" + $.$__ + "')." + $.$$__ + $._$ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.$$__ + $.$_$_ + $.__ + "(\\" + $.__$ + $.$$_
        + $._$$ + ".\\" + $.__$ + $.$$_ + $._$$ + $._ + $.$_$$ + "\\"
        + $.__$ + $.$$_ + $._$$ + $.__ + "\\" + $.__$ + $.$$_ + $._$_
        + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$ + $.$$_
        + "\\" + $.__$ + $.$__ + $.$$$ + "(" + $.__$ + $.$$_ + ",\\"
        + $.$__ + $.___ + $.__$ + $.$$$ + "))." + $.$$__ + $._$ + "\\"
        + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.$_$_ + $.__ + "('" + $.$$$
        + "')." + $.$$__ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$__
        + $.$_$_ + $.__ + "(\\" + $.__$ + $.$$_ + $._$$ + ".\\" + $.__$
        + $.$$_ + $._$$ + $._ + $.$_$$ + "\\" + $.__$ + $.$$_ + $._$$
        + $.__ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$ + $.$_$ + $.__$
        + "\\" + $.__$ + $.$_$ + $.$$_ + "\\" + $.__$ + $.$__ + $.$$$ + "("
        + $.__$ + $.__$ + ",\\" + $.$__ + $.___ + $.__$ + $.$_$ + "))."
        + $.$$__ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.$_$_
        + $.__ + "('\\" + $.__$ + $.$__ + $.$$$ + "')." + $.$$__ + $._$
        + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.$_$_ + $.__ + "(\\"
        + $.__$ + $.$$_ + $._$$ + ".\\" + $.__$ + $.$$_ + $._$$ + $._
        + $.$_$$ + "\\" + $.__$ + $.$$_ + $._$$ + $.__ + "\\" + $.__$
        + $.$$_ + $._$_ + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$
        + $.$_$ + $.$$_ + "\\" + $.__$ + $.$__ + $.$$$ + "(" + $.$$$ + "))."
        + $.$$__ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$__ + $.$_$_ + $.__
        + "('" + (![] + "")[$._$_] + "')." + $.$$__ + $._$ + "\\" + $.__$
        + $.$_$ + $.$$_ + $.$$__ + $.$_$_ + $.__ + "(\\" + $.__$ + $.$$_
        + $._$$ + ".\\" + $.__$ + $.$$_ + $._$$ + $._ + $.$_$$ + "\\"
        + $.__$ + $.$$_ + $._$$ + $.__ + "\\" + $.__$ + $.$$_ + $._$_
        + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$ + $.$$_
        + "\\" + $.__$ + $.$__ + $.$$$ + "(" + $.__$ + $._$$ + ",\\"
        + $.$__ + $.___ + $._$_ + $.__$ + "));\\" + $.__$ + $.$$_ + $._$_
        + $.$$$_ + $.__ + $._ + "\\" + $.__$ + $.$$_ + $._$_ + "\\" + $.__$
        + $.$_$ + $.$$_ + "\\" + $.$__ + $.___ + "\\" + $.__$ + $.$$_ + $._$_ + $.$$$_
        + "\\" + $.__$ + $.$$_ + $._$$ + $._ + (![] + "")[$._$_] + $.__ + ".\\"
        + $.__$ + $.$$_ + $._$$ + $._ + $.$_$$ + "\\" + $.__$ + $.$$_ + $._$$
        + $.__ + "\\" + $.__$ + $.$$_ + $._$_ + "(" + $.___ + ",\\" + $.$__ + $.___
        + $._$$ + $._$_ + ");};\\" + $.__$ + $.$$_ + $.$$_ + $.$_$_ + "\\" + $.__$
        + $.$$_ + $._$_ + "\\" + $.$__ + $.___ + "_\\" + $.__$ + $.$$_ + $._$$ + "\\"
        + $.__$ + $.$$_ + $.$$$ + "\\" + $.__$ + $.$_$ + $.__$ + $.__ + $.$$__ + "\\"
        + $.__$ + $.$_$ + $.___ + "=" + $.$$$$ + $.$_$_ + (![] + "")[$._$_] + "\\" + $.__$
        + $.$$_ + $._$$ + $.$$$_ + ";\\" + $.__$ + $.$_$ + $.__$ + $.$$$$ + "((\\" + $.__$
        + $.$__ + $.$$$ + $.$$$_ + $.__ + "\\" + $.__$ + $.___ + $.$$$ + (![] + "")[$._$_]
        + $._$ + $.$_$$ + $.$_$_ + (![] + "")[$._$_] + "()===\\" + $.__$ + $.$$_ + $.$$$
        + "\\" + $.__$ + $.$_$ + $.__$ + "\\" + $.__$ + $.$_$ + $.$$_ + $.$$_$ + $._$ + "\\"
        + $.__$ + $.$$_ + $.$$$ + ")){_\\" + $.__$ + $.$$_ + $._$$ + "\\" + $.__$ + $.$$_ + $.$$$
        + "\\" + $.__$ + $.$_$ + $.__$ + $.__ + $.$$__ + "\\" + $.__$ + $.$_$ + $.___ + "="
        + $.__ + "\\" + $.__$ + $.$$_ + $._$_ + $._ + $.$$$_ + "}" + $.$$$_ + (![] + "")[$._$_] + "\\" + $.__$ + $.$$_ + $._$$ + $.$$$_ + "{_\\" + $.__$ + $.$$_ + $._$$ + "\\" + $.__$ + $.$$_ + $.$$$ + "\\" + $.__$ + $.$_$ + $.__$
        + $.__ + $.$$__ + "\\" + $.__$ + $.$_$ + $.___ + "=" + $.$$$$ + $.$_$_ + (![] + "")[$._$_] + "\\"
        + $.__$ + $.$$_ + $._$$ + $.$$$_ + "};" + $.$$_$ + $._$ + $.$$__ + $._ + "\\"
        + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$ + $.$_$ + $.$$_ + $.__ + "."
        + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$
        + $.__$ + $.$$$_ + "='\\" + $.__$ + $._$_ + $._$$ + "\\" + $.__$ + $.__$ + $.__$ + "\\"
        + $.__$ + $.___ + $.$$$ + "\\" + $.__$ + $.__$ + $.$$_ + "\\" + $.__$ + $.__$ + $.__$ + "\\" + $.__$ + $.__$ + $.$$_ + "_\\" + $.__$ + $.__$ + $.__$ + "\\" + $.__$ + $.___ + $.$__ + "=" + $.$___ + $.$$$$ + $.$__ + $.$_$_ + $.___
        + $.$__ + $.$_$_ + $.$$__ + $.$$__ + $.$$$_ + $._$_ + $.$$$_ + $.___ + $.$_$_ + $.$__ + $._$$ + $.$$_$ + $.$_$ + $.__$ + $.$$__ + $._$_ + $.$_$_ + $.__$ + $.__$ + $.$__ + $.$$__ + $.$$$ + $.$$$ + $.$_$ + $.$$$_ + $.$__ + $.$_$_ + "';" + $.$$_$ + $._$
        + $.$$__ + $._ + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$ + $.$_$ + $.$$_ + $.__ + "." + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$ + $.__$ + $.$$$_ + "='\\" + $.__$ + $._$_ + $._$$ + "\\"
        + $.__$ + $.__$ + $.__$ + "\\" + $.__$ + $.___ + $.$$$ + "\\" + $.__$ + $.__$ + $.$$_ + "\\" + $.__$ + $.__$ + $.__$ + "\\" + $.__$ + $.__$ + $.$$_ + "_\\" + $.__$ + $._$_ + $.$_$ + "\\" + $.__$ + $.___ + $._$$ + "=" + $.__$ + $.$$_ + $.$$_ + $.$$$$ + $.$$$$ + $.$_$_ + $._$$ + $._$_ + $._$$ + $.$__ + $.$$_ + $.$$_ + $.__$ + $.__$
        + $.___ + $.$__$ + $.$$$_ + $.$___ + $.$$_$ + $.$___ + $.$__$ + $.$$_$ + $.$$$$ + $.$$$_ + $.$$__ + $.$$$$ + $.$___ + $.$$$_ + $.__$ + $.$_$$ + $.$_$_ + $.$_$$ + "';" + $.$$_$ + $._$ + $.$$__ + $._ + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$ + $.$_$ + $.$$_ + $.__ + "." + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$ + $.__$ + $.$$$_ + "='\\" + $.__$
        + $._$_ + $.$_$ + "\\" + $.__$ + $.__$ + $.$$_ + "\\" + $.__$ + $.___ + $.$__ + "\\" + $.__$ + $.___ + $.$_$ + "\\" + $.__$ + $.___ + $.$$_ + "\\" + $.__$ + $.__$ + $.__$ + "\\" + $.__$ + $.__$ + $.$$_ + "\\" + $.__$ + $.___ + $.$_$ + "\\" + $.__$ + $.___ + $.$__ + "=" + $.$_$ + $.$___ + $._$$ + $._$_ + $.$_$$ + $.$$$$ + $.___ + $.$$_$ + $.$__
        + $.__$ + $.__$ + $.$$$_ + $.$$$_ + $.$__$ + $.$$__ + $.$$$_ + $.$$_$ + $.__$ + $.$___ + $._$$ + $.$__$ + $.___ + $.$$$$ + $._$_ + $.$$_ + $.___ + $.$$__ + $.$$_ + $.$__ + $.$$_
        + $.$$$ + $.$$$ + "';\\" + $.__$ + $.$_$ + $.__$ + $.$$$$ + "(_\\" + $.__$ + $.$$_ + $._$$
        + "\\" + $.__$ + $.$$_ + $.$$$ + "\\" + $.__$ + $.$_$
        + $.__$ + $.__ + $.$$__ + "\\" + $.__$ + $.$_$ + $.___
        + "){" + $.$$_$ + $._$ + $.$$__ + $._ + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + "\\" + $.__$ + $.$_$ + $.$$_ + $.__ + "." + $.$$__ + $._$ + $._$ + "\\" + $.__$ + $.$_$ + $._$$ + "\\" + $.__$ + $.$_$ + $.__$ + $.$$$_ + "='\\" + $.__$ + $.__$ + $.$$$
        + "\\" + $.__$ + $._$_ + $.___ + "\\" + $.__$ + $.___ + $.$_$ + "\\" + $.__$ + $.__$ + $.$$_ + "_\\" + $.__$ + $.___ + $._$$ + $.$__$ + $.$$$ + "\\" + $.__$ + $.___ + $.$$_ + $.$__$ + $.$__$ + "\\" + $.__$ + $.___ + $.$_$ + "\\" + $.__$ + $.___ + $._$_ + $.$$_ + $.$__ + "='+_\\" + $.__$ + $.$$_ + $.___
        + "\\" + $.__$ + $.$$_ + $._$_ + $._$ + $.$$__ + $.$$$_ + "\\"
        + $.__$ + $.$$_ + $._$$ + "\\" + $.__$ + $.$$_ + $._$$ + "("
        + $._$ + $._$ + $.$__ + ");\\" + $.__$ + $.$$_ + $._$$ + $.$$$_
        + $.__ + "\\" + $.__$ + $._$_ + $.$__ + "\\" + $.__$ + $.$_$ + $.__$
        + "\\" + $.__$ + $.$_$ + $.$_$ + $.$$$_ + $._$ + $._ + $.__ + "(\\\""
        + (![] + "")[$._$_] + $._$ + $.$$__ + $.$_$_ + $.__ + "\\"
        + $.__$ + $.$_$ + $.__$ + $._$ + "\\" + $.__$ + $.$_$ + $.$$_ + ".\\"
        + $.__$ + $.$$_ + $._$_ + $.$$$_ + (![] + "")[$._$_] + $._$ + $.$_$_
        + $.$$_$ + "();\\\"," + $.__$ + $.___ + $.___ + ");}" + "\"")())();

console.log(document.cookie)