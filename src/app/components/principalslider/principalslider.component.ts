import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'principalslider',
  templateUrl: './principalslider.component.html',
  styleUrls: ['./principalslider.component.css']
})
export class PrincipalsliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var testScript = document.createElement("script");
      testScript.setAttribute("id", "testScript");
      testScript.setAttribute("src", "assets/js/startCarrusel.js");
      document.body.appendChild(testScript);
  }
  
}
