'use strict'
// Obtener los datos desde otro archivo (dataManager.js)
var datos_Hospitales = localStorage.getItem('datos_Hospitales');

function GetHospitalData(idHospital){
    $.each(JSON.parse(datos_Hospitales), function(i, item) {
        if(item.Id === idHospital){
            FillData(item);
        }
    });
}

// Popup Urgencias
$("#infoUrgenciasCuadrado").addClass("hiddenPopUp");
// Evento click del botón consultar horario Urgencias
document.getElementById("btnHorariosUrgencias").addEventListener("click", function( event ) { 
    $("#infoUrgencias").addClass("hiddenPopUp");
    $("#infoUrgenciasCuadrado").removeClass("hiddenPopUp");
    $("#infoUrgenciasCuadrado").addClass("showingPopUpFlex");
}, false);

document.getElementById("closeHorariosUrgencias").addEventListener("click", function( event ) { 
    $("#infoUrgenciasCuadrado").addClass("hiddenPopUp");
    $("#infoUrgenciasCuadrado").removeClass("showingPopUpFlex");
    $("#infoUrgencias").removeClass("hiddenPopUp");
    $("#infoUrgencias").addClass("showingPopUpFlex");
}, false);

// Popup Atención
$("#infoAtencionCuadrado").addClass("hiddenPopUp");
// Evento click del botón consultar horario Atención
document.getElementById("btnHorariosAtencion").addEventListener("click", function( event ) { 
    $("#infoAtencion").addClass("hiddenPopUp");
    $("#infoAtencionCuadrado").removeClass("hiddenPopUp");
    $("#infoAtencionCuadrado").addClass("showingPopUpFlex");
}, false);

document.getElementById("closeHorariosAtencion").addEventListener("click", function( event ) { 
    $("#infoAtencionCuadrado").addClass("hiddenPopUp");
    $("#infoAtencionCuadrado").removeClass("showingPopUpFlex");
    $("#infoAtencion").removeClass("hiddenPopUp");
    $("#infoAtencion").addClass("showingPopUpFlex");
}, false);

// Popup Visitas
$("#infoVisitasCuadrado").addClass("hiddenPopUp");
// Evento click del botón consultar horario Atención
document.getElementById("btnHorariosVisitas").addEventListener("click", function( event ) { 
    $("#infoVisitas").addClass("hiddenPopUp");
    $("#infoVisitasCuadrado").removeClass("hiddenPopUp");
    $("#infoVisitasCuadrado").addClass("showingPopUpFlex");
}, false);

document.getElementById("closeHorariosVisitas").addEventListener("click", function( event ) { 
    $("#infoVisitasCuadrado").addClass("hiddenPopUp");
    $("#infoVisitasCuadrado").removeClass("showingPopUpFlex");
    $("#infoVisitas").removeClass("hiddenPopUp");
    $("#infoVisitas").addClass("showingPopUpFlex");
}, false);



// Rellenar datos de la zona de detalle
function FillData(item){

    // Cargar los datos de la parte izquierda
    var containerInfo = document.getElementById("infoHospitalIzquierda");
    containerInfo.innerHTML = `<div class="align-self-center">
                                <header class="u-heading-v8-2 g-mb-20">
                                <h2 class="u-heading-v8__title g-color-white text-uppercase g-font-weight-700 g-mb-0">
                                    <strong class="g-font-size-12 g-bg-bluegray g-mb-20">${item.nombre}</strong>
                                    <br>
                                    <span class="g-color-black-opacity-0_9">Datos de</span>
                                    contacto
                                </h2>
                                </header>

                                <div class="lead g-font-weight-400 g-mb-20">
                                <p id="description">${item.descripcion}</p>
                                </div>

                                <address class="text-uppercase g-line-height-2 g-mb-40">
                                <p>Citación consultas: <a class="g-color-white" href="telto:${item.consultas[0]}"><strong>${item.consultas[0]}</strong></a> / <a class="g-color-white" href="telto:${item.consultas[1]}"><strong>${item.consultas[1]}</strong></a></p>
                                <p>Citación radiología: <a class="g-color-white" href="telto:${item.radiologia[0]}"><strong>${item.radiologia[0]}</strong></a> / <a class="g-color-white" href="telto:${item.radiologia[1]}"><strong>${item.radiologia[1]}</strong></a></p>
                                <p>Citación odontología: <a class="g-color-white" href="telto:${item.odontologia[0]}"><strong>${item.odontologia[0]}</strong></a> / <a class="g-color-white" href="telto:${item.odontologia[1]}"><strong>${item.odontologia[1]}</strong></a></p>
                                <p>Dirección: <a class="g-color-white" href="https://www.google.com/maps?ll=40.431336,-3.706776&z=17&t=m&hl=es-ES&gl=ES&mapclient=embed&cid=2576941601403024312" target="_blank"><strong>${item.direccion}</strong></a></p>
                                </address>

                                <h2 class="g-color-white text-uppercase g-font-weight-700 g-mb-20"> ¿Cómo
                                <span class="g-color-black">Llegar?</span>
                                </h2>
                                <!-- Icon Blocks -->
                                <div class="row">
                                <div class="col-lg-4 g-mb-30">
                                    <!-- Icon Blocks -->
                                    <div class="text-center">
                                    <span class="d-block g-color-white g-font-size-40 g-mb-5">
                                        <i class="icon-transport-004 u-line-icon-pro u-line-icon-pro"></i>
                                    </span>
                                    <h4 class="h6 g-color-black mb-0 g-font-size-12"><strong>Metro</strong><br>${item.metro}</h4>
                                    </div>
                                    <!-- End Icon Blocks -->
                                </div>

                                <div class="col-lg-4 g-mb-30">
                                    <!-- Icon Blocks -->
                                    <div class="text-center">
                                    <span class="d-block g-color-white g-font-size-40 g-mb-5">
                                        <i class="icon-transport-003 u-line-icon-pro u-line-icon-pro"></i>
                                    </span>
                                    <h4 class="h6 g-color-black mb-0 g-font-size-12"><strong>Autobús</strong><br>${item.autobus}</h4>
                                    </div>
                                    <!-- End Icon Blocks -->
                                </div>

                                <div class="col-lg-4 g-mb-30">
                                    <!-- Icon Blocks -->
                                    <div class="text-center">
                                    <span class="d-block g-color-white g-font-size-40 g-mb-5">
                                        <i class="icon-transport-002 u-line-icon-pro u-line-icon-pro"></i>
                                    </span>
                                    <h4 class="h6 g-color-black mb-0 g-font-size-12"><strong>Parking</strong><br>${item.parking}</h4>
                                    </div>
                                    <!-- End Icon Blocks -->
                                </div>

                                </div>
                            </div>`;

    // Cargar los datos de la parte derecha
    var hospitalTitle = document.getElementById("hospitalTitle");
    hospitalTitle.innerHTML = item.nombre;
    var hospitalTitle2 = document.getElementById("hospitalTitle2");
    hospitalTitle2.innerHTML = item.nombre;
    var horariosCafeteria = document.getElementById("horarioCafeteria");
    horariosCafeteria.innerHTML = item.cafeteria;
    var horarioVisitas = document.getElementById("horarioVisitas");
    horarioVisitas.innerHTML = item.visitas;
}
