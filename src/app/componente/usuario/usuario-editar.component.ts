import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.parent.params.subscribe(parametro=>{
      
      console.log("ruta hija editar");
      console.log(parametro);
    })
   }

  ngOnInit(): void {
  }

}
