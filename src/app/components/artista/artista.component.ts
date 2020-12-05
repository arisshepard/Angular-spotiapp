import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent implements OnInit {
  // artistaId: any;
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    // this.loading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getArtista(param.id);
      this.getTopTracks(param.id);
    });
  }

  getArtista(id: string): void {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista: any) => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string): void {
    this.spotify.getTopTracks(id).subscribe((tracks: any) => {
      this.topTracks = tracks;
      // console.log(this.topTracks);
    });
  }
}
