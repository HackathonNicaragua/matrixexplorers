import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegistroPage} from '../../pages/registro/registro';
import {TabPerfilRetosPage} from '../../pages/tab-perfil-retos/tab-perfil-retos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    
  }

  openRegister(){
    this.navCtrl.push(RegistroPage);
  }

  openPerfilRetos(){
    this.navCtrl.push(TabPerfilRetosPage);
  }
}
