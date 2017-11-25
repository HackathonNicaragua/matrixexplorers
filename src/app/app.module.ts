import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';

import {PerfilPage} from '../pages/perfil/perfil';
import {RetosPage} from '../pages/retos/retos';
import {TabPerfilRetosPage} from '../pages/tab-perfil-retos/tab-perfil-retos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    PerfilPage,
    RetosPage,
    TabPerfilRetosPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    PerfilPage,
    RetosPage,
    TabPerfilRetosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
