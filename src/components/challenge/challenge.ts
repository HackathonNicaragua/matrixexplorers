import { Component } from '@angular/core';

/**
 * Generated class for the ChallengeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'challenge',
  templateUrl: 'challenge.html'
})
export class ChallengeComponent {

  id: string;
  IDChallengeType: string;
  name: string;
  descripction: string;
  help: string;
  position: Array<any>;
  dateLimit: Date;
  likes: number;
  dislikes: number;
  experiencie: number;

  constructor() {
    console.log('Hello ChallengeComponent Component');
  }

}
