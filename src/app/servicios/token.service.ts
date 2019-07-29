import { Injectable } from '@angular/core';
import {SpotifyService} from './spotify.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  public getOrCreateToken(): Promise<string> {
    return new Promise<string>(resolve => {
      const TIMEOUT = 3600000; // 1 hora en milisegundos
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let storedToken;

      if (!currentUser) { // Si no hay nada en el LocalStorage -> crearlo
        this.generateAndSaveToken().then(datos => {
          storedToken = datos;
          console.log('creado', storedToken);
          resolve(storedToken);
        });
      } else {
        const old = parseInt(currentUser.timestamp, 10);
        const ahora = new Date().getTime();
        if (ahora - old >= TIMEOUT) { // Ha caducado el token...obtener uno nuevo
          this.generateAndSaveToken().then(datos => {
            storedToken = datos;
            console.log('renovado', storedToken);
            resolve(storedToken);
          });
        } else { // El token del LocalStorage aún no ha caducado
          storedToken = currentUser.accessToken;
          console.log('activo', storedToken);
          resolve(storedToken);
        }
      }
    });
  }

  private generateAndSaveToken(): Promise<string> {
    return new Promise<string>(resolve => {
      this.getToken()
        .subscribe((datos: any) => {
          const accessToken = 'Bearer ' + datos.access_token;
          const ahora = new Date().getTime();
          localStorage.setItem('currentUser', JSON.stringify({ accessToken: `${accessToken}`, timestamp: `${ahora}` }));
          resolve(accessToken);
        });
    });
  }

  private getToken() {
    const PROXY_BASE_URL = 'https://spotify-get-token.herokuapp.com/spotify';
    const clientId = 'AQUI TU CLIENT ID';
    const clientSecret = 'AQUI TU CLIENT SECRET';
    const PROXY_URL = `${PROXY_BASE_URL}/${clientId}/${clientSecret}`;
    return this.http.get(`${PROXY_URL}`);
  }
}
