import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(imagenes: any[]): string {
    if (!imagenes) {
      return 'assets/img/noimage.png';
    }

    if (imagenes.length > 0) {
      return imagenes[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
