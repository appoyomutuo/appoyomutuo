'use strict'
// ::::::::::::::::::::::::::::::::::::::::::::::::ENTIDADES
// Los datos de las entidades estan en "dataManager.js" y guardadas en localStorage
var provincias = localStorage.getItem('provincias');
var centros_medicos = localStorage.getItem('centros_medicos');
var especialidades = localStorage.getItem('especialidades');
var ups = localStorage.getItem('ups');

// ::::::::::::::::::::::::::::::::::::::::::::::::ELEMENTOS HTML
var listaUPS = "";
var nombreEspecialidadInput = "";
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
    listaUPS = document.getElementById("listaUPS");
    nombreEspecialidadInput = document.getElementById("nombreEspecialidadInput");
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

// ::::::::::::::::::::::::::::::::::::::::::::::::INICIO
function Inicializar (){
    // Rellenar DDL´s
    FillDDLs();
    FillDDLs_Creacion();

    // Rellenar la lista de ups con todas
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
        nombreEspecialidadInput.value  = "";
    });

    $( "#centroDDL" ).change(function() {
        let val = centroDDL.value;
        ChangeDDLs("", val, "");
        nombreEspecialidadInput.value  = "";
    });

    $( "#especialidadDDL" ).change(function() {
        let val = especialidadDDL.value;
        ChangeDDLs("", "", val);
        nombreEspecialidadInput.value  = "";
    });
}

function ChangeDDLs(provincia, centro, especialidad){
    // ::::::::::::::::::::::::::::::::::::::::::::::::PROVINCIA
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
    // ::::::::::::::::::::::::::::::::::::::::::::::::CENTRO
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
    // ::::::::::::::::::::::::::::::::::::::::::::::::ESPECIALIDAD
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
    var nombreEspecialidadValue = nombreEspecialidadInput.value;
    var provinciaValue = provinciaDDL.value;
    var centroValue = centroDDL.value;
    var especialidadValue = especialidadDDL.value;
    SearchItems(nombreEspecialidadValue, provinciaValue, centroValue, especialidadValue);
}, false);

