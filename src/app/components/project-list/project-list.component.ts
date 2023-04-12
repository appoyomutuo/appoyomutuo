import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() data!: [];
  prevData = []

  constructor(private router:Router) { }

  cards:any = []

  ngOnInit(): void {
    // console.log("===data===", this.data)
    // this.cards = this.data
    this.prevData = this.data
  }

  ngDoCheck(){
    if(this.data.length > 0 && this.prevData !== this.data){
      this.cards = []
      // console.log("===data===", this.data)
      this.cards = this.data
    }
  }

  changeImage(image:any){
    console.log("imagen", image)
    // var index = this.project.imagenes.indexOf(image);
    // if (image !== -1) {
    //   this.currentImage = this.project.imagenes[index]
    // }
  }

  gotoProjectDetail(id:any){
    this.router.navigate(['/projectDetail'], { queryParams: { project: id } });
  }

}
