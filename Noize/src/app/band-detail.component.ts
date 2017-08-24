import {Component, Input} from '@angular/core';
import {Band} from './band'
import {BandButtonState} from './band'


@Component({
  selector: 'band-detail',
  templateUrl: './band-detail.html',
  styleUrls: ['./app.component.css'],  
})
export class BandDetailComponent {
  @Input() selectedBand: Band;
  @Input() bandButtonState: BandButtonState;
  @Input() bandName : string;
  //disableEdit = true;
  //buttonText = "Edit";
  
  editBand(): void{            
    this.bandButtonState.disableEdit = !this.bandButtonState.disableEdit;
    if(this.bandButtonState.disableEdit){
      this.selectedBand.bandName = this.bandName;
      this.bandButtonState.buttonText = "Edit"
    }
    else{
      this.bandButtonState.buttonText = "Save";      
    }
  }

  cancelEdit(): void{
    this.bandName = this.selectedBand.bandName;
    this.editBand();
  }
}

