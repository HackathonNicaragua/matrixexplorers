import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalleRetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-reto',
  templateUrl: 'detalle-reto.html',
})
export class DetalleRetoPage {

  item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleRetoPage');
  }

  showHelp(helpMessage){
    let alert = this.alertCtrl.create({
      message: helpMessage,
      buttons: ["Aceptar"]
    });
    alert.present();
  }
}
