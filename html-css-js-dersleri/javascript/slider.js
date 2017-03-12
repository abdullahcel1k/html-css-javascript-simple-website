$(function(){

var slider=0;
$.slider=function(toplam){
$("#slider ul#buton li").removeClass("aktif");
$("#slider ul#resim li").hide();

if(slider<toplam-1){

slider++;

$("#slider ul#buton li:eq("+slider+")").addClass("aktif");

$("#slider ul#resim li:eq("+slider+")").fadeIn("fast");
}else
{
$("#slider ul#buton li:first").addClass("aktif");

$("#slider ul#resim li:first").fadeIn("fast");
slider=0;

}

}
var toplamli=$("#slider ul#resim li").length;
    /* güncellenen kısım */
        for(var i=1;i<=toplamli;i++){
            $("ul#buton ").append('<li><a href="">'+i+'</a></li>');
        }

var interval= setInterval('$.slider('+toplamli+')',2000);
$("#slider").hover(function(){
clearInterval(interval);
},function(){

interval= setInterval('$.slider('+toplamli+')',2000);

});


$("#slider ul#buton li:first").addClass("aktif");
$("#slider ul#resim li").hide();
$("#slider ul#resim li:first").show();
$("#slider ul#buton li").click(function(){
var indis= $(this).index();
$("#slider ul#buton li").removeClass("aktif");
$(this).addClass("aktif");
$("#slider ul#resim li").hide();
$("#slider ul#resim li:eq("+indis+")").fadeIn("fast");
slider=indis;
return false

}
);
});
