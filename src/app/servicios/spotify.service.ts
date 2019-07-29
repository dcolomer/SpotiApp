import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly BASE_URL = 'https://api.spotify.com/v1/';
  private readonly NEWS_URL = 'browse/new-releases';
  private readonly ARTIST_URL = 'search';
  private readonly ARTIST_DETAILS_URL = 'artists';
  private readonly ARTIST_TOP_TRACKS_URL = 'top-tracks?country=us';

  constructor(private http: HttpClient) { }

  private getQuery(query: string, token: string, params?: HttpParams) {
    const URL = `${this.BASE_URL}${query}`;
    const headers = new HttpHeaders({
      Authorization: token
    });
    return this.http.get(URL, {headers, params});
  }

  getNewReleases(token) {
    const params = new HttpParams().append('limit', '25');
    return this.getQuery(this.NEWS_URL, token, params)
      .pipe(map((datos: any) => datos.albums.items));
  }

  getArtists(token, termino) {
    let params = new HttpParams().append('type', 'artist');
    params = params.append('limit', '15');
    params = params.append('q', `${termino}`);

    return this.getQuery(this.ARTIST_URL, token, params)
      .pipe(map((datos: any) => datos.artists.items));
  }

  getSingleArtist(token, id) {
    return this.getQuery(`${this.ARTIST_DETAILS_URL}/${id}`, token);
  }

  getSingleArtistTopTracks(token, id) {
    return this.getQuery(`${this.ARTIST_DETAILS_URL}/${id}/${this.ARTIST_TOP_TRACKS_URL}`, token)
      .pipe(map((datos: any) => datos.tracks));
  }
}
