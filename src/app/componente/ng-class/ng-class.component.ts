import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
 
})
export class NgClassComponent implements OnInit {
alerta:string="alert-danger"
propiedades:boolean=false;
loading:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading=true;
    setTimeout(()=>this.loading=false, 3000)
  }
}
