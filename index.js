//index
// new fullpage('#fullpage',{
//     navigation: true,
//     responsiveWidth: 700,
//     anchors:['home','about-us','contact'],
//     parallax:true,
//     onLeave:function(origin, destination, direction){
//         console.log("Leaving section" + origin.index);
//     },
// });


//arrow
// $(function(){
//     showScroll();
//     function showScroll(){
//     $(window).scroll( function() {
//     var scrollValue=$(window).scrollTop();
//     scrollValue > 100 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();
//     } );
//     $('#scroll').click(function(){
//     $("html,body").animate({scrollTop:0},200);
//     });
//     }
//     })







// nav


//menu
// var detail = document.getElementsByClassName('detail')[0];
// detail.addEventListener("click",finction(e){
    
// });
// question

// function Show_Hidden(obj)
// {
// if(obj.style.display=="block")
// {
// obj.style.display='none';
// }
// else
// {
// obj.style.display='block';
// }
// }
// window.onload=function()
// {
// var olink=document.querySelectorAll(".link");
// var odiv=document.querySelectorAll(".thediv");
// olink.onclick=function()
// {
// Show_Hidden(odiv);
// return false;
// }
// }

$(document).ready(function(){
    $(".link").click(function(){
        $(this).next(".thediv").slideToggle();
    });
});

