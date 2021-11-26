$(document).ready(function(){
    var imgLi = $(".imgBox");
    $.each(imgLi, function(index, value){
        $(value).mouseenter(function(e){
            $(this).stop().animate({'width':'538px','opacity':'1'},'200');
            $(this).siblings('.imgBox').stop().animate({'width':'100px','opacity':'0.4'},'200');
        })
    })
});