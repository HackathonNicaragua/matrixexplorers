import { Component } from '@angular/core';

/**
 * Generated class for the PublicityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'publicity',
  templateUrl: 'publicity.html'
})
export class PublicityComponent {

  id: string;
  img: string;

  constructor() {
    console.log('Hello PublicityComponent Component');
    
  }

}
