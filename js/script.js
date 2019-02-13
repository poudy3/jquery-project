$(window).on("scroll",function(){
    let position=$(this).scrollTop();

    
    if(position > 700){
        $("#scrollToTop").css("opacity", 1)
    }
    if(position < 700){
        $("#scrollToTop").css("opacity", 0)
    }

})