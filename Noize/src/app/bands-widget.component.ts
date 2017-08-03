import {Component} from '@angular/core';
import {Band} from './band'
import {BandDetailComponent} from './band-detail.component'


var Bands: Band[] = [
  {bandId: 1, bandName:'YellowCard'},
  {bandId: 2, bandName:'Ratatat'},
  {bandId: 3, bandName:'Daft Punk'},  
];

@Component({
  selector: 'bands-widget',
  templateUrl: './bands-widget.html',
  styleUrls: ['./app.component.css'],  
})
export class BandsWidgetComponent {
  bands = Bands;
  selectedBand: Band;

  onSelect(band: Band): void {    
  this.selectedBand = band;
  //this.buttonText = "Edit";
  //this.disableEdit = true;
  }
}

