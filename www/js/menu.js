/**
 * Created by mvarela on 28/05/2015.
 */
function mostrarMenu() {
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";
}

/*************** MOSTRAR AUDIO ***************/
function mostrarAudio() {
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="visible";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";


    document.getElementById('mostrarButtonsOK').style.visibility="visible";

    document.getElementById("menu").style.backgroundColor = '#505D76';

    //captureVideo();
}

/*************** MOSTRAR VIDEO ***************/
function mostrarVideo() {
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="visible";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";


    document.getElementById('mostrarButtonsOK').style.visibility="visible";

    document.getElementById("menu").style.backgroundColor = '#3398FF';

    captureVideo();
}


/*************** MOSTRAR TEXT ***************/
function mostrarText() {
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="visible";
    document.getElementById('mostrarPhoto').style.visibility="hidden";

    document.getElementById('mostrarButtonsOK').style.visibility="visible";

    document.getElementById("addText").focus();
    document.getElementById("menu").style.backgroundColor = '#8CAD07';
}


/*************** MOSTRAR PHOTO ***************/
function mostrarPhoto() {
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="visible";


    document.getElementById('mostrarButtonsOK').style.visibility="visible";

    document.getElementById("menu").style.backgroundColor = '#CA3749';

    capturePhoto();
}



/*************** CANCEL - vuelve al menú inicial ***************/
function cancelMenu()
{
    document.getElementById('inicio').style.visibility="hidden";
    document.getElementById('menu').style.visibility="visible";

    document.getElementById('mostrarAudio').style.visibility="hidden";
    document.getElementById('mostrarVideo').style.visibility="hidden";
    document.getElementById('mostrarText').style.visibility="hidden";
    document.getElementById('mostrarPhoto').style.visibility="hidden";

    document.getElementById('mostrarButtonsOK').style.visibility="hidden";

    document.getElementById("menu").style.backgroundColor = 'transparent';
}