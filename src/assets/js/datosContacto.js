'use strict'
// Obtener los datos desde otro archivo (dataManager.js)
var datos_Contacto = localStorage.getItem('datos_Contacto');


// Elementos html
var listContainer = document.getElementById("listadoContactos");
var count = 0;
var contadorItems = document.getElementById("contadorItems");

// Inicialización
$( document ).ready(function() {
    var provinciaDDL = document.getElementById("provinciaDDL");
    var tipoDDL = document.getElementById("tipoDDL");
    Inicializar();
})

function Inicializar(){
    listContainer.innerHTML = "";
    count= 0;
    $.each(JSON.parse(datos_Contacto), function(i, item) {
        var newListItem = document.createElement("li");
        newListItem.innerHTML =`<div style="width: auto;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
                                    <article class="itemBuscadorContacto">
                                        <a href="${item.url}"><p style="color:#4c7cc9;text-align: center;">${item.name}</p></a>
                                        <p style="text-align: center;font-size: 15px;">${item.direccion}</p>
                                        <div style="display: flex;justify-content: space-around;margin-top: 15px;margin-bottom: 30px;">
                                        <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
                                            <p style="margin: 0;font-size: 16px;">Tfno. Citación</p>
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
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}

// Evento click del botón de buscar
document.getElementById("searchButton").addEventListener("click", function( event ) { 
    var provinciaValue = provinciaDDL.value;
    var tipoValue = tipoDDL.value;
    SearchItems(provinciaValue, tipoValue);

}, false);


// Buscar items filtrados
function SearchItems(provincia, tipo){
    listContainer.innerHTML = "";
    count= 0;
    $.each(JSON.parse(datos_Contacto), function(i, item) {

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


// PLANTILLA (no borrar)
// `<div style="width: auto;display: flex;justify-content: flex-start;align-items: center;flex-wrap: wrap;">
//     <article class="itemBuscadorContacto">
//         <p style="color:#4c7cc9;text-align: center;">${item.name}</p>
//         <p style="text-align: center;font-size: 15px;">${item.name}</p>
//         <div style="display: flex;justify-content: space-around;margin-top: 15px;margin-bottom: 30px;">
//         <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
//             <p style="margin: 0;font-size: 16px;">Tfno. Citacion</p>
//             <a class="d-block" href="tel:601 80 28 28">${item.name}</a>
//         </div>
//         <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;border: 1px solid #4c7cc9;padding:2px 10px;">
//             <p style="margin: 0;font-size: 16px;">Tfno. Recepción</p>
//             <a class="d-block" href="tel:601 80 28 28">${item.name}</a>
//         </div>
//         </div>
//         <div style="width: 100%;display: flex; justify-content: center;align-items: center;">
//         <a href="${item.url}" class="btn btn-md u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase d-flex" href=""><i class="icon-medical-019 u-line-icon-pro" style="margin-right: 10px;display: flex;align-items: center;"></i>Ver centro</a>
//         </div>
//     </article>
// </div>`