import { Component } from '@angular/core';
import {Band} from './band'
import {BandsWidgetComponent} from './bands-widget.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'Noize';   
}

