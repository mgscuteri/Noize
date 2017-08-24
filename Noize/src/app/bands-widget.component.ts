import {Component} from '@angular/core';
import {Band} from './band'
import {BandButtonState} from './band'
import {BandDetailComponent} from './band-detail.component'
import {BandService} from './band.service'
import {OnInit} from '@angular/core';


var bandButtonStateObj: BandButtonState = {  buttonText: "Edit", disableEdit: true}


@Component({
  selector: 'bands-widget',
  templateUrl: './bands-widget.html',
  styleUrls: ['./app.component.css'],  
  providers: [BandService]
})
export class BandsWidgetComponent implements OnInit {
  bands: Band[];
  selectedBand: Band;  
  bandButtonState = bandButtonStateObj;
  disableEdit = true;
  buttonText = "Edit";  

  constructor(private bandService: BandService) { }

  onSelect(band: Band): void {    
  this.selectedBand = band;
  this.bandButtonState.buttonText = "Edit";
  this.bandButtonState.disableEdit = true;
  }
  getBands(): void {
    this.bandService.getBands().then(bands => this.bands = bands);
  }
  ngOnInit(): void{
    this.getBands();
  }
}

