import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvatarComponent } from '../../components/avatar/avatar';
import { AvatarProvider } from '../../providers/avatar/avatar';
      
/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  
  avatars: AvatarComponent[];
  
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private avatarProv:AvatarProvider) {
      this.avatarProv.getAvatars().subscribe((avatars)=> {
         this.avatars=avatars;
         console.log(this.avatars);  
       });
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarPage');
  }

}
