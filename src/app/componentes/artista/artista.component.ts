import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../servicios/spotify.service';
import {Location} from '@angular/common';
import {TokenService} from '../../servicios/token.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loading = true;

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService,
              private tokenService: TokenService,
              private location: Location)
  {
    this.router.paramMap.subscribe( params => {
      this.getArtista(params.get('id'));
      this.getArtistaTopTracks(params.get('id'));
    });
  }

  private getArtista(id: string) {
    this.tokenService.getOrCreateToken().then(token => {
      this.spotifyService.getSingleArtist(token, id)
        .subscribe(info => {
          this.artista = info;
          this.loading = false;
        });
    });
  }

  private getArtistaTopTracks(id: string) {
    this.tokenService.getOrCreateToken().then(token => {
      this.spotifyService.getSingleArtistTopTracks(token, id)
        .subscribe(info => {
          this.topTracks = info;
          this.loading = false;
        });
    });
  }

  volver() {
    this.location.back();
  }
}
