import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController } from'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';

/**@IonicPage()*/

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  
  constructor(public navCtrl: NavController) {
  }
  
}




