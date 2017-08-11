/**
 * Created by Administrator on 2017/6/17 0017.
 */
$(function(){

    $(".food_nav_ul li").tap(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".dropdown-list .dropdown-item").eq($(this).index()).removeClass("active");
            $(".cover").hide();
            $(".food_bottom").css({"opacity":"0"})
        }else{
            $(this).addClass("active").siblings().removeClass("active");
            $(".dropdown-list .dropdown-item").eq($(this).index()).addClass("active").siblings().removeClass("active")
            $(".cover").show()
            $("body").css({"overflowY":"hidden"})
            $(".food_bottom").css({"opacity":"1"})
        }
    })
})


$(function(){

    $(".address_left li").tap(function(){
        $(".address_left ul").css({"width":"1.6rem"})
        $(".address_left ul li").css({"borderRight":"1px solid #ccc"})
        $(".address_right").css({"width":"5rem","display":"block"})
    })

})

















