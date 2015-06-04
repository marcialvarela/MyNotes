/**
 * Created by mvarela on 28/05/2015.
 */
/*************** MOSTRAR PANTALLA DE INICIO ***************/
function mostrarInicio() {
    document.getElementById("principal").style.backgroundColor = 'transparent';
    document.getElementById('inicio').style.visibility="visible";

    //Oculta botones menú
    document.getElementById('menu').style.visibility="hidden";
    document.getElementById('a1').style.visibility="hidden";
    document.getElementById('a2').style.visibility="hidden";
    document.getElementById('a3').style.visibility="hidden";
    document.getElementById('a4').style.visibility="hidden";

}

/*************** MOSTRAR MENU ***************/
function mostrarMenu() {
    document.getElementById("principal").style.backgroundColor = 'transparent';

    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";
    document.getElementById('a1').style.visibility="visible";
    document.getElementById('a2').style.visibility="visible";
    document.getElementById('a3').style.visibility="visible";
    document.getElementById('a4').style.visibility="visible";
    //document.getElementById('a5').style.visibility="visible";
}

function ocultarMenu() {
    document.getElementById("principal").style.backgroundColor = 'transparent';

    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="hidden";
    document.getElementById('a1').style.visibility="hidden";
    document.getElementById('a2').style.visibility="hidden";
    document.getElementById('a3').style.visibility="hidden";
    document.getElementById('a4').style.visibility="hidden";
    //document.getElementById('a5').style.visibility="visible";
    document.getElementById('Phototitle').style.visibility="hidden";

}

/*************** MOSTRAR AUDIO ***************/
function mostrarAudio() {
    ocultarMenu();
    document.getElementById("principal").style.backgroundColor = '#505D76';

    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="visible";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";


    document.getElementById('mostrarButtonsOK').style.visibility="visible";
    document.getElementById('btn1').style.visibility="visible";
    document.getElementById('btn2').style.visibility="visible";

    document.getElementById("menu").style.backgroundColor = '#505D76';

    //captureVideo();
}

/*************** MOSTRAR VIDEO ***************/
function mostrarVideo() {
    ocultarMenu();
    document.getElementById("principal").style.backgroundColor = '#3398FF';

    //alert('mostrarVideo');

    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="visible";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";


    document.getElementById('mostrarButtonsOK').style.visibility="visible";
    document.getElementById('btn1').style.visibility="visible";
    document.getElementById('btn2').style.visibility="visible";

    document.getElementById("menu").style.backgroundColor = '#3398FF';


    captureVideo();
}


/*************** MOSTRAR TEXT ***************/
function mostrarText() {

    ocultarMenu();
    document.getElementById("principal").style.backgroundColor = '#8CAD07';

    document.getElementById('inicio').style.visibility="hidden";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="visible";
    document.getElementById('mostrarPhoto').style.visibility="hidden";

    document.getElementById('mostrarButtonsOK').style.visibility="visible";
    document.getElementById('btn1').style.visibility="visible";
    document.getElementById('btn2').style.visibility="visible";

    document.getElementById("addText").focus();

}


/*************** MOSTRAR PHOTO ***************/
function mostrarPhoto() {

    ocultarMenu();
    document.getElementById("principal").style.backgroundColor = '#CA3749';


    document.getElementById('inicio').style.visibility="hidden";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="visible";
    document.getElementById('Phototitle').style.visibility="visible";



    document.getElementById('mostrarButtonsOK').style.visibility="visible";
    document.getElementById('btn1').style.visibility="visible";
    document.getElementById('btn2').style.visibility="visible";

    capturePhoto();
}


/********************   G U A R D A R **************************/
function guardarNota() {
    if (document.getElementById('mostrarAudio').style.visibility=="visible"){
        alert('guarda AUDIO');
    }
    else if (document.getElementById('mostrarVideo').style.visibility=="visible"){
        alert('guarda VIDEO');
    }
    else if (document.getElementById('mostrarText').style.visibility=="visible"){
        alert('guarda TEXT');
    }
    else if (document.getElementById('mostrarPhoto').style.visibility=="visible"){
        alert('guarda FOTO');
    }
}


/*************** CANCEL - vuelve al menú inicial ***************/
function cancelMenu()
{
    ocultarMenu();
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";

    document.getElementById('mostrarButtonsOK').style.visibility="hidden";
    document.getElementById('btn1').style.visibility="hidden";
    document.getElementById('btn2').style.visibility="hidden";

    document.getElementById("menu").style.backgroundColor = 'transparent';

    mostrarMenu();
}