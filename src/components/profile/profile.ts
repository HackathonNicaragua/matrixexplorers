import { Component } from '@angular/core';

/**
 * Generated class for the ProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
  id: string;
  firtName: string;
  lastName: string;
  gender: string;
  avatar: string;
  bornDate: Date;
  IDLevel: string;
  progress: number;
  username: string;
  email: string;
  
  constructor() {
    console.log('Hello ProfileComponent Component');
  }

}
