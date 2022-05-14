/*---------Loading------------ */

//En 5 segundos aparece el juego
$("#patan").addClass("hide");
$(".juego").addClass("hide");
setTimeout(function () {
    $(".intro").addClass("hide");
}, 5000);
setTimeout(function () {
    $(".juego").removeClass("hide");
}, 5000);


/*---------Juego-------------- */

/*Al apretar en el numero de participantes recibimos el valor 
del numero de coches que se usuara en el bucle, apareceran en la pantalla 
y se almacenaran en el array junto a sus velocidades*/
var coches = [];
$("#participantes").change(function () {
    coches = [];
    $(".coche").addClass("hide");
    $(".logoLoading").addClass("hide");
    var numeroDeCoches = $("#participantes").val(); 
    for (var i = 1; i <= numeroDeCoches; i++) {
        var actual = "coche" + i;
        $(".coche[data-id='" + actual + "']").removeClass("hide"); 
        coches.push({
            "cocheActual": actual,
            "velocidad": Math.floor(Math.random() * (11 - 1) + 1) 
        }); 
    }
})

/* Al presionar el boton de inicio se ocultan o aparecen los elementos que necesitamos*/
$("#inicio").click(function () {
    $("#reiniciar").removeClass("hide");
    $("#tabla").removeClass("hide");
    setTimeout(function () {
        $("#patan").removeClass("hide");
    }, 6500);
    $("#etiqueta").addClass("hide");
    $("#inicio").addClass("hide");
    
/* Se anima a los coches y una vez llegan a la meta se introduce su posicion en la tabla*/
    var posicion = 1;
    coches.forEach(function (coche) {
        $(".coche[data-id='" + coche["cocheActual"] + "']").animate({
            marginLeft: "100%"
        }, coche["velocidad"] * 1000, function () {
            $('#posiciones tbody').append('<tr><td>' + posicion + '</td><td>' + coche["cocheActual"] + '</td></tr>');
            posicion = posicion + 1;
        });
    });
});

/*---------Reiniciar------------ */

/* Al presionar el boton de reinicio se ocultan o aparecen los elementos que necesitamos
Los coches vuelven al punto de salida y la tabla se vacia*/
$("#reiniciar").click(function () {
    $("#reiniciar").addClass("hide");
    $("#tabla").addClass("hide");
    $(".losResultados").addClass("hide");
    $("#patan").addClass("hide");
    $("#inicio").removeClass("hide");
    $("#etiqueta").removeClass("hide");
    $("#inicio").removeClass("hide");
    $(".coche").animate({
        marginLeft: "0"
    });
    $("#posiciones > tbody").html("");
});