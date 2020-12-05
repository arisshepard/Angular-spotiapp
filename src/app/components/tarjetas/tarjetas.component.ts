import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [],
})
export class TarjetasComponent implements OnInit {
  @Input() public items: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verArtista(item: any): void {
    let artistaId: any;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    console.log(artistaId);

    this.router.navigate(['/artist', artistaId]);
  }
}
