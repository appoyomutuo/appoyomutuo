'use strict'
// ENTIDADES
// Los datos de las entidades estan en "dataManager.js" y guardadas en localStorage
var provincias = localStorage.getItem('provincias');
var centros_medicos = localStorage.getItem('centros_medicos');
var especialidades = localStorage.getItem('especialidades');
var medicos = localStorage.getItem('medicos');

// ELEMENTOS HTML
var listaMedicos = "";
var nombreApellidosInput = "";
var provinciaDDL = "";
var centroDDL = "";
var especialidadDDL = "";
var provinciasDDL_creacion = "";
var centroDDL_creacion = "";
var especialidadDDL_creacion = "";
var contadorItems = "";
var sectionBuscador = "";
var sectionCrear = "";
var count = 0;

$( document ).ready(function() {
    // Encontrar elementos html
    listaMedicos = document.getElementById("listaMedicos");
    nombreApellidosInput = document.getElementById("nombreApellidosInput");
    provinciaDDL = document.getElementById("provinciaDDL");
    centroDDL = document.getElementById("centroDDL");
    especialidadDDL = document.getElementById("especialidadDDL");

    provinciasDDL_creacion = document.getElementById("provinciasDDL_creacion");
    centroDDL_creacion = document.getElementById("centroDDL_creacion");
    especialidadDDL_creacion = document.getElementById("especialidadDDL_creacion");

    contadorItems = document.getElementById("contadorItems");

    sectionBuscador = document.getElementById("sectionBuscador");
    sectionCrear = document.getElementById("sectionCrear");
    sectionCrear.style ="display: none;"

    Inicializar();
})

// INICIO
function Inicializar (){
    // Rellenar DDL´s
    FillDDLs();
    FillDDLs_Creacion();

    // Rellenar la lista de medicos con todas
    Set_ListaInicial();
}

// FUNCIONES
// rellenar DDLs
function FillDDLs(){
    // ::::::::::::::::::::::::::::::::::::::::::::::::DDL provincia
    provinciaDDL.innerHTML = "";

    // opción default
    var opt_Prov = document.createElement("option");
    opt_Prov.value= "*";
    opt_Prov.innerHTML = "Todos";

    provinciaDDL.appendChild(opt_Prov);

    // otras opciones
    $.each(JSON.parse(provincias), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.valueDDL;
        opt.innerHTML = item.nombre;

        provinciaDDL.appendChild(opt);
    });

    // ::::::::::::::::::::::::::::::::::::::::::::::::DDL centro
    centroDDL.innerHTML = ""

    // opción default
    var opt_Centro = document.createElement("option");
    opt_Centro.value= "*";
    opt_Centro.innerHTML = "Todos";
    centroDDL.appendChild(opt_Centro);
    // otras opciones
    $.each(JSON.parse(centros_medicos), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.ID_centroMedico;
        opt.innerHTML = item.nombre;

        centroDDL.appendChild(opt);
    });

    // ::::::::::::::::::::::::::::::::::::::::::::::::DDL especialidad
    especialidadDDL.innerHTML = "";

    // opción default
    var opt_Especialidad = document.createElement("option");
    opt_Especialidad.value= "*";
    opt_Especialidad.innerHTML = "Todas";

    especialidadDDL.appendChild(opt_Especialidad);

    // otras opciones
    $.each(JSON.parse(especialidades), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.ID_especialidad;
        opt.innerHTML = item.nombre;

        especialidadDDL.appendChild(opt);
    });

    // ::::::::::::::::::::::::::::::::::::::::::::::::Funcionalidad cuando se elige un valor
    $( "#provinciaDDL" ).change(function() {
        let val = provinciaDDL.value;
        ChangeDDLs(val, "", "");
        nombreApellidosInput.value  = "";
    });

    $( "#centroDDL" ).change(function() {
        let val = centroDDL.value;
        ChangeDDLs("", val, "");
        nombreApellidosInput.value  = "";
    });

    $( "#especialidadDDL" ).change(function() {
        let val = especialidadDDL.value;
        ChangeDDLs("", "", val);
        nombreApellidosInput.value  = "";
    });
}

