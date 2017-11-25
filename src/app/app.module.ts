import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
import { AvatarComponent } from '../components/avatar/avatar';
import { ChallengeComponent } from '../components/challenge/challenge';
import { ChallengeTypeComponent } from '../components/challenge-type/challenge-type';
import { LevelComponent } from '../components/level/level';
import { ProfileComponent } from '../components/profile/profile';
import { ProfileChallengesComponent } from '../components/profile-challenges/profile-challenges';
import { PublicityComponent } from '../components/publicity/publicity';
import { PublicityChallengeComponent } from '../components/publicity-challenge/publicity-challenge';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    PublicityComponent,
    PublicityChallengeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    PublicityComponent,
    PublicityChallengeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
