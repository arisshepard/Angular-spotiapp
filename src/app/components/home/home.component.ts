// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  // paises: any[] = [];

  // constructor(private http: HttpClient) {
  //   console.log('constructor llamado');

  //   this.http
  //     .get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((respuesta: any) => {
  //       this.paises = respuesta;
  //       console.log(respuesta);
  //     });
  // }

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );
  }
}
