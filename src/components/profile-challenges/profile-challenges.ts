import { Component } from '@angular/core';

/**
 * Generated class for the ProfileChallengesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-challenges',
  templateUrl: 'profile-challenges.html'
})
export class ProfileChallengesComponent {

  id: string;
  IDProfile: string;
  IDChallenge: string;
  estate: number;
  img: string;

  constructor() {
    console.log('Hello ProfileChallengesComponent Component');
  }

}
