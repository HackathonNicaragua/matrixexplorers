import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD

=======
>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
<<<<<<< HEAD
import {AvatarPage} from '../pages/avatar/avatar';
=======
import { DetalleRetoPage } from '../pages/detalle-reto/detalle-reto';


import { AvatarComponent } from '../components/avatar/avatar';
import { ChallengeComponent } from '../components/challenge/challenge';
import { ChallengeTypeComponent } from '../components/challenge-type/challenge-type';
import { LevelComponent } from '../components/level/level';
import { ProfileComponent } from '../components/profile/profile';
import { ProfileChallengesComponent } from '../components/profile-challenges/profile-challenges';
import { PublicityComponent } from '../components/publicity/publicity';
import { PublicityChallengeComponent } from '../components/publicity-challenge/publicity-challenge';

>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe

import {PerfilPage} from '../pages/perfil/perfil';
import {RetosPage} from '../pages/retos/retos';
import {TabPerfilRetosPage} from '../pages/tab-perfil-retos/tab-perfil-retos';
<<<<<<< HEAD
import { AvatarProvider } from '../providers/avatar/avatar';
=======
import { ChallengeProvider } from '../providers/challenge/challenge';
>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
<<<<<<< HEAD
    AvatarPage
=======
    PerfilPage,
    RetosPage,
    DetalleRetoPage,
    TabPerfilRetosPage,
    
    AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    PublicityComponent,
    PublicityChallengeComponent
>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
<<<<<<< HEAD
    AvatarPage
=======
    PerfilPage,
    RetosPage,
    DetalleRetoPage,
    TabPerfilRetosPage,
    AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    PublicityComponent,
    PublicityChallengeComponent
>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    AvatarProvider
=======
    ChallengeProvider
>>>>>>> 0c8f4de9d4f7003eef38a958cff7cd0efa3ed2fe
  ]
})
export class AppModule {}
