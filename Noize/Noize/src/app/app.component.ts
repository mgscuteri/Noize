import { Component } from '@angular/core';

export class Band {
  bandId: number;
  bandName: string;
}

var Bands: Band[] = [
  {bandId: 1, bandName:'YellowCard'},
  {bandId: 2, bandName:'Ratatat'},
  {bandId: 3, bandName:'Daft Punk'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'Noize';
  bands = Bands;
  selectedBand: Band;

  onSelect(band: Band): void {    
    this.selectedBand = band;
  }
}
