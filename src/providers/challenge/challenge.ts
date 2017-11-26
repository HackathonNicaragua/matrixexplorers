import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChallengeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChallengeProvider {


  constructor(public http: Http) {
  }

  getChallenges(){
    return this.http.get("https://discovery-challenge-nicaragua.herokuapp.com/api/challenges").map(res => res.json());
  }
}
