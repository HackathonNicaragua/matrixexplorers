import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the AvatarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvatarProvider {

 getAvatars()
 {
   return this.http.get("https://discovery-challenge-nicaragua.herokuapp.com/api/avatars").map(res => res.json());
 }

  constructor(public http: Http) {
    console.log('Hello AvatarProvider Provider');



  }

}
