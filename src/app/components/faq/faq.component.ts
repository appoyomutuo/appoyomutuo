import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems = [
    {
      pregunta:  'El Concepto', //¿Qué es el Apoyo Mutuo?',
      respuesta: 'El apoyo mutuo es un concepto que se refiere a la colaboración y el respaldo mutuo entre individuos o grupos con el objetivo de satisfacer sus necesidades y alcanzar metas comunes. \n\n En esencia, se trata de personas que se unen de manera voluntaria para ayudarse mutuamente, compartiendo recursos, conocimientos y esfuerzos de manera solidaria. El apoyo mutuo promueve la idea de que juntxs somos más fuertes y que al trabajar en comunidad, podemos superar desafíos, fomentar la autonomía y construir una sociedad más justa y equitativa. \n\n En resumen, implica una forma de cooperación basada en la reciprocidad y el bienestar colectivo.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'La Plataforma',
      respuesta: 'AppoyoMutuo.com es una plataforma sin ánimo de lucro con un enfoque en la promoción y unión de grupos que comparten valores relacionados con el apoyo mutuo, la autogestión y la acción social directa. \n\n El objetivo es fomentar un cambio en los hábitos de consumo a través de los diferentes proyectos y que éstos se hagan más grandes, se conecten entre sí y se formen nuevas redes que llegen a suponer una alternativa real y beneficiosa para los involucrados.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'El Funcionamiento',
      respuesta: 'Planteamos el proyecto en tres fases. \n\nLa primera, en la cuál nos encontramos ahora, se basa en buscar grupos ya creado, o iniciativas que aún no se hayan materializado, y cuando tengamos un número viable de proyectos exponerlos en la web. \n\n La siguiente fase será por un lado anunciar a esos grupos en la web y dar la posibilidad de contactación a gente interesada en unirse, y por otro lado fomentar la comunicación entre los grupos dando fácil acceso al contacto y la información sobre la actividad que se lleva a cabo y que puede verse complementada por otro grupo. \n\nEn una tercera fase la web se convertiría en una app de gestión que los grupos y las personas podrán usar para coordinar sus actividades con un foro, tablón de tareas y calendario por proyecto.',
      // respuesta: 'Nos encontramos en una fase de inicio donde queremos conocer de primera mano a grupos que quieran unirse a nuestra iniciativa con el propósito de darse más visibilidad y si se diera el caso, aceptar a más gente o contactar con otros grupos, proveedores..etc. Queremos construir una comunidad sólida y hacer conocer las iniciativas que actualmente se llevan a cabo.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'Ventajas Individuales',
      respuesta: 'Al unirse a una red de grupos estamos creando alternativa y haciéndola posible, estamos funcionando que impacta positivamente en nuestro hábitos de consumo de las siguientes maneras: \n\n 1- Apoyo a Productores Locales: Muchos proyectos de autogestión y sostenibilidad promueven el consumo de productos locales y artesanales. Al unirte a estos proyectos, es probable que empieces a comprar más productos de productores locales en lugar de depender de grandes empresas.\n\n 2- Economía Colaborativa: Participar en proyectos de economía colaborativa te permite compartir recursos y servicios con otros miembros de la comunidad. Esto puede reducir la necesidad de comprar productos o servicios de grandes empresas. \n\n 3- Consumo Consciente: Al estar más involucrado en proyectos que promueven la sostenibilidad, es probable que aumentes tu conciencia sobre el impacto ambiental y social de tus compras. Esto puede llevar a decisiones de compra más informadas y éticas. \n\n 4- Participación en Iniciativas de Producción Local: Algunos proyectos pueden involucrarte en la producción o elaboración de productos locales, lo que te permite contribuir a la creación de productos sostenibles y apoyar la producción local.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'Ventajas Grupales',
      respuesta: 'Los grupos y proyectos ya creados o que aún son sólo ideas son las piezas esenciales de la plataforma. Como colectivo, al unirse a la red se obtienen una serie de ventajas: \n\n 1- Ampliación del Grupo: Opcionalmente, se podrá dar acceso a que nuevas personas ingresen en el grupo mediante la publicación del contacto. Esto queda reflejado en el formulario de nuevos grupos. \n\n 2- Compartir Recursos entre grupos: La colaboración entre grupos puede conducir al uso compartido de recursos, como instalaciones, herramientas, espacio de almacenamiento o incluso personal. Esto puede ayudar a reducir los costos y mejorar la eficiencia. También se fomenta el intercambio de información, de experiencia y la expansión de más proveedores interesados. \n\n3- Mayor Impacto: La colaboración entre grupos puede aumentar el impacto de sus esfuerzos colectivos en la promoción de hábitos y valores específicos. Juntos, pueden influir en un cambio más significativo en la comunidad o en la sociedad en general. \n\n 4- Diversificación de Perspectivas: Al interactuar con grupos diversos, los grupos pueden obtener una variedad de perspectivas y enfoques en la promoción de sus valores. Esto puede enriquecer sus propias estrategias y enfoques. \n\n 5- Mayor Resiliencia: Al formar parte de una red de grupos, los grupos pueden volverse más resistentes a los desafíos y obstáculos que puedan enfrentar en su camino. Pueden buscar apoyo y soluciones conjuntas.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'A Largo Plazo',
      respuesta: 'Nuestra visión a largo plazo es que AppoyoMutuo.com se convierta en un catalizador para la formación y expansión de grupos dedicados a la autogestión y el apoyo mutuo. Queremos empoderar a estas comunidades para que crezcan, se conecten entre sí y se den a conocer. Creemos en la construcción de un mundo donde la colaboración y la producción horizontal sean la norma, y queremos ser parte de esa transformación.',
      expanded: false // Agrega la propiedad expanded
    },
    // {
    //   pregunta: '¿Quieres saber más?',
    //   respuesta: 'El concepto de apoyo mutuo se refiere a la cooperación y la ayuda mutua entre individuos o grupos en lugar de la competencia o la lucha individual. Se basa en la idea de que las personas pueden beneficiarse mutuamente al trabajar juntas para alcanzar objetivos compartidos, en lugar de buscar sus intereses de manera exclusiva. El filósofo ruso Piotr Kropotkin es conocido por haber desarrollado y promovido este concepto en el contexto de la teoría social y política.El apoyo mutuo se ha aplicado en una variedad de campos, incluidos los movimientos sociales, la economía cooperativa y la comunidad. Algunas personas ven el apoyo mutuo como una alternativa a los sistemas basados en la competencia y el individualismo, promoviendo la solidaridad y la colaboración.En resumen, el apoyo mutuo es un concepto que aboga por la cooperación y la ayuda mutua como una forma de abordar problemas y promover el bienestar social. Las opiniones sobre este concepto pueden variar según las perspectivas políticas y filosóficas individuales.',
    //   expanded: false // Agrega la propiedad expanded
    // },

    // {
    //   pregunta: 'Pregunta 5',
    //   respuesta: 'Respuesta a la pregunta 5.',
    //   expanded: false // Agrega la propiedad expanded
    // },

    
    
  ];
}
