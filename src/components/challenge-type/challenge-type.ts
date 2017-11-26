import { Component } from '@angular/core';

/**
 * Generated class for the ChallengeTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'challenge-type',
  templateUrl: 'challenge-type.html'
})
export class ChallengeTypeComponent {

  id: string;
  name: string;
  img: string;

  constructor() {
    console.log('Hello ChallengeTypeComponent Component');
  }

}
