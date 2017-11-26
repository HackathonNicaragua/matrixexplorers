import { DetalleRetoPage } from './../detalle-reto/detalle-reto';
import { ChallengeProvider } from '../../providers/challenge/challenge';
import { ChallengeComponent } from '../../components/challenge/challenge';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.s
 */

@IonicPage()
@Component({
  selector: 'page-retos',
  templateUrl: 'retos.html',
})
export class RetosPage {
  challenges : ChallengeComponent[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private challengeProv: ChallengeProvider) {
    this.challengeProv.getChallenges().subscribe((challenges) => {
      this.challenges = challenges;
    });
  }

  showDetails(item){
    this.navCtrl.push(DetalleRetoPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetosPage');
  }

}
