// :::::::::::::::::::::::
// ::::ENTIDADES

// Provincias
var provincias = [
    {
        "nombre": "Madrid",
        "valueDDL": "madrid"
    },
    {
        "nombre": "Barcelona",
        "valueDDL": "barcelona"
    },
    {
        "nombre": "ACoruña",
        "valueDDL": "acoruña"
    },
    {
        "nombre": "Leon",
        "valueDDL": "leon"
    },
    {
        "nombre": "Pontevedra",
        "valueDDL": "pontevedra"
    },
    {
        "nombre": "Toledo",
        "valueDDL": "toledo"
    },
]

localStorage.setItem('provincias', JSON.stringify(provincias));

// Especialidades
var especialidades = [
    {
        "ID_especialidad": 1,
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [1, 2],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Alergologia.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Alergologia.jpg",
        "nombre": "Alergología",
        "descripcion_corta": "Descripción corta de Alergología",
        "descripcion_larga": "Alergología lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Pruebas Complementarias",
             "listado":["Pruebas cutáneas (prick test, intradermorreacción).", "Test de provocación nasal con alérgenos y fármacos (aspirina).", "Análisis de sangre (determinación de IgE específica...).", "Evaluación de la función pulmonar (espirometría broncodilatadora, prueba de broncoprovocación inespecífica).", "Evaluación de obstrucción nasal (rinometría acústica).", "Test de exposición controlada a fármacos y alimentos."],
             "cuerpo": ""
            },
            {"tituloInfoComplementaria":"Diagnósticos de Alergólogos",
             "listado":["Asma alérgica.", "Asma exacerbada por aspirina.", "Rinoconjuntivitis alérgica.", "Alergia a alimentos", "Alergia a fármacos.", "Urticaria y angiodema.", "Alergia a veneno de abeja y avispa.", "Anafilaxia."],
             "cuerpo": ""
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 2,
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [2],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Analisis-clinicos.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Analisis-clinicos.jpg",
        "nombre": "Análisis Clínicos",
        "descripcion_corta": "Descripción corta de Análisis Clínicos",
        "descripcion_larga": "Análisis Clínicos lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Análisis Completos",
             "listado":["Análisis cutáneos.", "Análisis de provocación nasal con alérgenos y fármacos (aspirina).", "Análisis de sangre (determinación de IgE específica...).", "Análisis pulmonar.", "Análisis de obstrucción nasal.", "Análisis de exposición controlada a fármacos y alimentos."],
             "cuerpo": ""
            },
            {"tituloInfoComplementaria":"Otros servicios",
             "listado":["Análisis1.", "Análisis2.", "Análisis3", "Análisis4", "Análisis5", "Análisis6", "Análisis7"],
             "cuerpo": ""
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 3,
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [2],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Anatomia-patologica.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Anatomia-patologica.jpg",
        "nombre": "Anatomía Patológica",
        "descripcion_corta": "Descripción corta de Anatomía Patológica",
        "descripcion_larga": "Anatomía Patológica lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Anatomía Patológica",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 4,
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [2],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Cardiologia.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Cardiologia.jpg",
        "nombre": "Cardiología",
        "descripcion_corta": "Descripción corta de Cardiología",
        "descripcion_larga": "Cardiología lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cardiología",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 5,
        "IDs_provincia": ["barcelona"],
        "IDs_centroMedico": [3],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Cardiologia-ped.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Cardiologia-ped.jpg",
        "nombre": "Cardiología Pediátrica",
        "descripcion_corta": "Descripción corta de Cardiología Pediátrica",
        "descripcion_larga": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cardiología Pediátrica",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 6,
        "IDs_provincia": ["barcelona"],
        "IDs_centroMedico": [3],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Cir-card-pediatrica.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Cir-card-pediatrica.jpg",
        "nombre": "Cirugía Cardíaca Pediátrica",
        "descripcion_corta": "Descripción corta de Cirugía Cardíaca Pediátrica",
        "descripcion_larga": "Cirugía Cardíaca Pediátrica Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cirugía Cardíaca Pediátrica",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 7,
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Cir-cardiovascular.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Cir-cardiovascular.jpg",
        "nombre": "Cirugía Cardiovascular",
        "descripcion_corta": "Descripción corte de Cirugía Cardiovascular",
        "descripcion_larga": "Cirugía Cardiovascular lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cirugía Cardiovascular",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 8,
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Alergologia.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Alergologia.jpg",
        "nombre": "Cirugía General y del Aparato Digestivo",
        "descripcion_corta": "Descripción corta de Cirugía General y del Aparato Digestivo",
        "descripcion_larga": "DCirugía General y del Aparato Digestivo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cirugía General y del Aparato Digestivo",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 9,
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Cardiologia-ped.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Cardiologia-ped.jpg",
        "nombre": "Cirugía Oral y Maxilofacial",
        "descripcion_corta": "Descripción corta de Cirugía Oral y Maxilofacial",
        "descripcion_larga": "Cirugía Oral y Maxilofacial Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cirugía Oral y Maxilofacial",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    },
    {
        "ID_especialidad": 10,
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_medicos": ["ID_medico"],
        "imagen": "./images/Section_425x250_Especialidades_Analisis-clinicos.jpg",
        "imagen_detalle": "./images/Section_425x250_Especialidades_Analisis-clinicos.jpg",
        "nombre": "Cirugía Plástica y Reparadora",
        "descripcion_corta": "Descripción corta de Cirugía Plástica y Reparadora",
        "descripcion_larga": "Cirugía Plástica y Reparadora Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "infoComplementaria": [
            {"tituloInfoComplementaria":"Titulo01 Info complementaria Cirugía Plástica y Reparadora",
             "listado":["primero", "segundo", "tercero"],
             "cuerpo": "cuerpo de la info 01"
            }
        ],
        "IDs_UPSAsociadas":["ID_UPS"]
    }
]

