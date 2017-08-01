import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';
import { PrivacyPage } from '../pages/privacy/privacy';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class Lia {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'History', component: HistoryPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Privacy', component: PrivacyPage },
      { title: 'Logout', component: LogoutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

