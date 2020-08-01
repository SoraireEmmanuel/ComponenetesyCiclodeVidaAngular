import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(parametro=>{
      
      console.log("ruta hija nuevo");
      console.log(parametro);
    })
   }

  ngOnInit(): void {
  }

}
