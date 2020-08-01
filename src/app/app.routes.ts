import {  RouterModule, Routes } from '@angular/router'
import { HomeComponent} from './componente/home/home.component'
import { UsuarioComponent } from './componente/usuario/usuario.component'

import { USUARIO_ROUTES } from './componente/usuario/usuario.routes'

const APP_ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'usuario/:10', component:UsuarioComponent,
    children:USUARIO_ROUTES
},
    {path:'**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
