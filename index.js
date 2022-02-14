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










// nav




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

