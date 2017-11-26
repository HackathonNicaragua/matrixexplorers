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
<<<<<<< HEAD
=======
=======
import {AvatarPage} from '../pages/avatar/avatar';
>>>>>>> release/0.0.3.1
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
<<<<<<< HEAD
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece
=======
>>>>>>> release/0.0.3.1


import {PerfilPage} from '../pages/perfil/perfil';
import {RetosPage} from '../pages/retos/retos';
import {TabPerfilRetosPage} from '../pages/tab-perfil-retos/tab-perfil-retos';
import { AvatarProvider } from '../providers/avatar/avatar';
import { ChallengeProvider } from '../providers/challenge/challenge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
<<<<<<< HEAD
    RegistroPage
=======
=======
>>>>>>> release/0.0.3.1
    RegistroPage,
    AvatarPage,
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
<<<<<<< HEAD
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece
=======
>>>>>>> release/0.0.3.1
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
<<<<<<< HEAD
    RegistroPage
=======
=======
>>>>>>> release/0.0.3.1
    RegistroPage,
    AvatarPage,
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
<<<<<<< HEAD
>>>>>>> ac903244a616d7ab2eefc6884c28be1298739ece
=======
>>>>>>> release/0.0.3.1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvatarProvider,
    ChallengeProvider
  ]
})
export class AppModule {}
