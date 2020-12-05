import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-controlado',
  templateUrl: './error-controlado.component.html',
  styles: [],
})
export class ErrorControladoComponent implements OnInit {
  @Input() mensaje: string;

  constructor() {}

  ngOnInit(): void {}
}
