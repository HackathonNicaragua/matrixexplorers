import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
<<<<<<< HEAD
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
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece


import {PerfilPage} from '../pages/perfil/perfil';
import {RetosPage} from '../pages/retos/retos';
import {TabPerfilRetosPage} from '../pages/tab-perfil-retos/tab-perfil-retos';
import { ChallengeProvider } from '../providers/challenge/challenge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    RegistroPage
=======
    RegistroPage,
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
    PublicityChallengeComponent,
    ProgressBarComponent
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    RegistroPage
=======
    RegistroPage,
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
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChallengeProvider
  ]
})
export class AppModule {}
