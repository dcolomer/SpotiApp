import { Component } from '@angular/core';
import {SpotifyService} from '../../servicios/spotify.service';
import {TokenService} from '../../servicios/token.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {
  artistas: any[] = [];
  loading = false;

  constructor(private spotifyService: SpotifyService, private tokenService: TokenService) { }

  buscar(termino: string) {
    if (termino.length > 1) {
      this.tokenService.getOrCreateToken().then(token => {
        this.loading = true;
        this.spotifyService.getArtists(token, termino)
          .subscribe(info => {
            this.artistas = info;
            this.loading = false;
          });
      });
    }
  }
}
