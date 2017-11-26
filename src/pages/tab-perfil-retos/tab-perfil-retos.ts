import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PerfilPage} from '../../pages/perfil/perfil';
import {RetosPage} from '../../pages/retos/retos';

/**
 * Generated class for the TabPerfilRetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-perfil-retos',
  templateUrl: 'tab-perfil-retos.html',
})
export class TabPerfilRetosPage {

  perfil = PerfilPage;
  retos = RetosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPerfilRetosPage');
  }

}
