import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(parametro=>{
      
      console.log("ruta hija detalle");
      console.log(parametro);
    })
   }

  ngOnInit(): void {
  }

}
