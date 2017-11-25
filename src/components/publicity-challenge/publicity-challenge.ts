import { Component } from '@angular/core';

/**
 * Generated class for the PublicityChallengeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'publicity-challenge',
  templateUrl: 'publicity-challenge.html'
})
export class PublicityChallengeComponent {

  id: string;
  IDChallenge: string;
  IDPublicity: string;

  constructor() {
    console.log('Hello PublicityChallengeComponent Component');
    this.text = 'Hello World';
  }

}
