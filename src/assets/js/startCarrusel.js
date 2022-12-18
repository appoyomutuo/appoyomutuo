console.log("===========INIT2");

// FUNCIONAMIENDO DE TABS
var descripcionTab = document.getElementsByClassName("descripcionTab");
var necesidadesTab = document.getElementsByClassName("necesidadesTab");
var beneficiosTab = document.getElementsByClassName("beneficiosTab");
var contactoTab = document.getElementsByClassName("contactoTab"); 

// var panelInfo_descripcion = document.getElementsByClassName("panelInfo_descripcion");
// var panelInfo_necesidades = document.getElementsByClassName("panelInfo_necesidades");
// var panelInfo_beneficios = document.getElementsByClassName("panelInfo_beneficios");
// var panelInfo_contacto = document.getElementsByClassName("panelInfo_contacto");

// if(!panelInfo_descripcion == null){
//   console.log("descripcion")
//   panelInfo_descripcion.style.display = 'flex';
// }
// if(!panelInfo_necesidades == null){
//   console.log("descripcion")
//   panelInfo_necesidades.style.display = 'none';
// }
// console.log("descripcion", panelInfo_descripcion)
// panelInfo_necesidades.style.display = 'none';
// panelInfo_beneficios.style.display = 'none';
// panelInfo_contacto.style.display = 'none';

var tab_descripcion = function() {
  tabController("descripcion")
};

var tab_necesidades = function() {
  tabController("necesidades")
}

var tab_beneficios = function() {
  tabController("beneficios")
};

var tab_contacto = function() {
  tabController("contacto")
};

var tabController = function (tab){
  // APAGAR TODOS LOS PANELES
  var paneles = document.getElementsByClassName("panelInfo");
  for (var i = 0; i < paneles.length; i++) {
    paneles[i].style.display = "none";
  }

  var panelId = "panelInfo_" + tab
  var panelObject = document.getElementsByClassName(panelId);
  for (var i = 0; i < panelObject.length; i++) {
    panelObject[i].style.display = "flex ";
  }
}


for (var i = 0; i < descripcionTab.length; i++) {
  descripcionTab[i].addEventListener('click', tab_descripcion, false);
}

for (var i = 0; i < necesidadesTab.length; i++) {
  necesidadesTab[i].addEventListener('click', tab_necesidades, false);
}

for (var i = 0; i < beneficiosTab.length; i++) {
  beneficiosTab[i].addEventListener('click', tab_beneficios, false);
}

for (var i = 0; i < contactoTab.length; i++) {
  contactoTab[i].addEventListener('click', tab_contacto, false);
}
// end FUNCIONAMIENDO DE TABS

// COMENZAR EL CARRUSEL
var elementExists = document.getElementsByClassName("js-carousel");
$.HSCore.components.HSCarousel.init('.js-carousel');
// end COMENZAR EL CARRUSEL