import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './componente/ng-style/ng-style.component';
import { CssComponent } from './componente/css/css.component';
import { NgClassComponent } from './componente/ng-class/ng-class.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
