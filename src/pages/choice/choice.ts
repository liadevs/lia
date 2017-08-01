import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicePage');
  }

  public next(): void {
    this.navCtrl.popToRoot();
  }

}
