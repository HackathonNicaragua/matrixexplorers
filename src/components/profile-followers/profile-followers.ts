import { Component } from '@angular/core';

/**
 * Generated class for the ProfileFollowersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-followers',
  templateUrl: 'profile-followers.html'
})
export class ProfileFollowersComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileFollowersComponent Component');
    this.text = 'Hello World';
  }

}
