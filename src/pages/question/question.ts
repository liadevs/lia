import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ChoosePage } from '../choose/choose';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  public next(): void {
    this.navCtrl.push(ChoosePage);
  }

}
