class Preguntas {
    constructor(pregunta, resA, resB, resC, resCorrecta, cita) {
        this.pregunta = pregunta;
        this.resA = resA;
        this.resB = resB;
        this.resC = resC;
        this.resCorrecta = resCorrecta;
        this.cita = cita;
    }
}


function crearPreguntas(ArrPreg) {

    var pre1 = new Preguntas("¿Quién fue la primera persona que fue llevada por Dios y no vió la muerte?", "Elías", "Moíses", "Enoc", "Enoc", "Génesis 5:24");
    var pre2 = new Preguntas("¿Quién fue el rey que mando a cortar los pulgares a 70 Reyes?", "Saúl", "Joram", "Adoni-bezec", "Adoni-bezec", " Jueces 1:7");
    var pre3 = new Preguntas("¿Quién cayó del tercer piso tras quedarse dormido en el discurso de Pablo?", "Silas", "Eutico", "Ananías", "Eutico", "Hechos 20:9");
    var pre4 = new Preguntas("¿Quién fue el primer Martir?", "Pedro", "Judas", "Esteban", "Esteban", "Hechos 7:59");
    var pre5 = new Preguntas("¿Quién fue el rey más joven registrado en la Biblía?", "Josías", "David", "Jeroboam", "Josías", "2 Crónicas 34:1");
    var pre6 = new Preguntas("¿Dónde se dirgia Pablo cuando se le revelo Jesucritso?", "Damasco", "Jerusalem", "Atenas", "Damasco", "Hechos 9");
    var pre7 = new Preguntas("¿En que lugar crucificaron a Jesús?", "Emaus", "Gólgota", "Juan", "Gólgota", "Mateo 27:33");
    var pre8 = new Preguntas("¿Quien vio una nube como la palma de un hombre?", "Elías", "El criado de Elías", "Ezequiel", "El criado de Elías", "1 Reyes 18:43-44");
    var pre9 = new Preguntas("¿Quién dijo: ¨Yo sé que mi Redentor vive, y al final se levantará sobre el polvo¨?", "Job", "Abraham", "Ezequiel", "Job", "Job 19:25");
    var pre10 = new Preguntas("¿Quién mató a mil filisteos con una quijada de asno?", "Saúl", "Sansón", "David", "Sansón", "Jueces 15:16");
    var pre11 = new Preguntas("¿En que libro de la Biblia se encuentra la venida del Espíritu Santo sobre los discípulos en el viento, fuego, y lenguas?", "Mateo", "Romanos", "Hechos", "Hechos", "Hechos 2");
    var pre12 = new Preguntas("¿En que libro de la Biblia se encuentra el Sermón del Monte?", "Mateo", "Romanos", "Hechos", "Mateo", "Mateo 5");
    var pre13 = new Preguntas("¿En que libro de la Biblia se encuentra la profecía de Jesús y la entrada triunfal en Jerusalén sobre un pollino?", "Zacarías", "Daniel", "Salmo", "Zacarías", "Zacarías 9:9 / Juan 12:13-14");

    var ArrPreg = [];
    ArrPreg.push(pre1);
    ArrPreg.push(pre2);
    ArrPreg.push(pre3);
    ArrPreg.push(pre4);
    ArrPreg.push(pre5);
    ArrPreg.push(pre6);
    ArrPreg.push(pre7);
    ArrPreg.push(pre8);
    ArrPreg.push(pre9);
    ArrPreg.push(pre10);
    ArrPreg.push(pre11);
    ArrPreg.push(pre12);
    ArrPreg.push(pre13);
    return ArrPreg;

}
var puntos = 0;
$(document).ready(function () {

    var modale2 = document.getElementById('siguiente');
    modale2.style.display = "none";
    var modale3 = document.getElementById('correcta');
    modale3.style.display = "none";
    var modale4 = document.getElementById('incorrecta');
    modale4.style.display = "none";

    var ArrPreg = [];
    ArrPreg = (crearPreguntas()).slice(0);

    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // Owl Carousel

    $("#owl-demo").owlCarousel({
        autoPlay: true,
        pagination: false,
        navigation: false

    });

    // Fancybox
    $('.work-box').fancybox();

    // Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - 76
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function () {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });

    //modal
    console.log("escribir");
    console.log(ArrPreg);
    var il = 0;
    $("#iniciar").click(function () {
        var yuu = document.getElementById("fondo");

        yuu.play();

        var modal = document.getElementById('myModal');
        modal.style.display = "inline";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";

        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";

            }
        }
        escribirPreguntas(il, ArrPreg);

    });


    $("#siguiente").click(function () {
         
        var modale3 = document.getElementById('correcta');
        modale3.style.display = "none";
        var modale4 = document.getElementById('incorrecta');
        modale4.style.display = "none";
        if (il < 12) {
            $("#resC").empty();
            $("#cita").empty();
            il++;
            escribirPreguntas(il, ArrPreg);
            var modale = document.getElementById('respuestas');
            modale.style.display = "block";
            var modale2 = document.getElementById('siguiente');
            modale2.style.display = "none";
        } else {
             $("#pregunta").empty();
                 var mo = document.getElementById('puntos');
          
            $("#total").text("Total : " + mo.textContent);
            var modale5 = document.getElementById('fin');
            modale5.style.display = "none";
            var modale2 = document.getElementById('siguiente');
            modale2.style.display = "none";
           
        }



    });

    $('body').on('click', '#respuestas button', function () {
        v = $(this).attr('id');
        //console.log( $("#"+v).text());
        verificarRespuesta(il, ArrPreg, v, puntos);
    })


});

function escribirPreguntas(i, ArrPreg) {
    console.log("escribir2 " + ArrPreg[0]);
    $("#pregunta").empty();

    $("#a").empty();
    $("#b").empty();
    $("#c").empty();
    $("#pregunta").text(ArrPreg[i].pregunta);
    $("#a").text(ArrPreg[i].resA);
    $("#b").text(ArrPreg[i].resB);
    $("#c").text(ArrPreg[i].resC);
}

function verificarRespuesta(i, ArrPreg, v, puntos) {
    var modale = document.getElementById('respuestas');
    modale.style.display = "none";
    var modale2 = document.getElementById('siguiente');
    modale2.style.display = "block";
    $("#pregunta").empty();
    $("#resC").empty();
    $("#cita").empty();

    $("#resC").text(ArrPreg[i].resCorrecta);
    $("#cita").text(ArrPreg[i].cita);
    if ($("#" + v).text() == ArrPreg[i].resCorrecta) {
        var modale3 = document.getElementById('correcta');
        modale3.style.display = "block";
        var yu = document.getElementById("find1");
        yu.play();
        var mo = document.getElementById('puntos');
        let b = mo.textContent;
        console.log(mo.textContent);
        var a = parseInt(b);
        a = a + 10;
        console.log(a);
        $("#puntos").text(a);
    } else {
        var yu = document.getElementById("find");

        yu.play();
        var modale4 = document.getElementById('incorrecta');
        modale4.style.display = "block";
    }

}
