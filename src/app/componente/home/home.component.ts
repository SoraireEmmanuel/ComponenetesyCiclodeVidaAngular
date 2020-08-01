import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>

 
    <app-css></app-css>
    <app-ng-class> </app-ng-class>
    <br>
    <p appResaltado [color]="'orange'">
        Hola mundo desde app.componenet
    </p>
    <app-ng-swich></app-ng-swich>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit , OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges (){
    console.log("ngOnChage");
  }

  ngDoCheck (){
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit (){
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit (){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked (){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