function ChangeDDLs(provincia, centro, especialidad){
    // PROVINCIA
    if(provincia != ""){
        if(provincia == "*"){
            Inicializar();
        }
        // DDL centro
        centroDDL.innerHTML = ""

        // opción default
        var opt_Centro = document.createElement("option");
        opt_Centro.value= "*";
        opt_Centro.innerHTML = "Todos";

        centroDDL.appendChild(opt_Centro);

        // otras opciones
        $.each(JSON.parse(centros_medicos), function(i, item) {

            if(item.provincia === provincia){
                var opt = document.createElement("option");
                opt.value= item.ID_centroMedico;
                opt.innerHTML = item.nombre;
        
                centroDDL.appendChild(opt);
            }
        });

        // DDL especialidad
        especialidadDDL.innerHTML = "";

        // opción default
        var opt_Especialidad = document.createElement("option");
        opt_Especialidad.value= "*";
        opt_Especialidad.innerHTML = "Todas";

        especialidadDDL.appendChild(opt_Especialidad);

        $.each(JSON.parse(especialidades), function(i, item) {
            item.IDs_provincia.forEach(element => {
                if(element == provincia){
                    var opt = document.createElement("option");
                    opt.value= item.ID_especialidad;
                    opt.innerHTML = item.nombre;
            
                    especialidadDDL.appendChild(opt);
                }
            });
        });
    }
    // CENTRO
    else if(centro != ""){
        if(centro == "*"){
            var provincia = provinciaDDL.value;
            if(provincia == "*"){
                Inicializar();
            }else{
                let current_especialidad = especialidadDDL.value;
                especialidadDDL.innerHTML = "";  
                // opción default
                var opt_Especialidad = document.createElement("option");
                opt_Especialidad.value= "*";
                opt_Especialidad.innerHTML = "Todas";
                especialidadDDL.appendChild(opt_Especialidad);

                $.each(JSON.parse(especialidades), function(i, item) {
                    item.IDs_provincia.forEach(element => {
                        if(element == provincia){
                            var opt = document.createElement("option");
                            opt.value= item.ID_especialidad;
                            opt.innerHTML = item.nombre;
                    
                            especialidadDDL.appendChild(opt);
                        }
                    });
                });
                if(current_especialidad != "*"){
                    especialidadDDL.value = current_especialidad;
                }
            }
        }else{
            // DDL especialidad
            let current_especialidad = especialidadDDL.value;
            especialidadDDL.innerHTML = "";
            // opción default
            var opt_Especialidad = document.createElement("option");
            opt_Especialidad.value= "*";
            opt_Especialidad.innerHTML = "Todas";

            // opción default
            var opt_Especialidad = document.createElement("option");
            opt_Especialidad.value= "*";
            opt_Especialidad.innerHTML = "Todas";
    
            especialidadDDL.appendChild(opt_Especialidad);

            $.each(JSON.parse(especialidades), function(i, esp) {
                $.each(esp.IDs_centroMedico, function(i, esp_centromed) {
                    if(esp_centromed == centro){             
                        var opt = document.createElement("option");
                        opt.value= esp.ID_especialidad;
                        opt.innerHTML = esp.nombre;
                
                        especialidadDDL.appendChild(opt);
                    }
                });
            });

            if(current_especialidad != "*"){
                especialidadDDL.value = current_especialidad;
            }

        }
        // DDL provincia
            // cambiar la seleccion de provincias
            $.each(JSON.parse(centros_medicos), function(i, item) {           
                if(item.ID_centroMedico == centro){               
                    $.each(JSON.parse(provincias), function(i, prov) {
                        if(item.provincia === prov.valueDDL){                                  
                            provinciaDDL.value = item.provincia;
                        }
                    });
                }
            });
    }
    // ESPECIALIDAD
    else if(especialidad != ""){
        if(especialidad == "*"){

        }else{
            let listaIDs_centrosMedicos = [];
            $.each(JSON.parse(especialidades), function(i, esp) {
                if(esp.ID_especialidad == especialidad){
                    esp.IDs_centroMedico.forEach(el => {
                        listaIDs_centrosMedicos.push(el);
                    });
                }
            });

            // DDL centro
            let current_centro = centroDDL.value;
            centroDDL.innerHTML = ""

            // opción default
            var opt_Centro = document.createElement("option");
            opt_Centro.value= "*";
            opt_Centro.innerHTML = "Todos";

            centroDDL.appendChild(opt_Centro);
            listaIDs_centrosMedicos.forEach(el => {
                $.each(JSON.parse(centros_medicos), function(i, centro) {    
                    if(el == centro.ID_centroMedico){                       
                        var opt = document.createElement("option");
                        opt.value= centro.ID_centroMedico;
                        opt.innerHTML = centro.nombre;
                
                        centroDDL.appendChild(opt);
                    }
                });
            });

            if(current_centro != "*"){
                centroDDL.value = current_centro;
            }
        }
    }
}

