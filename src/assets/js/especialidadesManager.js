'use strict'
// ENTIDADES
// Los datos de las entidades estan en "dataManager.js" y guardadas en localStorage
var provincias = localStorage.getItem('provincias');
var especialidades = localStorage.getItem('especialidades');
var centros_medicos = localStorage.getItem('centros_medicos');

// ELEMENTOS HTML
var listaEspecialidades = "";
var provinciaDDL = "";
var centroDDL = "";
var especialidadDDL = "";
var contadorItems = document.getElementById("contadorItems");
var count = 0;

$( document ).ready(function() {
    // Encontrar elementos html
    listaEspecialidades = document.getElementById("listaEspecialidades");
    provinciaDDL = document.getElementById("provinciaDDL");
    centroDDL = document.getElementById("centroDDL");
    especialidadDDL = document.getElementById("centroDDL");

    Inicializar();
 })

// INICIO
function Inicializar (){
    // Rellenar DDL´s
    FillDDLs();

    // Rellenar la lista de especialidades con todas
    Set_ListaInicial();
    
}

// FUNCIONES
// rellenar DDLs
function FillDDLs(){
    // Inicio
    provinciaDDL.innerHTML = ""
    centroDDL.innerHTML = ""

    // DDL provincia
    // opción default
    var opt = document.createElement("option");
        opt.value= "*";
        opt.innerHTML = "Todas";

        provinciaDDL.appendChild(opt);

    // otras opciones
    $.each(JSON.parse(provincias), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.valueDDL;
        opt.innerHTML = item.nombre;

        provinciaDDL.appendChild(opt);
    });

    // DDL centro
    // opción default
    var opt = document.createElement("option");
        opt.value= "*";
        opt.innerHTML = "Todos";

        centroDDL.appendChild(opt);
    // otras opciones
    $.each(JSON.parse(centros_medicos), function(i, item) {
        var opt = document.createElement("option");
        opt.value= item.ID_centroMedico;
        opt.innerHTML = item.nombre;

        centroDDL.appendChild(opt);
    });
}

// rellenar la lista con todas las especialidades
function Set_ListaInicial(){
    listaEspecialidades.innerHTML = "";
    count= 0;
    $.each(JSON.parse(especialidades), function(i, item) {
        var newListItem = document.createElement("li");
        newListItem.innerHTML = GetPlantilla_EspecialidadDetalle(item);
        listaEspecialidades.appendChild(newListItem);
        count ++;
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}

// Evento click del botón de buscar
document.getElementById("searchButton").addEventListener("click", function( event ) { 
    var provinciaValue = provinciaDDL.value;
    var centroValue = centroDDL.value;
    SearchItems(provinciaValue, centroValue);

}, false);

// Buscar items filtrados
function SearchItems(provincia, centro){
    listaEspecialidades.innerHTML = "";
    count= 0;
    $.each(JSON.parse(especialidades), function(i, item) {
        // DEFAULT
        // Mostrar todos los resultados(provincia == "todas" y tipo == "todas")
        if(provincia == "*" && centro == "*"){
            Inicializar();
            return
        }

        // Generar elemento que se va a repetir
        var newListItem = document.createElement("li");

        // OTROS CASOS
        // Filtrado si el DDL centro viene relleno y provincia en "todas"
        if(provincia == "*" && centro != "*"){
            $.each(item.IDs_centroMedico, function(i, el){
                if(el == centro){
                    newListItem.innerHTML = GetPlantilla_EspecialidadDetalle(item);;
                    listaEspecialidades.appendChild(newListItem); 
                    count ++;
                }
            });
        }

        // Filtrado si el DDL provincia viene relleno y centro en "todas"
        if(provincia != "*" && centro == "*"){
            $.each(item.IDs_provincia, function(i, el){
                if(el == provincia){
                    newListItem.innerHTML = GetPlantilla_EspecialidadDetalle(item);;
                    listaEspecialidades.appendChild(newListItem); 
                    count ++;
                }
            });
        }

        // Filtrado si los dos DDL tienen valor
        if(provincia != "*" && centro != "*"){
            var listaUnificada =  [];
            var listaFinal = [];
            $.each(item.IDs_provincia, function(i, el){
                if(el == provincia){
                    listaUnificada.push(item);
                }
            });
            $.each(item.IDs_centroMedico, function(i, el){
                if(el == centro){
                    listaUnificada.push(item);
                }
            });
            // Descartar aquellos que se repitan
            listaUnificada.forEach((item)=>{
                if(!listaFinal.includes(item)){
                    listaFinal.push(item);
                }
            })
            $.each(listaFinal, function(i, el){
                newListItem.innerHTML = GetPlantilla_EspecialidadDetalle(item);
                listaEspecialidades.appendChild(newListItem);
                count ++;
            });
        }

        // Evitar la recarga de la página
        event.preventDefault();
    });
    contadorItems.innerHTML = `<b>${count}</b> resultados encontrados`
}

// Devolver la plantilla del item
function GetPlantilla_EspecialidadDetalle(item){
    var idEspecialidad = item.ID_especialidad;
    var plantilla =`<div style="width:250px;margin:20px;">
                        <article class="u-shadow-v19 g-bg-white text-center rounded">
                            <img class="d-inline-block img-fluid mb-4" src="${item.imagen}" alt="${item.nombre}">
                            <h4 class="h5 g-color-black g-font-weight-600 g-mb-10"><a href="file://192.168.254.30/documentacion/Departamentos/Marketing/GrupoTRC/Trabajos/HM%20Hospitales/html/html/html/06-HM-Ficha-Especialidad.html?id=${item.ID_especialidad}">${item.nombre}</a></h4>
                            <p style="height: 50px;text-align:center;">${item.descripcion_corta}</p>
                            <a href="file://192.168.254.30/documentacion/Departamentos/Marketing/GrupoTRC/Trabajos/HM%20Hospitales/html/html/html/06-HM-Ficha-Especialidad.html?id=${item.ID_especialidad}"><span class="d-block g-color-primary g-font-size-14">Saber +</span></a>
                        </article>
                    </div>`;
    return plantilla;
}