import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems = [
    {
      pregunta: '¿Qué es el Apoyo Mutuo?',
      respuesta: 'El apoyo mutuo es un concepto que se refiere a la colaboración y el respaldo mutuo entre individuos o grupos, con el objetivo de satisfacer sus necesidades y alcanzar metas comunes. En esencia, se trata de personas que se unen de manera voluntaria para ayudarse mutuamente, compartiendo recursos, conocimientos y esfuerzos de manera solidaria. El apoyo mutuo promueve la idea de que juntxs somos más fuertes y que al trabajar en comunidad, podemos superar desafíos, fomentar la autonomía y construir una sociedad más justa y equitativa. En resumen, implica una forma de cooperación basada en la reciprocidad y el bienestar colectivo.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Entonces qué es AppoyoMutuo.com?',
      respuesta: 'AppoyoMutuo.com es una plataforma sin ánimo de lucro con un enfoque en la promoción y unión de grupos que comparten valores relacionados con el apoyo mutuo, la autogestión y la acción social. ¿Qué significa esto en la práctica? Significa que trabajamos para conectar, impulsar el crecimiento y dar visibilidad a iniciativas que abogan por un mundo más colaborativo y equitativo. ¿Te gustaría ser parte de este movimiento?',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Cómo funciona?',
      respuesta: 'Nos encontramos en una fase de inicio donde queremos conocer de primera mano a grupos que quieran unirse a nuestra iniciativa con el propósito de darse más visibilidad y si se diera el caso, aceptar a más gente o contactar con otros grupos, proveedores..etc. Queremos construir una comunidad sólida y hacer conocer las iniciativas que actualmente se llevan a cabo.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: 'Nuestro grupo quedará expuesto en la web?',
      respuesta: 'Si queréis sí. Estamos promoviendo que quien quiera se una y hagamos de esto una comunidad sólida, que no sólo sirva para la gestión interna del grupo, si no que pueda ser un canal de conexión con otros grupos. Una red de redes que sean una sola, y que a la vez respete las diferencias y autonomía. Una asociación voluntaria para alcanzar el bienestar común.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Por qué unirse a AppoyoMutuo.com?',
      respuesta: 'Explorar nuevas oportunidades de colaboración y expansión es un buen motivo. Creemos en romper con la dependencia de las grandes empresas y promover prácticas de consumo responsable. Unirse a nuestra comunidad te brinda la posibilidad de inspirar a otros, apoyar el comercio local y contribuir a un enfoque más equitativo en la producción y el consumo. ¿Te gustaría ser parte de este cambio?',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Qué ofrece AppoyoMutuo.com para nuestro grupo?',
      respuesta: 'AppoyoMutuo.com es más que una plataforma de conexión. Estamos en fase de desarrollo de más secciones de la web, planeamos convertirnos en un portal donde las nuevas iniciativas puedan exponerse y crecer. Además, estamos desarrollando una aplicación que servirá como una herramienta completa de gestión para que los grupos coordinen sus actividades, con calendarios de eventos, foros, gestores de tareas y más.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Cuál es la visión a largo plazo de AppoyoMutuo.com?',
      respuesta: 'Nuestra visión a largo plazo es que AppoyoMutuo.com se convierta en un catalizador para la formación y expansión de grupos dedicados a la autogestión y el apoyo mutuo. Queremos empoderar a estas comunidades para que crezcan, se conecten entre sí y se den a conocer. Creemos en la construcción de un mundo donde la colaboración y la producción horizontal sean la norma, y queremos ser parte de esa transformación.',
      expanded: false // Agrega la propiedad expanded
    },
    {
      pregunta: '¿Quieres saber más?',
      respuesta: 'El concepto de apoyo mutuo se refiere a la cooperación y la ayuda mutua entre individuos o grupos en lugar de la competencia o la lucha individual. Se basa en la idea de que las personas pueden beneficiarse mutuamente al trabajar juntas para alcanzar objetivos compartidos, en lugar de buscar sus intereses de manera exclusiva. El filósofo ruso Piotr Kropotkin es conocido por haber desarrollado y promovido este concepto en el contexto de la teoría social y política.El apoyo mutuo se ha aplicado en una variedad de campos, incluidos los movimientos sociales, la economía cooperativa y la comunidad. Algunas personas ven el apoyo mutuo como una alternativa a los sistemas basados en la competencia y el individualismo, promoviendo la solidaridad y la colaboración.En resumen, el apoyo mutuo es un concepto que aboga por la cooperación y la ayuda mutua como una forma de abordar problemas y promover el bienestar social. Las opiniones sobre este concepto pueden variar según las perspectivas políticas y filosóficas individuales.',
      expanded: false // Agrega la propiedad expanded
    },

    // {
    //   pregunta: 'Pregunta 5',
    //   respuesta: 'Respuesta a la pregunta 5.',
    //   expanded: false // Agrega la propiedad expanded
    // },

    
    
  ];
}
