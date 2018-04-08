
/**
 * Created by jiao on 2017/12/21.
 */
$(document).ready(function(){
    $.ajax({
        type: "post",
        url: "127.0.0.1:8080/cms/module/details",
        data: {username:$("#username").val(), content:$("#content").val()},
        dataType: "json",
        success: function(data){
            $('#resText').empty();   //清空resText里面的所有内容
            var html = '';
            $.each(data, function(commentIndex, comment){
                html += '<div class="comment"><h6>' + comment['username']
                    + ':</h6><p class="para"' + comment['content']
                    + '</p></div>';
            });
            $('#resText').html(html);
        }
    });


    var $module_wrap = $("#about-animation");
    console.log($module_wrap);

    var $wrapEle = $(" <div class=\"wrap\" ></div>");

    var $module = $("<div class=\"about\"></div>");
    var $h1= $("<h1 class=\"about-heading\">软件设计自动化</h1>");
    var $text = $("<div class=\"about-text\">软件设计软件与代码的正逆向工程</div>");
    var $sepreater_str = $("<div class=\"sepreater\"></div>");
    $module.append($h1);
    $module.append($text);
    $module.append($sepreater_str);

    $wrapEle.append($module);

    var $desPar = $("<p class=\"about-des\">市面上很多软件产品，都已经有生成主流开发语言代码的插件了。使用这些插件，可以生成主流开发语言的相关代码，而无需手动编写代码，大大简化了代码编写时的重复劳动。&nbsp;" +
        " <br>还有一些插件，能够根据代码反向工程，生成对应的设计文档。</p>");

    $wrapEle.append($desPar);
    var  $module_img = $("<img class='about-img' src='images/about.png'"+
    " alt='52de15aa5d3566c14300015e_about.png'></img>");

    $wrapEle.append($module_img);
    $module_wrap.append($wrapEle);
});
