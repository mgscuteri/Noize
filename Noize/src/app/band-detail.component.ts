import {Component, Input} from '@angular/core';
import {Band} from './band'


@Component({
  selector: 'band-detail',
  templateUrl: './band-detail.html',
  styleUrls: ['./app.component.css'],  
})
export class BandDetailComponent {
  @Input() selectedBand: Band;
  disableEdit = true;
  buttonText = "Edit";
  
  editBand(): void{            
   this.disableEdit = !this.disableEdit;
   if(this.disableEdit)
     this.buttonText = "Edit"
   else  
     this.buttonText = "Save";      
  }
}

