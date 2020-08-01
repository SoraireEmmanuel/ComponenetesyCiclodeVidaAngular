import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <!--<app-ng-style></app-ng-style>

 
    <app-css></app-css>
    <app-ng-class> </app-ng-class>-->
    <br>
    <p appResaltado [color]="'orange'">
        Hola mundo desde app.componenet
    </p>
    <app-ng-swich></app-ng-swich>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