localStorage.setItem('especialidades', JSON.stringify(especialidades));

// Centros médicos (hospitales, centros integrales o policlínicos)
var centros_medicos = [
    {
        // Datos principales
        "ID_centroMedico": 1,
        "tipo": "hospital",// "centro" "policlinico"
        "provincia": "madrid",
        "nombre": "HM Madrid",
        "nombreCompleto": "Hospital HM Madrid",
        "descripcion_lead": "En HM Madrid apostamos por una sanidad basada en la calidad asistencial, la seguridad, en el trabajo con equipos multidisciplinares, participación activa de médicos y demás trabajadores, renovación tecnológica continua y en la formación de nuestros profesionales.",
        "descripcion_secundaria": "El Hospital Universitario HM Madrid es un hospital general médico-quirúrgico para adultos inaugurado como Hospital de Madrid en 1990 y. en la actualidad, dotado con la tecnología más avanzada y con un equipo profesional de alta cualificación.El hospital dispone de todas las especialidades médicas y quirúrgicas de adultos, además de Urgencias Médicas las 24 horas del día.",
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "imagenesCarrusel": ["URL_imagenes"],
        // Teléfonos
        "consultas": ["902 08 98 00", "901 088 212"],
        "radiologia": ["902 08 97 00", "901 882 230"],
        "odontologia": ["902 08 96 00", "901 080 220"],
        // Contacto y dirección
        "direccion": "Plaza del conde del valle de suchil, 16 - 28015 Madrid",
        "descripcion_contacto": "El Hospital Universitario está situado en pleno centro de la capital, en el barrio de Chamberí en la Plaza del Conde del Valle de Súchil.",
        "coordenadas": String,
        "metro": "Linea 4: San Bernado. Linea 2: San Bernardo y Quevedo",
        "autobus": "Linea 21 y 147. Parada: Metro San Bernardo",
        "parking": "Calle San Bernardo, 95. Calle Rodriguez San Pedro, 8. Calle de Arapiles, 10.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.00h - 22.00h",
        "link_guiaAcogida": "URL_link",
        // Magnitudes asistenciales
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
        "noticiasCentro": ["ID_noticia"],
    },
    {
        // Datos principales
        "ID_centroMedico": 2,
        "tipo": "hospital",// "centro" "policlinico"
        "provincia": "madrid",
        "nombre": "HM MontePrincipe",
        "nombreCompleto": "Hospital HM MontePrincipe",
        "descripcion_lead": "HM Madrid MontePrincipe, una sanidad basada en la calidad asistencial, la seguridad, en el trabajo con equipos multidisciplinares, participación activa de médicos y demás trabajadores, renovación tecnológica continua y en la formación de nuestros profesionales.",
        "descripcion_secundaria": "El HM Madrid MontePrincipe es un hospital general médico-quirúrgico para adultos inaugurado como Hospital de Madrid en 1990 y. en la actualidad, dotado con la tecnología más avanzada y con un equipo profesional de alta cualificación.El hospital dispone de todas las especialidades médicas y quirúrgicas de adultos, además de Urgencias Médicas las 24 horas del día.",
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "imagenesCarrusel": ["URL_imagenes"],
        // Teléfonos
        "consultas": ["902 08 98 00", "901 088 212"],
        "radiologia": ["902 08 97 00", "901 882 230"],
        "odontologia": ["902 08 96 00", "901 080 220"],
        // Contacto y dirección
        "direccion": "Calle Monteprincipe, 16 - 14255 Madrid",
        "descripcion_contacto": "El Hospital Universitario está situado en pleno centro de la capital, en el barrio de Chamberí en la Plaza del Conde del Valle de Súchil.",
        "coordenadas": String,
        "metro": "Linea 2: Sevilla",
        "autobus": "Linea 21 y 147. Parada: Metro San Bernardo",
        "parking": "Calle San Bernardo, 95. Calle Rodriguez San Pedro, 8. Calle de Arapiles, 10.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.00h - 22.00h",
        "link_guiaAcogida": "URL_link",
        // Magnitudes asistenciales
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
        "noticiasCentro": ["ID_noticia"],
    },
    {
        // Datos principales
        "ID_centroMedico": 3,
        "tipo": "hospital",// "centro" "policlinico"
        "provincia": "barcelona",
        "nombre": "HM Nens",
        "nombreCompleto": "Hospital HM Nens",
        "descripcion_lead": "HM Barcelona Nens, una sanidad basada en la calidad asistencial, la seguridad, en el trabajo con equipos multidisciplinares, participación activa de médicos y demás trabajadores, renovación tecnológica continua y en la formación de nuestros profesionales.",
        "descripcion_secundaria": "El HM Barcelona Nens es un hospital general médico-quirúrgico para adultos inaugurado como Hospital de Madrid en 1990 y. en la actualidad, dotado con la tecnología más avanzada y con un equipo profesional de alta cualificación.El hospital dispone de todas las especialidades médicas y quirúrgicas de adultos, además de Urgencias Médicas las 24 horas del día.",
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "imagenesCarrusel": ["URL_imagenes"],
        // Teléfonos
        "consultas": ["902 08 98 00", "901 088 212"],
        "radiologia": ["902 08 97 00", "901 882 230"],
        "odontologia": ["902 08 96 00", "901 080 220"],
        // Contacto y dirección
        "direccion": "Calle Nens, 16 - 14255 Barcelona",
        "descripcion_contacto": "En Barcelona Universitario está situado en pleno centro de la capital, en el barrio de Chamberí en la Plaza del Conde del Valle de Súchil.",
        "coordenadas": String,
        "metro": "Linea 2: Sevilla",
        "autobus": "Linea 21 y 147. Parada: Metro Barcelona",
        "parking": "Calle San Bernardo, 95. Calle Rodriguez San Pedro, 8. Calle de Arapiles, 10.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.00h - 22.00h",
        "link_guiaAcogida": "URL_link",
        // Magnitudes asistenciales
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
        "noticiasCentro": ["ID_noticia"],
    },
    {
        // Datos principales
        "ID_centroMedico": 4,
        "tipo": "hospital",// "centro" "policlinico"
        "provincia": "acoruña",
        "nombre": "HM Modelo",
        "nombreCompleto": "Hospital HM Modelo",
        "descripcion_lead": "Hospital HM Modelo, una sanidad basada en la calidad asistencial, la seguridad, en el trabajo con equipos multidisciplinares, participación activa de médicos y demás trabajadores, renovación tecnológica continua y en la formación de nuestros profesionales.",
        "descripcion_secundaria": "Hospital HM Modelo A crouña es un hospital general médico-quirúrgico para adultos inaugurado como Hospital de Madrid en 1990 y. en la actualidad, dotado con la tecnología más avanzada y con un equipo profesional de alta cualificación.El hospital dispone de todas las especialidades médicas y quirúrgicas de adultos, además de Urgencias Médicas las 24 horas del día.",
        "link_Documento": "URL_link",
        "descripcion_contacto": String,
        "imagenesCarrusel": ["URL_imagenes"],
        // Teléfonos
        "consultas": ["902 08 98 00", "901 088 212"],
        "radiologia": ["902 08 97 00", "901 882 230"],
        "odontologia": ["902 08 96 00", "901 080 220"],
        // Contacto y dirección
        "direccion": "Calle Nens, 16 - 14255 Barcelona",
        "descripcion_contacto": "En Barcelona Universitario está situado en pleno centro de la capital, en el barrio de Chamberí en la Plaza del Conde del Valle de Súchil.",
        "coordenadas": String,
        "metro": "Linea 2: Sevilla",
        "autobus": "Linea 21 y 147. Parada: Metro Barcelona",
        "parking": "Calle San Bernardo, 95. Calle Rodriguez San Pedro, 8. Calle de Arapiles, 10.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.00h - 22.00h",
        "link_guiaAcogida": "URL_link",
        // Magnitudes asistenciales
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
        "noticiasCentro": ["ID_noticia"],
    }
]

