//&#x5173;&#x952E;&#x8BCD;sug
$(function() {
    //&#x5F53;&#x952E;&#x76D8;&#x952E;&#x88AB;&#x677E;&#x5F00;&#x65F6;&#x53D1;&#x9001;Ajax&#x83B7;&#x53D6;&#x6570;&#x636E;
    $(&apos;#search-text&apos;).keyup(function() {
        var keywords = $(this).val();
        if (keywords == &apos;&apos;) { $(&apos;#word&apos;).hide(); return };
        $.ajax({
            url: &apos;https://suggestion.baidu.com/su?wd=&apos; + keywords,
            dataType: &apos;jsonp&apos;,
            jsonp: &apos;cb&apos;, //&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x53C2;&#x6570;&#x540D;(&#x952E;&#x503C;)key
            // jsonpCallback: &apos;fun&apos;, //&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x540D;(&#x503C;) value
            beforeSend: function() {
                // $(&apos;#word&apos;).append(&apos;<li>&#x6B63;&#x5728;&#x52A0;&#x8F7D;&#x3002;&#x3002;&#x3002;</li>&apos;);
            },
            success: function(data) {
                $(&apos;#word&apos;).empty().show();
                if (data.s == &apos;&apos;) {
                    //$(&apos;#word&apos;).append(&apos;<div class="error">Not find  &quot;&apos; + keywords + &apos;&quot;</div>&apos;);
                    $(&apos;#word&apos;).empty();
                    $(&apos;#word&apos;).hide();
                }
                $.each(data.s, function() {
                    $(&apos;#word&apos;).append(&apos;<li>&apos; + this + &apos;</li>&apos;);
                })
            },
            error: function() {
                $(&apos;#word&apos;).empty().show();
                //$(&apos;#word&apos;).append(&apos;<div class="click_work">Fail &quot;&apos; + keywords + &apos;&quot;</div>&apos;);
                $(&apos;#word&apos;).hide();
            }
        })
    })
    //&#x70B9;&#x51FB;&#x641C;&#x7D22;&#x6570;&#x636E;&#x590D;&#x5236;&#x7ED9;&#x641C;&#x7D22;&#x6846;
    $(document).on(&apos;click&apos;, &apos;#word li&apos;, function() {
        var word = $(this).text();
        $(&apos;#search-text&apos;).val(word);
        $(&apos;#word&apos;).empty();
        $(&apos;#word&apos;).hide();
        //$(&quot;form&quot;).submit();
         $(&apos;.submit&apos;).trigger(&apos;click&apos;);//&#x89E6;&#x53D1;&#x641C;&#x7D22;&#x4E8B;&#x4EF6;
    })
    $(document).on(&apos;click&apos;, &apos;.container,.banner-video,nav&apos;, function() {
        $(&apos;#word&apos;).empty();
        $(&apos;#word&apos;).hide();
    })

})