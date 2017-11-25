import { Component } from '@angular/core';

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent {

  id: string;
  img: string;

  constructor() {
    console.log('Hello AvatarComponent Component');
  }

}
