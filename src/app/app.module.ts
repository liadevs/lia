import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Lia } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';
import { PrivacyPage } from '../pages/privacy/privacy';
import { LogoutPage } from '../pages/logout/logout';
import { QuestionPage } from '../pages/question/question';
import { ChoosePage } from '../pages/choose/choose';
import { ChoicePage } from '../pages/choice/choice';

@NgModule({
  declarations: [
    Lia,
    HomePage,
    HistoryPage,
    SettingsPage,
    PrivacyPage,
    LogoutPage,
    QuestionPage,
    ChoosePage,
    ChoicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Lia)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Lia,
    HomePage,
    HistoryPage,
    SettingsPage,
    PrivacyPage,
    LogoutPage,
    QuestionPage,
    ChoosePage,
    ChoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
