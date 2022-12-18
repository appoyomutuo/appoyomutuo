'use strict'
// Inicialización
var ddlHospitalMadrid = document.getElementById("ddlHospitalMadrid");
var ddlHospitalBarcelona = document.getElementById("ddlHospitalBarcelona");
setTimeout(function(){
    Inicializar(); 
}, 1000);

function Inicializar(){
    // Madrid
    var ddlMadridValue = ddlHospitalMadrid.value;
    for (const element of document.getElementsByClassName("tabMadrid")){
        element.style.visibility = "hidden";
        element.style.display = "none";
    }
    var selectedElementMadrid = document.getElementById(ddlMadridValue);
    selectedElementMadrid.style.visibility = "visible";
    selectedElementMadrid.style.display = "block";
    
    // Barcelona
    var ddlBarcelonaValue = ddlHospitalBarcelona.value;
    for (const element of document.getElementsByClassName("tabBarcelona")){
        element.style.visibility = "hidden";
        element.style.display = "none";
    }
    var selectedElementBarcelona = document.getElementById(ddlBarcelonaValue);
    selectedElementBarcelona.style.visibility = "visible";
    selectedElementBarcelona.style.display = "block";
}

// Evento click del botón de buscar
document.getElementById("searchButtonMadrid").addEventListener("click", function( event ) { 
    SearchItemsMadrid();

}, false);
document.getElementById("searchButtonBarcelona").addEventListener("click", function( event ) { 
    SearchItemsBarcelona();
}, false);


// Buscar items filtrados
function SearchItemsMadrid(){
    var ddlMadridValue = ddlHospitalMadrid.value;
    for (const element of document.getElementsByClassName("tabMadrid")){
        element.style.visibility = "hidden";
        element.style.display = "none";
    }
    var selectedElementMadrid = document.getElementById(ddlMadridValue);
    selectedElementMadrid.style.visibility = "visible";
    selectedElementMadrid.style.display = "block";
}
function SearchItemsBarcelona(){
    var ddlBarcelonaValue = ddlHospitalBarcelona.value;
    for (const element of document.getElementsByClassName("tabBarcelona")){
        element.style.visibility = "hidden";
        element.style.display = "none";
    }
    var selectedElementBarcelona = document.getElementById(ddlBarcelonaValue);
    selectedElementBarcelona.style.visibility = "visible";
    selectedElementBarcelona.style.display = "block";
}