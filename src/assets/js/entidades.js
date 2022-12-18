// :::::::::::::::::::::::::::::::::GENERALES
// Provincia
var provincias = [
    {
        "nombre": String,
        "valueDDL": "String"
    }
]

var centro_medico = [
    {
        // Datos principales
        "ID_centroMedico": Number,
        "tipo": ["hospital", "centro","policlinico"],
        "provincia": String,
        "nombre": String,
        "nombreCompleto": String,
        "descripcion_lead": String,
        "descripcion_secundaria": String,
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "imagenesCarrusel": ["URL_imagenes"],
        // Teléfonos
        "consultas": [Number],
        "radiologia": [Number],
        "odontologia": [Number],
        // Contacto y dirección
        "direccion":String,
        "coordenadas": String,
        "metro": String,
        "autobus": String,
        "parking": String,
        "urgencias": [String],
        "atención": [String],
        "visitas": String,
        "cafeteria": String,
        "link_guiaAcogida": "URL_link",
        // Datos extra
        "Total_altas": Number,
        "Total_urgencias": Number,
        "Total_cirugias": Number,
        "Total_ambulantes": Number,
        "Total_estudiosLab": Number,
        "Total_estudiosRadio": Number,
        "Total_endoscopias": Number,
        "Total_consultasExternas": Number,
        // Datos relacionados
        "link_especialidades": "URL_link",
        "link_cuadroMedico": "URL_link",
        "IDs_sociedadConcertada": ["ID_sociedadConcertada"],
        "destacadosCentro": ["ID_destacados"],
        "noticiasCentro": ["ID_noticia"]
    }
]

var hospital =[
    {
        "ID_centroMedico": Number,
        "tipo": String,
        "provincia": String,
        "nombre": String,
        "nombreCompleto": String,
        "direccion":String,
        "coordenadas": String,
        "descripcion": String,
        "descripcion_corta": String
    }
]

var centro =[
    {
        "ID_centroMedico": Number,
        "tipo": String,
        "provincia": String,
        "nombre": String,
        "nombreCompleto": String,
        "direccion":String,
        "coordenadas": String,
        "descripcion": String,
        "descripcion_corta": String
    }
]

var policlinico =[
    {
        "ID_centroMedico": Number,
        "tipo": String,
        "provincia": String,
        "nombre": String,
        "nombreCompleto": String,
        "direccion":String,
        "coordenadas": String,
        "descripcion": String,
        "descripcion_corta": String
    }
]

