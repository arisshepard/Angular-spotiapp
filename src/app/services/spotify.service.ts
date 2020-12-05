import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  private getHeaders(): HttpHeaders {
    const token =
      'QDIRCQZVhHNcc8RwxbX3HgVbrz3smJigggN6C2e_acXKZhO3xhApiyZ47xjM7EAU5lOQTuqy79MhMVlVf8';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return headers;
  }

  private getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.token}`,
    // });

    // const headers = this.getHeaders();

    // return this.http
    //   .get('https://api.spotify.com/v1/browse/new-releases', {
    //     headers,
    //   })
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }

  getArtistas(termino: string): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.token}`,
    // });

    // const headers = this.getHeaders();

    // return this.http
    //   .get(
    //     `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
    //     {
    //       headers,
    //     }
    //   )
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`).pipe(
      map((data) => data.tracks)
    );
  }
}
