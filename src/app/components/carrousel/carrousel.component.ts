import { Component, Input, OnInit } from '@angular/core';
// import {CarouselModule} from 'primeng/carousel';

// import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input() data!: [];

  cards: any[] = []

  body: string = ""

  tags: string[] = []

  created: boolean = false
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(this.created){
      this.createCarrusel(this.data);
      this.created = false
    }
    else{
      this.created = true;
    }
  }

  createCarrusel(data:any){
    console.log("inicio", data)
    data.forEach((el:any) => {
      var tags = this.getTags(el)
      let card = `<div class="container js-slide g-py-40 g-px-20">
       <div class="row">
       <h3 class="text-uppercase g-font-weight-700 g-font-size-18 g-color-black g-mb-10" style="font-family:Poppins;">${el.name}</h3>
        <div class="col-md-6 g-mb-30 g-mb-0--md">
          <img class="img-fluid g-mb-10" src="${el.imagenes[0]}" alt="Image description">
          <div style="display: flex;">
            <p class="text-lowercase font-italic">${tags.toString()} </p>
          </div>
          <div class="d-flex g-mb-5">
            <i class="icon-real-estate-020 u-line-icon-pro g-valign-middle g-font-size-20 g-color-black g-mr-10"></i>
            <p class="mb-0 ml-2">${el.ubication}</p>
          </div>
          <div class="d-flex g-mb-5">
            <i class="icon-user u-line-icon-prog-valign-middle g-font-size-20 g-color-black g-mr-10"></i>
            <p class="mb-0 ml-2">${el.initialPeople} / ${el.necessaryPeople}</p>
          </div>
          <div class="d-flex">
            <i class="icon-finance-146 u-line-icon-pro g-valign-middle g-font-size-20 g-color-black g-mr-10"></i>
            <p class="mb-0 ml-2">${el.requiredTime} días / semana</p>
          </div>
          <a href="/${el.id}" class="btn btn-md g-bg-black g-color-white g-bg-white--hover g-color-black--hover u-btn-outline-black g-mr-10 g-mt-5">Unirme</a>
        </div>

        <div class="col-md-6 pr-0 pl-0">
          <div class="col-md-12 d-flex g-mb-10">
            <div type="button" class="descripcionTab g-py-5 col-md-3 g-bg-black g-color-white g-font-size-14 p-10 text-center g-mr-1 g-bg-white--hover g-color-black--hover">DESCRIPCIÓN</div>
            <div type="button" class="necesidadesTab g-py-5 col-md-3 g-bg-black g-color-white g-font-size-14 p-10 text-center g-mr-1 g-bg-white--hover g-color-black--hover">NECESIDADES</div>
            <div type="button" class="beneficiosTab g-py-5 col-md-3 g-bg-black g-color-white g-font-size-14 p-10 text-center g-mr-1 g-bg-white--hover g-color-black--hover">BENEFICIOS</div>
            <div type="button" class="contactoTab g-py-5 col-md-3 g-bg-black g-color-white g-font-size-14 p-10 text-center g-bg-white--hover g-color-black--hover">CONTACTO</div>
          </div>
          <div class="panelInfo panelInfo_descripcion h-100 w-100 g-bg-white g-pr-10 g-pl-10">
            <p class="text-justify">${el.description}</p>
          </div>
          <div class="panelInfo panelInfo_necesidades h-100 w-100 g-bg-white g-pr-10 g-pl-10">
            <p class="text-justify">${el.needs}</p>
          </div>
          <div class="panelInfo panelInfo_beneficios h-100 w-100 g-bg-white g-pr-10 g-pl-10">
            <p class="text-justify">${el.offer}</p>
          </div>
          <div class="panelInfo panelInfo_contacto h-100 w-100 g-bg-white g-pr-10 g-pl-10">
            <p class="text-justify">${el.contact}</p>
          </div>
        </div>
      </div>
     </div>`
    this.cards.push(card)
    });

    this.body=`<div class="js-carousel u-carousel-v1 u-carousel-v3 g-pb-50" style="transform: scale(0.95);"
    data-infinite="true"
    data-center-mode="true"
    data-center-padding="50px"
    data-slides-show="3"
    data-focus-on-select="true"
    data-arrows-classes="u-arrow-v1 g-absolute-centered--x g-bottom-0 g-width-40 g-height-40 g-font-size-20 g-color-white g-bg-primary g-bg-black--hover g-transition-0_2 g-transition--ease-in"
    data-arrow-left-classes="fa fa-angle-left g-ml-minus-25"
    data-arrow-right-classes="fa fa-angle-right g-ml-30"
    data-responsive='[{
      "breakpoint": 500,
      "settings": {
        "slidesToShow": 3
      }
    }, {
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 1,
        "centerPadding": "100px"
      }
    }, {
      "breakpoint": 768,
      "settings": {
        "slidesToShow": 1,
        "centerPadding": "40px"
      }
    }, {
      "breakpoint": 676,
      "settings": {
        "slidesToShow": 1,
        "centerPadding": "40px"
      }
    },
    {
     "breakpoint": 500,
     "settings": {
       "slidesToShow": 1,
       "centerPadding": "40px"
     }
   },
    {
     "breakpoint": 376,
     "settings": {
       "slidesToShow": 1,
       "centerPadding": "40px"
     }
   }]'>
   ${this.cards}
   `

    if(this.cards.length > 0){
      var testScript = document.createElement("script");
      testScript.setAttribute("id", "testScript");
      testScript.setAttribute("src", "assets/js/startCarrusel.js");
      document.body.appendChild(testScript);
    }
  }

  getTags(data:any){
    if(data){
      if(data.tags){
        data.tags.forEach((tag: string) => {
          this.tags.push(tag)
        });
        return this.tags;
      }
    }
    return ""
  }

  tabClick(){
    console.log("click")
  }
}
