
function initGame() {
    const limiteX = getFieldWidth();
    const limiteY = getFieldHeight();

    var x = getRandomArbitrary(50, limiteX -50);
    var y = getRandomArbitrary(50, limiteY -50);

    var positionHole = $(".hole").position();

    $(".positionFlag").css({top: positionHole.top, left: positionHole.left, position:'absolute'});
    $(".positionFlag").animate({top: '30px'});
    $(".positionHole").css({top: y, left: x, position:'absolute'});
}

//Ball in hole
$(".hole").mouseenter(function(){
    $(".flag").hide()
    $(".hole").hide()
    initGame();
    $(".flag").show('slow');
    $(".hole").show('slow');
})

// Retorna tamaño en px del campo
function getFieldHeight() {
    return $("#field").innerHeight();
}

function getFieldWidth() {
    return $("#field").innerWidth();
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

initGame();
$(".flag").hide()
