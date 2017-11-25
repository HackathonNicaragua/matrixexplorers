import { Component } from '@angular/core';

/**
 * Generated class for the LevelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'level',
  templateUrl: 'level.html'
})
export class LevelComponent {

  id: number;
  number: number;
  name: string;
  experience: number;

  constructor() {
    console.log('Hello LevelComponent Component');
  }

}