localStorage.setItem('centros_medicos', JSON.stringify(centros_medicos));

// Médicos
var medicos = [
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_Adolfo-Velez.jpg",
        "nombre": "Adolfo",
        "apellidos": "Vélez López",
        "descripcion": "Jefe de hemodinamia/cardiología intervencionista y cardiólogo en la unidad de cardiología y cirugía cardiaca pediátrica desde 2010.",
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [1],
        "IDs_especialidades": [1],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["Adolfo Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["Adolfo Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["Adolfo This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["Adolfo Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    },
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_Dr02.jpg",
        "nombre": "María",
        "apellidos": "Fernández Bohórquez",
        "descripcion": "Jefe de hemodinamia/cardiología intervencionista y cardiólogo en la unidad de cardiología y cirugía cardiaca pediátrica desde 2010.",
        "IDs_provincia": ["madrid"],
        "IDs_centroMedico": [2],
        "IDs_especialidades": [2],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["María Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["María Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["María This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["María Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    },
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_DrPrudencio.jpg",
        "nombre": "Prudencio Julio",
        "apellidos": "Díaz-Agero Álvarez",
        "descripcion": "Director del Programa de endoscopia Respiratoria Avanzada para el tratamiento de enfermedades bronquiales y pulmonares desde el año xxxx. Experiencia en endoscopia respiratoria diagnóstica en más de 19.200 exploraciones diagnosticas del árbol traqueobronquial y los pulmones.",
        "IDs_provincia": ["barcelona"],
        "IDs_centroMedico": [3],
        "IDs_especialidades": [5],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["Prudencio Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["Prudencio Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["Prudencio This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["Prudencio Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    },
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_Dr01.jpg",
        "nombre": "Máximo",
        "apellidos": "Gómez Fernández",
        "descripcion": "Doctor de neumología en HM Madrid It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English ",
        "IDs_provincia": ["barcelona"],
        "IDs_centroMedico": [3],
        "IDs_especialidades": [6],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["Máximo Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["Máximo Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["Máximo This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["Máximo Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    },
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_Dr03.jpg",
        "nombre": "Alberto",
        "apellidos": "Iglesias Sigüenza",
        "descripcion": "Jefe de hemodinamia/cardiología intervencionista y cardiólogo en la unidad de cardiología y cirugía cardiaca pediátrica desde 2010.",
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_especialidades": [9],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["Alberto Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["Alberto Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["Alberto This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["Alberto Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    },
    {
        "ID_medico": 1,
        "imagen": "./images/Section_125x125_Cuadro-medico_Angeles-Rico.jpg",
        "nombre": "Ángeles",
        "apellidos": "Rico Gomez",
        "descripcion": "Jefe de hemodinamia/cardiología intervencionista y cardiólogo en la unidad de cardiología y cirugía cardiaca pediátrica desde 2010.",
        "IDs_provincia": ["acoruña"],
        "IDs_centroMedico": [4],
        "IDs_especialidades": [10],
        "citacion_online": true,
        "citacion_tfno": true,
        "citacion_video": true,
        "links_RRSS":["www.facebook.com", "www.twitter.com", "www.instagram.com"],
        "formacion": ["Ángeles Estudios de Medicina en la Universidad de Santiago de Compostela.", "Residencia en pediatría y áreas específicas en el Complexo Hospitalario Universitario de A Coruña.", "Especialización en cardiología Pediátrica en el Complexo Hospitalario Universitario de A Coruña/Hospital Ramón y Cajal de Madrid."],
        "experiencia": ["Ángeles Facultativo especialista en el Servicio de Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo intervencionista). Hospital Ramón y Cajal. Madrid 2004-2015.", "Facultativo especialista en Cardiología Pediátrica y Cardiopatías Congénitas (Hemodinámica y Cateterismo Intervencionista). Hospital La Paz. Madrid. 2015 hasta la actualidad.", "Cardiólogo en la UCC desde 2010."],
        "docencia": ["Ángeles This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial in keeping the project in line to completion."],
        "interesProfesional": ["Ángeles Miembro de la Junta directiva de la Sociedad de Cardiología Pediátrica y Cardiopatías Congénitas (SECPCC).", "Máster UAM en Cardiología Pediátrica. Hospital La Paz. Madrid."]
    }
]

localStorage.setItem('medicos', JSON.stringify(medicos));

// // UPS
// var ups = [
//     {
//         "ID_UPS": 1,
//         "IDs_UPSAsociadas":[2,3],
//         "IDs_especialidad": [1],
//         "IDs_especialidadesAsociadas": ["ID_especialidad"],
//         "IDs_centroMedico": [1],
//         "IDs_provincia": ["madrid"],
//         "nombre": "Laboratorio de dianas terapéuticas",
//         "tipo": "unidad",
//         "descripcion_larga": "Descripción Laboratorio de dianas terapéuticas",
//         "imagen": "URLImagen",
//         "infoComplementaria": [
//             {"tituloInfoComplementaria":"", "listado":[""], "cuerpo": ""}
//         ]
//     }
// ]

var ups = localStorage.getItem('ups');

// :::::::::::::::::::::::
// ::::DATOS PARA PÁGINAS
// Contacto
var datos_Contacto = [ 
    {
        "Id": 1,
        "name": "Hospital HM Madrid",
        "direccion": "Av. de Madrid, 25. 28660 Madrid.",
        "citacion": "91 708 99 66",
        "recepcion": "91 55 55 55",
        "url": "http://www.grupotrc.com",
        "provincia": "madrid",
        "tipo": "hospitales"
    }, 
    {
        "Id": 2,
        "name": "Hospital HM Monteprincipe",
        "direccion": "Av. de Montepríncipe, 25. 28660 Boadilla del Monte.",
        "citacion": "91 708 99 00",
        "recepcion": "91 55 55 55",
        "url": "http://www.grupotrc.com",
        "provincia": "madrid",
        "tipo": "hospitales"
    }, 
    {
        "Id": 3,
        "name": "Hospital HM Torrelodones",
        "direccion": "Calle Sanchinarro, 3. 28660 Sanchinarro.",
        "citacion": "66 708 99 00",
        "recepcion": "91 78 31 90",
        "url": "http://www.grupotrc.com",
        "provincia": "barcelona",
        "tipo": "hospitales"
    },
    {
        "Id": 4,
        "name": "Hospital HM Sanchinarro",
        "direccion": "Calle torrelodones, 66. 28660 Torrelodones.",
        "citacion": "62 466 78 10", "recepcion": "91 201 45 32",
        "url": "http://www.grupotrc.com",
        "provincia": "barcelona",
        "tipo": "hospitales"
    },
    {
        "Id": 5,
        "name": "Hospital HM Nuevo Belén",
        "direccion": "Calle Belén, 3. 28660 Legazpi.",
        "citacion": "91 998 99 00",
        "recepcion": "91 453 78 82",
        "url": "http://www.grupotrc.com",
        "provincia": "madrid",
        "tipo": "hospitales"
    }
];

localStorage.setItem('datos_Contacto', JSON.stringify(datos_Contacto));

// Cuadro Médico
var datos_CuadroMedico = [ 
    {
        "Id": 1,
        "name": "María Fernandez Bohórquez",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Maria-Fenandez-Bohorquez.jpg",
        "hospitales": ["HM Madrid"]
    }, 
    {
        "Id": 2,
        "name": "María Muñoz Pereira",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Maria-Munoz.jpg",
        "hospitales": ["HM Sanchinarro", "HM Puerta del Sur", "HM Montepríncipe"]
    },
    {
        "Id": 3,
        "name": "María Luisa Somoza Álvarez",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Maria-Luisa-Somoza.jpg",
        "hospitales": ["HM Puerta del Sur", "HM Montepríncipe"]
    },
    {
        "Id": 4,
        "name": "Victoria Villalobos Violán",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Victoria-Villalobos.jpg",
        "hospitales": ["HM Montepríncipe"]
    },
    {
        "Id": 5,
        "name": "Sandra Yago Meniz",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Sandra-Yago.jpg",
        "hospitales":  ["HM Puerta del Sur", "HM Montepríncipe"]
    },
    {
        "Id": 6,
        "name": "Itziar Sanchez Marcen",
        "especialidad": "Alergología",
        "urlFicha": "http://www.grupotrc.com",
        "urlImagen": "./images/Section_125x125_Cuadro-medico_Itziar-Sanchez.jpg",
        "hospitales":  ["HM Puerta del Sur"]
    }
];

localStorage.setItem('datos_CuadroMedico', JSON.stringify(datos_CuadroMedico));

// Hospitales
var datos_Hospitales = [ 
    {
        "Id": 1,
        "nombre": "HM Madrid",
        "descripcion": "El Hospital Universitario está situado en pleno centro de la capital, en el barrio de Chamberí en la Plaza del Conde del Valle de Súchil.",
        "consultas": ["902 08 98 00", "901 088 212"],
        "radiologia": ["902 08 97 00", "901 882 230"],
        "odontologia": ["902 08 96 00", "901 080 220"],
        "direccion": "Plaza del conde del valle de suchil, 16 - 28015 Madrid",
        "metro": "Linea 4: San Bernado. Linea 2: San Bernardo y Quevedo",
        "autobus": "Linea 21 y 147. Parada: Metro San Bernardo",
        "parking": "Calle San Bernardo, 95. Calle Rodriguez San Pedro, 8. Calle de Arapiles, 10.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.00h - 22.00h"
    },
    {
        "Id": 2,
        "nombre": "HM Sanchinarro",
        "descripcion": "El Hospital HM Sanchinarro está ubicado en Sanchinarro cerca de la calle Oña, 10",
        "consultas": ["901 08 82 12", "901 08 82 13"],
        "radiologia": ["902 77 01 00", "901 77 33 23"],
        "odontologia": ["902 66 96 00", "901 66 10 11"],
        "direccion": "Calle de Oña, 10 - 28050 Madrid",
        "metro": "Renfe Fuente de la Mora",
        "autobus": "Linea 174. Parada: Santa Maria",
        "parking": "Calle Oña, 12.",
        "urgencias": ["902 08 98 00", "901 088 212", "901 080 220"],
        "atención": "09.00h - 21.00h",
        "visitas": "11.15h - 14.15h / 17.15h - 20.15h",
        "cafeteria": "08.30h - 22.30h"
    }
];

localStorage.setItem('datos_Hospitales', JSON.stringify(datos_Hospitales));