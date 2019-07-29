import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NoImagenPipe } from './pipes/no-imagen.pipe';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/compartido/loading/loading.component';
import {DomseguroPipe} from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagenPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
