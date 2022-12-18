'use strict'
// Obtener los datos desde otro archivo (dataManager.js)
var datos_CuadroMedico = localStorage.getItem('datos_CuadroMedico');


// Elementos html
var listContainer = document.getElementById("listadoMedicos");
var count = 0;
var contadorItems = document.getElementById("contadorItems");

// Inicialización
$( document ).ready(function() {
    Inicializar();
})

function Inicializar(){
    listContainer.innerHTML = "";
    count= 0;
    $.each(JSON.parse(datos_CuadroMedico), function(i, item) {
        var newListItem = document.createElement("li");
        newListItem.innerHTML =`<!-- Article -->
                                <article class="d-md-table w-100 g-bg-white g-mb-1 g-py-20 doctorFile">
                                <div class="row">
                                    <!-- Article Image -->
                                    <div class="col-md-2 medicoFoto">
                                        <a class="d-md-table-cell align-middle">
                                            <img class="d-block info-v5-2__image g-ml-minus-1" src="${item.urlImagen}" alt="Image Description">
                                        </a>
                                    </div>
                                    <!-- End Article Image -->
                                    
                                    <!-- Article Content -->
                                    <div class="col-md-4 medicoDatos"><br>
                                        <div class="d-md-table-cell align-middle">
                                        <h3 class="h6 g-font-weight-700 text-uppercase">
                                        <a class="g-color-gray-dark-v2" href="#">${item.name}</a>
                                        </h3>
                                        <a href=""><em class="d-block g-color-gray-dark-v4 g-font-style-normal g-font-size-13">${item.especialidad}</em></a>

                                        <hr class="g-brd-gray-light-v4 g-my-15">

                                        <div class="g-py-10">
                                        <!-- Figure Contacts -->
                                        <ul id="listadoHospitalesMedico${item.Id}" class="medicoHospitales list-unstyled g-color-gray-dark-v5 g-font-size-13 g-mb-0">
                                        </ul>
                                        <!-- End Figure Contacts -->
                                        </div>
                                    </div>
                                    </div>
                                    <!-- End Article Content -->

                                    <!-- Price -->
                                    <div class="col-md-4 d-md-table-cell align-middle g-py-5 g-px-20 doctorFile-icons">
                                        <!-- Figure List -->
                                        <ul class="row list-inline g-py-20 g-ma-0">
                                            <li class="col g-brd-right g-brd-gray-light-v4">
                                            <a title="Cita online" class="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-cyan--hover" href="#!">
                                                <i class="icon-communication-076 u-line-icon-pro"></i>
                                            </a>
                                            </li>
                                            <li class="col g-brd-right g-brd-gray-light-v4">
                                            <a title="Cita telefónica" class="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-red--hover" href="#!">
                                                <i class="icon-hotel-restaurant-010 u-line-icon-pro"></i>
                                            </a>
                                            </li>
                                            <li class="col">
                                            <a title="Vídeoconsulta" class="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-bg-transparent g-color-purple--hover" href="#!">
                                                <i class="icon-media-121 u-line-icon-pro"></i>
                                            </a>
                                            </li>
                                        </ul>
                                        <!-- End Figure List -->
                                    </div>
                                    <!-- End Price -->

                                    <!-- Actions -->
                                    <div class="col-md-2 align-middle">
                                        <div class="d-md-table-cell align-middle g-width-130 doctorFile-button">
                                            <button type="button" class="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-12 text-uppercase g-mx-5 g-mt-10" style="margin-top:17px !important;">Pedir cita</button>
                                        </div>
                                    </div>
                                    <!-- End Actions -->
                                </div>
                                </article>
                                <!-- End Article -->`;

        // Crear lista de hospitales de cada médico
        listContainer.appendChild(newListItem);
        var listadoHospitalesMedico = document.getElementById("listadoHospitalesMedico" + item.Id);
        item.hospitales.forEach(element => {
            var newListItem2 = document.createElement("li");
            newListItem2.innerHTML =`<li class="g-mb-10">
                                        <i class="g-pos-rel g-mt-1 mr-2 icon-location-pin u-line-icon-pro"></i>
                                        <a href="#">${element}</a>
                                    </li>`;
    
            listadoHospitalesMedico.appendChild(newListItem2);
        });

        // Sumar el contador de items encontrados
        count ++;
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}

// Buscar items filtrados
function SearchItems(provincia, tipo){
    listContainer.innerHTML = "";
    count= 0;
    $.each(JSON.parse(datos_CuadroMedico), function(i, item) {

        // Mostrar todos los resultados(provincia == "todas" y tipo == "todas")
        if(provincia == "todas" && tipo == "todas"){
            Inicializar();
            return
        }

        // Generar elemento que se va a repetir
        var newListItem = document.createElement("li");

        // Fitrado de resultados si los dos DDL tienen valor
        if(item.provincia == provincia && item.tipo == tipo){
            newListItem.innerHTML =`<div style="width: auto;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
                                        <article class="itemBuscadorContacto">
                                            <p style="color:#4c7cc9;text-align: center;">${item.name}</p>
                                            <p style="text-align: center;font-size: 15px;">${item.direccion}</p>
                                            <div style="display: flex;justify-content: space-around;margin-top: 15px;margin-bottom: 30px;">
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Citacion</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.citacion}</a>
                                            </div>
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Recepción</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.recepcion}</a>
                                            </div>
                                            </div>
                                            <div style="width: 100%;display: flex; justify-content: center;align-items: center;">
                                            <a href="${item.url}" class="btn btn-md u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase d-flex" href=""><i class="icon-medical-019 u-line-icon-pro" style="margin-right: 10px;display: flex;align-items: center;"></i>Ver centro</a>
                                            </div>
                                        </article>
                                    </div>`;
            listContainer.appendChild(newListItem); 
            count ++;
        }
        // Fitrado de resultados con provincia == "todas"        
        if(provincia == "todas" && item.tipo == tipo){
            newListItem.innerHTML =`<div style="width: auto;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
                                        <article class="itemBuscadorContacto">
                                            <p style="color:#4c7cc9;text-align: center;">${item.name}</p>
                                            <p style="text-align: center;font-size: 15px;">${item.direccion}</p>
                                            <div style="display: flex;justify-content: space-around;margin-top: 15px;margin-bottom: 30px;">
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Citacion</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.citacion}</a>
                                            </div>
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Recepción</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.recepcion}</a>
                                            </div>
                                            </div>
                                            <div style="width: 100%;display: flex; justify-content: center;align-items: center;">
                                            <a href="${item.url}" class="btn btn-md u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase d-flex" href=""><i class="icon-medical-019 u-line-icon-pro" style="margin-right: 10px;display: flex;align-items: center;"></i>Ver centro</a>
                                            </div>
                                        </article>
                                    </div>`;
            listContainer.appendChild(newListItem); 
            count ++;
        }

        // Fitrado de resultados con tipo == "todas"
        if(tipo == "todas" && item.provincia == provincia){
            newListItem.innerHTML =`<div style="width: auto;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
                                        <article class="itemBuscadorContacto">
                                            <p style="color:#4c7cc9;text-align: center;">${item.name}</p>
                                            <p style="text-align: center;font-size: 15px;">${item.direccion}</p>
                                            <div style="display: flex;justify-content: space-around;margin-top: 15px;margin-bottom: 30px;">
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Citacion</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.citacion}</a>
                                            </div>
                                            <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                                <p style="margin: 0;font-size: 16px;">Tfno. Recepción</p>
                                                <a class="d-block" href="tel:601 80 28 28">${item.recepcion}</a>
                                            </div>
                                            </div>
                                            <div style="width: 100%;display: flex; justify-content: center;align-items: center;">
                                            <a href="${item.url}" class="btn btn-md u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase d-flex" href=""><i class="icon-medical-019 u-line-icon-pro" style="margin-right: 10px;display: flex;align-items: center;"></i>Ver centro</a>
                                            </div>
                                        </article>
                                    </div>`;
            listContainer.appendChild(newListItem); 
            count ++;
        }

        // Evitar la recarga de la página
        event.preventDefault();
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}