var especialidad = [
    {
        "ID_especialidad": Number,
        "IDs_provincia": ["ID_provincia"],
        "IDs_centroMedico": ["ID_centroMedico"],
        "IDs_medicos": ["ID_medico"],
        "imagen": "URL_imagen",
        "imagen_detalle": "URL_imagen",
        "nombre": String,
        "descripcion_corta": String,
        "descripcion_larga": String,
        "infoComplementaria": [
            {"tituloInfoComplementaria":String, "listado":[String], "cuerpo": String}
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    }
]

var UPS = [
    {
        "ID_UPS": Number,
        "IDs_UPSAsociadas":["ID_UPS"],
        "IDs_especialidad": ["ID_especialidad"],
        "IDs_centroMedico": ["ID_centroMedico"],
        "IDs_provincia": ["ID_provincia"],
        "nombre": String,
        "tipo": String,
        "descripcion_larga": String,
        "infoComplementaria": [
            {"tituloInfoComplementaria":String, "listado":[String], "cuerpo": String}
        ],
        "IDs_especialidadesAsociadas": ["ID_especialidad"]
    }
]

var upsSaludizate = [
    {
        "ID_UPSSaludizate": Number,
        "ID_UPSAsociada":["ID_UPS"],
        "nombre": String,
        "tipo": String,
        "direccion": String,
        "coordenadas": String,
        "telefono": String,
        "horario": String
    }
]

var medico = [
    {
        "ID_medico": Number,
        "imagen": "URL_imagen",
        "nombre": String,
        "apellidos": String,
        "descripcion": String,
        "IDs_provincia": ["ID_provincia"],
        "IDs_centroMedico": ["ID_centroMedico"],
        "IDs_especialidades": ["ID_especialidad"],
        "citacion_online": Boolean,
        "citacion_tfno": Boolean,
        "citacion_video": Boolean,
        "links_RRSS":[String],
        "formacion": [String],
        "experiencia": [String],
        "docencia": [String],
        "interesProfesional": [String]
    }
]

var equipoMedico = [
    {
        "ID_equipoMedico": Number,
        "IDs_centroMedico": ["ID_centroMedico"],
        "IDs_especialidades": ["ID_especialidad"],
        "IDs_UPS":["ID_UPS"],
        "IDs_provincia": ["ID_provincia"],
        "IDs_medicoPrincipal": ["ID_medico"],
        "IDS_medicosEquipo": ["ID_medico"],
        "datosCentro_imagen": "URL_imagen",
        "datosCentro_direccion": String,
        "tieneCita": Boolean,
        "datosCentro_tfno": String,
        "datosCentro_tfno2": String,
        "datosCentro_correo": String,
        "datosCentro_infEspecifica": [String],
        "descripcion_MedicoPrincipal": String
    }
]

var destacados = [
    {
        "ID_destacados": Number,
        "ID_centroMedico": Number,
        "imagen": "URL_imagen",
        "tipo": String,
        "orden": Number,
        "titulo": String,
        "descripcion": String,
        "link": "URL_link",
        "fecha": Date
    }
]

 var noticia = [
     {
         "ID_noticia": Number,
         "ID_centroMedico": Number,
         "autor": String,
         "fecha": Date,
         "lead": String,
         "subtitulo": String,
         "introduccion": String,
         "cuerpo": HTML,
         "imagenes": [String]
     }
 ]

 var sociedadConcertada = [
     {
        "imagen": "URL_imagen",
         "ID_sociedadConcertada": Number,       
         "IDs_centros": ["ID_centro"],
         "IDs_especialidad": ["ID_especialidad"]
     }
 ]

// :::::::::::::::::::::::::::::::::GENERALES Entidades Web
var avisos = [
    {
        "tipo": String,
        "titulo": String,
        "descripcion": String
    }
]

// :::::::::::::::::::::::::::::::::00_Index
var bannerInicial = [
    {
        "imagen": "URL_imagen",
        "imagen_thumbnail": "URL_imagenPequeña",
        "titulo": String,
        "titulo_thumbnail": String,
        "subtitulo": String,
        "descripcion": String
    }
]

// :::::::::::::::::::::::::::::::::01-HM-Red-Hospitalaria
var recuentoMedios = [
    {
        // Serán el sumatorio de todos los "ID_centroMedico" por cada centroMedico
        "numHospitales": Number,
        "centros": Number,
        "numCentros": Number,
        "numPoliclinicos": Number,
        "numMedicos": Number
    }
]

// :::::::::::::::::::::::::::::::::02-HM-Provincia-Madrid
// Se seleccionarán aquellos hospitales, centros y policlínicos que coincidan con la comunidad en "ID_comunidad",
// y desde ahí se recogerán todos los datos necesarios (por ej. las coordenadas para los pins del mapa)

// :::::::::::::::::::::::::::::::::03-HM-Hospital-HM-Madrid
var detalleHospital = [
    {
        "ID_centroMedico": Number,
        "titulo": String,
        "imagenesCarrusel": ["URL_imagenes"],
        "descripcion_lead": String,
        "descripcion_secundaria": String,
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "consultas": [Number],
        "radiologia": [Number],
        "odontologia": [Number],
        "direccion": String,
        "coordenadas": String,
        "metro": String,
        "autobus": String,
        "parking": String,
        "urgencias": [String],
        "atención": [String],
        "visitas": String,
        "cafeteria": String,
        "link_guiaAcogida": "URL_link",
        "Total_altas": Number,
        "Total_urgencias": Number,
        "Total_cirugias": Number,
        "Total_ambulantes": Number,
        "Total_estudiosLab": Number,
        "Total_estudiosRadio": Number,
        "Total_endoscopias": Number,
        "Total_consultasExternas": Number,
        "link_especialidades": "URL_link",
        "link_cuadroMedico": "URL_link",
        "IDs_sociedadConcertada": ["ID_sociedadConcertada"],
        "destacadosCentro": ["ID_destacados"],
        "noticiasCentro": ["ID_noticia"]
    }
]

// :::::::::::::::::::::::::::::::::05-HM-Especialidades-Buscador
// se hará match entre los parámetros de búsqueda y las entidades "especialidad"

// :::::::::::::::::::::::::::::::::06-HM-Ficha-Especialidad
// Se obtendrán los datos de la entidad "especialidad"
// Profesionales: se harán match con los "ID_medico" que tenga la especialidad
// Noticias Destacadas: para los destacados se usara el "ID_destacados"

// :::::::::::::::::::::::::::::::::07-HM-Cuadro-Médico-Buscador
// Cuadro Médico: se harán match con los "ID_medico" que tenga la especialidad

// :::::::::::::::::::::::::::::::::08-HM-Ficha-Doctor
// Extraerá los datos de la entidad "medico"

// :::::::::::::::::::::::::::::::::09-HM-Unidades-Programas-Servicios-Buscador
// se hará match entre los parámetros de búsqueda y las entidades "UPS"

// :::::::::::::::::::::::::::::::::10-HM-Ficha-Programa
// se procederá a desplegar la información almacenada en la entidad "UPS" en cuestión

// :::::::::::::::::::::::::::::::::11-00-HM-Centro-Integral-Fertility-Center.html#centros
// en el carrusel donde se muestran los centros, se cogerán los datos de la entidad "centrosFertility"
var bannerFertility = [
    {
        "imagen": "URL_imagen",
        "titulo": String,
        "subtitulo": String,
        "link": "URL_link",
        "titulo_thumbnail": String,
        "subtitulo_thumbnail": String,
    }
]

var serviciosFertility = [
    {
        "ID_servicioFertility": Number,
        "imagen": "URL_imagen",
        "categoria": String,
        "titulo": String,
        "descripcion_corta": String
    }
]

var centrosFertility = [
    {
        "ID_centroFertility": Number,
        "nombre": String,
        "descripcion": String,
        "tipo": String,
        "direccion": String,
        "coordenadas": String,
        "telefono": String,
        "horario": String
    }
]

var comentariosFertility = [
    {
        "comentario": String
    }
]

// :::::::::::::::::::::::::::::::::11-01-HM-Centro-Integral-Fertility-Center-Trat-Rep-Asistida
var tratamientosFertility = [
    {
        "ID_tratamiento": Number,
        "IDs_servicio": ["ID_servicioFertility"],
        "imagen": "URL_imagen",
        "titulo": String,
        "descripcion": String
    }
]

// :::::::::::::::::::::::::::::::::11-02-HM-Centro-Integral-Fertility-Center-Trat-Rep-Asistida-Fec-in-vitro
var tratamientosHijoFertility = [
    {
        "ID_tratamientoHijo": Number, 
        "IDs_tratamiento": ["ID_tratamiento"],
        "titulo": String,
        "descripcion": String
    }
]

// :::::::::::::::::::::::::::::::::17-HM-Saludizate
var bannerSaludizate = [
    {
        "imagen": "URL_imagen",
        "titulo": String,
        "subtitulo": String,
        "link": "URL_link",
        "titulo_thumbnail": String,
        "subtitulo_thumbnail": String,
    }
]

var serviciosSaludizate = [
    {
        "ID_servicioSaludizate": Number,
        "imagen": "URL_imagen",
        "categoria": String,
        "titulo": String,
        "descripcion_corta": String
    }
]

var ofertasSaludizate = [
    {
        "ID_ofertaSaludizate": Number,
        "titulo": String,
        "descripcion": String
    }
]

// :::::::::::::::::::::::::::::::::17-HM-Saludizate
var tratamientosSaludizate = [
    {
        "ID_tratamiento": Number,
        "IDs_servicio": ["ID_servicioSaludizate"],
        "imagen": "URL_imagen",
        "titulo": String,
        "descripcion": String
    }
]