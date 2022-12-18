'use strict'
// Página para el detalle de las especialidades
// Encontrar el id de la especialidad que se pasa a través de la URL como parámetro (id)
let params = new URLSearchParams(window.location.search);
let idEspecialidad = params.get("id");

// Seleccionamos la lista de especialidades que está en dataManager.js
var especialidades = localStorage.getItem('especialidades');

// Seleccionamos de esa lista nuestra especialidad a través del id
$.each(JSON.parse(especialidades), function(i, item) {
    if(item.ID_especialidad == idEspecialidad){
        FillData(item)
    }
});

// rellenamos el HTML con los datos del item especialidad
function FillData(item){
    // Datos principales
    let tituloBread = document.getElementById("esp_titleBread");
    let titulo = document.getElementById("esp_title");
    let imagen = document.getElementById("esp_image");
    let descripcion = document.getElementById("esp_description");  
    
    tituloBread.innerHTML = item.nombre;
    titulo.innerHTML = item.nombre;
    imagen.src = item.imagen;
    descripcion.innerHTML = item.descripcion_larga;

    // Médicos asociados a esta especialidad
    let carruselMedicos = document.getElementById("carruselMedicos");
    var medicos = localStorage.getItem('medicos');
    // var listaMedicos = [];

    $.each(JSON.parse(medicos), function(i, medico) {
        $.each(medico.IDs_especialidades, function(i, el){
            if(el == item.ID_especialidad){
                var newListItem = document.createElement("div");
                newListItem.innerHTML = GetPlantilla_Medico(medico);
                carruselMedicos.appendChild(newListItem);
            }
        });
    });
}

// Devolver la plantilla del item
function GetPlantilla_Medico(item){
    var plantilla =`<div class="js-slide g-px-15 g-pt-20">
                        <figure class="text-center">
                            <div class="mx-auto g-width-130 g-height-130 g-mb-15" style="width: 100% !important;display: flex;justify-content: center;">
                                <img class="g-width-120 g-height-120 rounded-circle" src="${item.imagen}" alt="Image Description">
                            </div>
                            
                            <h4 class="h6 g-color-black g-font-weight-700 g-mb-5"><a href="" style="color:#000000;">${item.nombre}</a></h4>
                            <h4 class="h6 g-color-black g-font-weight-700 g-mb-5"><a href="" style="color:#000000;">${item.apellidos}</a></h4>
                            <p class="g-font-size-12"><a href="">Alergología</a></p>
                            <ul class="list-unstyled g-height-80">
                                <li class="d-block g-color-gray-dark-v5 g-font-size-13">
                                    <i class="align-middle mr-2 icon-hotel-restaurant-235 u-line-icon-pro"></i>
                                    <a href="" style="color:#5d5b5b;">HM Regla</a>
                                </li>
                            </ul>

                            <a class="btn btn-block u-btn-primary g-color-white--hover g-bg-secondary-dark-light-v1--hover g-font-weight-600 g-font-size-12 text-uppercase rounded-0 g-px-25 g-py-8" href="" style="width: 70% !important;margin:0 auto;max-width: 150px;">Pedir cita
                            </a> 
                        </figure>
                    </div>`;
    return plantilla;
}