// Buscar items filtrados
function SearchItems(nombreApellidos, provincia, centro, especialidad){ 
    listaUPS.innerHTML = "";
    count= 0;
    
    // Mostrar todos los resultados(provincia == "todas" y tipo == "todas")
    if(provincia == "*" && centro == "*" && especialidad == "*" && nombreApellidos == ""){
        Inicializar();
    }else{
        // Otros casos  
        if(nombreApellidos != ""){
            $.each(JSON.parse(ups), function(i, item) {
                // Generar elemento que se va a repetir
                var newListItem = document.createElement("div");
                var itemNombre = item.nombre;  
                var itemApellidos = item.apellidos.trim();
                var nombreCompleto = removeAccents((itemNombre+itemApellidos).split(" ").join("").toLowerCase());
                var nombreInput = removeAccents(nombreApellidos.split(" ").join("").toLowerCase());
                if(nombreInput === nombreCompleto || nombreCompleto.includes(nombreInput)){
                    console.log("es él: " + nombreCompleto);
                    newListItem.innerHTML = GetPlantilla_UPS(item);
                    listaUPS.appendChild(newListItem);
                    count ++;
                }
            });
        }else{   
            $.each(JSON.parse(ups), function(i, item) {    
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
                    newListItem.innerHTML = GetPlantilla_UPS(item);
                    listaUPS.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && has_Centro && especialidad == "*"){
                    console.log("item: " + item.nombre);
                    newListItem.innerHTML = GetPlantilla_UPS(item);
                    listaUPS.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && centro == "*" && especialidad == "*"){
                    newListItem.innerHTML = GetPlantilla_UPS(item);
                    listaUPS.appendChild(newListItem);
                    count ++;
                }else if(has_Provincia && centro == "*" && has_Especialidad){
                    $.each(item.IDs_provincia, function(i, el){
                        if(el == provincia){
                            $.each(item.IDs_especialidades, function(i, el){
                                if(el == especialidad){
                                    newListItem.innerHTML = GetPlantilla_UPS(item);
                                    listaUPS.appendChild(newListItem);
                                    count ++;
                                }
                            });
                        }
                    });
                }else if(provincia == "*" && centro == "*" && has_Especialidad){
                    $.each(item.IDs_especialidades, function(i, el){
                        if(el == especialidad){
                            newListItem.innerHTML = GetPlantilla_UPS(item);
                            listaUPS.appendChild(newListItem);
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

// rellenar la lista con todos los ups
function Set_ListaInicial(){
    listaUPS.innerHTML = "";
    count= 0;
    $.each(JSON.parse(ups), function(i, item) {
        var newListItem = document.createElement("div");
        newListItem.innerHTML = GetPlantilla_UPS(item);
        listaUPS.appendChild(newListItem);
        count ++;
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}
// Devolver la plantilla del item
function GetPlantilla_UPS(medico){
    var plantilla =`<div class="col-md-6 col-lg-4 g-mb-30">
                        <div class="u-block-hover g-parent">
                            <img class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="./images/Section_400x270_PUS_Dianas-terapeuticas.jpg" alt="Laboratorio de Dianas Terapéuticas HM">
                            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15">
                                <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
                                <li class="list-inline-item">
                                    <a class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle" href="#!">
                                    <i class="icon-communication-095 u-line-icon-pro"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle" href="./assets/img-temp/400x270/img14.jpg">
                                    <i class="icon-communication-017 u-line-icon-pro"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div class="g-bg-white text-center g-pa-15">
                            <h3 class="h5 g-color-black g-font-weight-700 mb-1 g-height-60"><a href="">Laboratorio de Dianas Terapéuticas</a></h3>
                            <p class="g-font-size-13 mb-0">Programa</p>
                            <a href=""><span class="d-block g-color-primary g-font-size-14">Saber +</span></a>
                        </div>
                    </div>`;
    return plantilla;
}

// ::::::::::::::::::::::::::::::::::::::::::::::::ABECEDARIO
// Evento click del botón de abecedario
var abecedario = [];
abecedario = document.getElementsByClassName("letra");
for (let item of abecedario) {
    item.addEventListener("click", function( event ) {
        event.preventDefault();
    }, false);
}
// ::::::::::::::::::::::::::::::::::::::::::::::::CREAR
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

// :::::::::::::::::::::::
// ::::GUARDAR DATOS
// Evento click de los botones de Crear
document.getElementById("saveButton_ups").addEventListener("click", function( event ) { 
    console.log("collection: " + JSON.stringify(ups));
    var newObject = {
        "ID_UPS": 2,
        "IDs_UPSAsociadas":[2,3],
        "IDs_especialidad": [2],
        "IDs_especialidadesAsociadas": [3,4],
        "IDs_centroMedico": [2],
        "IDs_provincia": ["madrid"],
        "nombre": "Cirugía Endocrinológica",
        "tipo": "unidad",
        "descripcion_larga": "Descripción Cirugía Endocrinológica",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"", "listado":[""], "cuerpo": ""}
        ]
    }

    var collection = JSON.parse(ups);
    collection.push(newObject);
    console.log("collection2: " + JSON.stringify(collection));
}, false);

function readSingleFile(evt) {
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function(e) {
            var newObject = {
                "ID_UPS": 3,
                "IDs_UPSAsociadas":[2,3],
                "IDs_especialidad": [2],
                "IDs_especialidadesAsociadas": [3,4],
                "IDs_centroMedico": [2],
                "IDs_provincia": ["madrid"],
                "nombre": "Otra UPS",
                "tipo": "unidad",
                "descripcion_larga": "Descripción de otra UPS",
                "infoComplementaria": [
                    {"tituloInfoComplementaria":"", "listado":[""], "cuerpo": ""}
                ]
            }


            let lines = e.target.result;
            var newArr = JSON.parse(lines);
            //console.log("Antes new arr: " + JSON.stringify(newArr));

            newArr.push(newObject);
            //console.log("Despues new arr: " + JSON.stringify(newArr));

            content = "var ups = " + JSON.stringify(newArr) + ";localStorage.setItem('ups', JSON.stringify(ups));";
            var bl = new Blob([content], {type: "application/json"});

            var a = document.createElement("a");
            a.href = URL.createObjectURL(bl);
            a.download = f.name;
            a.hidden = true;
            document.body.appendChild(a);
            a.innerHTML = "";
            a.click();
        }
        r.readAsText(f);
    } else {
        alert("Failed to load file");
    }
}
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);