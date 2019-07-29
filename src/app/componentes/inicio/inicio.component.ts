import { Component } from '@angular/core';
import {SpotifyService} from '../../servicios/spotify.service';
import {TokenService} from '../../servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent {
  nuevosAlbums: any[] = [];
  loading = true;
  error = false;
  mensajeError = '';

  constructor(private spotifyService: SpotifyService, private tokenService: TokenService) {
    this.tokenService.getOrCreateToken().then(token => {
      this.spotifyService.getNewReleases(token)
        .subscribe(info => {
          this.nuevosAlbums = info;
          this.loading = false;
        }, errorServicio => {
          this.error = true;
          this.loading = false;
          console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;
        });
    });
  }
}