// Evento click del botón de buscar
document.getElementById("searchButton").addEventListener("click", function( event ) { 
    var nombreApellidosValue = nombreApellidosInput.value;
    var provinciaValue = provinciaDDL.value;
    var centroValue = centroDDL.value;
    var especialidadValue = especialidadDDL.value;
    SearchItems(nombreApellidosValue, provinciaValue, centroValue, especialidadValue);
}, false);

// Buscar items filtrados
function SearchItems(nombreApellidos, provincia, centro, especialidad){   
    listaMedicos.innerHTML = "";
    count= 0;
    
    // Mostrar todos los resultados(provincia == "todas" y tipo == "todas")
    if(provincia == "*" && centro == "*" && especialidad == "*" && nombreApellidos == ""){
        Inicializar();
    }else{
        // Otros casos  
        if(nombreApellidos != ""){
            $.each(JSON.parse(medicos), function(i, item) {
                // Generar elemento que se va a repetir
                var newListItem = document.createElement("div");
                var itemNombre = item.nombre;  
                var itemApellidos = item.apellidos.trim();
                var nombreCompleto = removeAccents((itemNombre+itemApellidos).split(" ").join("").toLowerCase());
                var nombreInput = removeAccents(nombreApellidos.split(" ").join("").toLowerCase());
                if(nombreInput === nombreCompleto || nombreCompleto.includes(nombreInput)){
                    console.log("es él: " + nombreCompleto);
                    newListItem.innerHTML = GetPlantilla_Medico(item);
                    listaMedicos.appendChild(newListItem);
                    count ++;
                }
            });
        }else{   
            $.each(JSON.parse(medicos), function(i, item) {    
                // Generar elemento que se va a repetir
                var newListItem = document.createElement("div");
                let has_Provincia = false;
                $.each(item.IDs_provincia, function(i, el){
                    if(el == provincia){
                        has_Provincia = true;
                    }
                });
    
                let has_Centro = false;
                $.each(item.IDs_centroMedico, function(i, el){
                    if(el == centro){
                        has_Centro = true;
                    }
                });
    
                let has_Especialidad = false;
                $.each(item.IDs_especialidades, function(i, el){
                    if(el == especialidad){
                        has_Especialidad = true;
                    }
                });
                
                // Valor en todos los DDLs
                if(has_Provincia && has_Centro && has_Especialidad){
                    newListItem.innerHTML = GetPlantilla_Medico(item);
                    listaMedicos.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && has_Centro && especialidad == "*"){
                    console.log("item: " + item.nombre);
                    newListItem.innerHTML = GetPlantilla_Medico(item);
                    listaMedicos.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && centro == "*" && especialidad == "*"){
                    newListItem.innerHTML = GetPlantilla_Medico(item);
                    listaMedicos.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && centro == "*" && has_Especialidad){
                    $.each(item.IDs_provincia, function(i, el){
                        if(el == provincia){
                            $.each(item.IDs_especialidades, function(i, el){
                                if(el == especialidad){
                                    newListItem.innerHTML = GetPlantilla_Medico(item);
                                    listaMedicos.appendChild(newListItem);
                                    count ++;
                                }
                            });
                        }
                    });
                }else if(provincia == "*" && centro == "*" && has_Especialidad){
                    $.each(item.IDs_especialidades, function(i, el){
                        if(el == especialidad){
                            newListItem.innerHTML = GetPlantilla_Medico(item);
                            listaMedicos.appendChild(newListItem);
                            count ++;
                        }
                    });
                }
            });        
        }  
    }
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`;
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

// rellenar la lista con todos los medicos
function Set_ListaInicial(){
    listaMedicos.innerHTML = "";
    count= 0;
    $.each(JSON.parse(medicos), function(i, item) {
        var newListItem = document.createElement("div");
        newListItem.innerHTML = GetPlantilla_Medico(item);
        listaMedicos.appendChild(newListItem);
        count ++;
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}
// Devolver la plantilla del item
function GetPlantilla_Medico(medico){
    let especialidad = "";
    $.each(JSON.parse(especialidades), function(i, esp) {
        if(esp.ID_especialidad == medico.IDs_especialidades[0]){
            especialidad = esp.nombre;
        }
    });
    var plantilla =`<div class="g-px-15 g-pt-20">
                        <figure class="text-center">
                            <div class="mx-auto g-width-130 g-height-130 g-mb-15" style="width: 100% !important;display: flex;justify-content: center;">
                                <img class="g-width-120 g-height-120 rounded-circle" src="${medico.imagen}" alt="Image Description">
                            </div>
                            <h4 class="h6 g-color-black g-font-weight-700 g-mb-5"><a href="" style="color:#000000;">${medico.nombre}</a></h4>
                            <h4 class="h6 g-color-black g-font-weight-700 g-mb-5"><a href="" style="color:#000000;">${medico.apellidos}</a></h4>
                            <p class="g-font-size-12"><a href="">${especialidad}</a></p>
                            <a class="btn btn-block u-btn-primary g-color-white--hover g-bg-secondary-dark-light-v1--hover g-font-weight-600 g-font-size-12 text-uppercase rounded-0 g-px-25 g-py-8" href="" style="width: 70% !important;margin:0 auto;max-width: 150px;">Editar
                            </a> 
                        </figure>
                    </div>`;
    return plantilla;
}

// ABECEDARIO
// Evento click del botón de abecedario
var abecedario = [];
abecedario = document.getElementsByClassName("letra");
for (let item of abecedario) {
    item.addEventListener("click", function( event ) {
        event.preventDefault();
    }, false);
}
// CREAR
function FillDDLs_Creacion(){
    // DDL provincia Creacion
    $.each(JSON.parse(provincias), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.valueDDL;
        opt.innerHTML = item.nombre;

        provinciasDDL_creacion.appendChild(opt);
    });

    // DDL centro Creacion
    $.each(JSON.parse(centros_medicos), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.ID_centroMedico;
        opt.innerHTML = item.nombre;

        centroDDL_creacion.appendChild(opt);
    });

    // DDL especialidades Creacion
    $.each(JSON.parse(especialidades), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.ID_especialidad;
        opt.innerHTML = item.nombre;

        especialidadDDL_creacion.appendChild(opt);
    });
}
// Evento click del botón de crear
document.getElementById("createButton").addEventListener("click", function( event ) { 
    sectionBuscador.style ="display: none;"
    sectionCrear.style ="display: block;"
    // FillDDLs_Creacion();
}, false);

// Evento click del botón cerrar crear
document.getElementById("closeButton_Crear").addEventListener("click", function( event ) { 
    sectionBuscador.style ="display: block;"
    sectionCrear.style ="display: none;"
}, false);

// Evento click del botón de Resetear
document.getElementById("resetButton").addEventListener("click", function( event ) { 
    Inicializar();
}, false);