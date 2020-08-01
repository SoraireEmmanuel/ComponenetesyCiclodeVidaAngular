import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componente/ng-style/ng-style.component';
import { CssComponent } from './componente/css/css.component';
import { NgClassComponent } from './componente/ng-class/ng-class.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgSwichComponent } from './componente/ng-swich/ng-swich.component';
import { HomeComponent } from './componente/home/home.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { UsuarioNuevoComponent } from './componente/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './componente/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componente/usuario/usuario-detalle.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    ResaltadoDirective,
    NgSwichComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
