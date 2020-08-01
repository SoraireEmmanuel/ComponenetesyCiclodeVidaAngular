import {  RouterModule, Routes } from '@angular/router'
import { HomeComponent} from './componente/home/home.component'
import { UsuarioComponent } from './componente/usuario/usuario.component'

import { UsuarioNuevoComponent } from "./componente/usuario/usuario-nuevo.component";
import { UsuarioEditarComponent}  from"./componente/usuario/usuario-editar.component";
import { UsuarioDetalleComponent} from "./componente/usuario/usuario-detalle.component";


const APP_ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'usuario/:10', component:UsuarioComponent,
    children:[
        {path: 'nuevo', component: UsuarioNuevoComponent},
        {path: 'editar', component: UsuarioEditarComponent},
        {path: 'detalle', component: UsuarioDetalleComponent},
        {path:'**', pathMatch:'full', redirectTo: 'nuevo'}
    ] },
    {path:'**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
