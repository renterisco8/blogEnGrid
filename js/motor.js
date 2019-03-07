$(document).ready(function(){
	$(".leerMas1").hide();
	$(".leerMas2").hide();
	$(".leerMas3").hide();

    $("#noticia1").click(function(){
        $(".leerMas2").hide(500);
        $(".leerMas3").hide(500);
        $(".leerMas1").show(500);
    });

    $("#noticia2").click(function(){
    	$(".leerMas1").hide(500);
    	$(".leerMas3").hide(500);
        $(".leerMas2").show(500);
    });

    $("#noticia3").click(function(){
    	$(".leerMas1").hide(500);
    	$(".leerMas2").hide(500);
        $(".leerMas3").show(500);
    });
});
