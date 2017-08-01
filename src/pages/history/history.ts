import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QuestionPage } from'../question/question';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  public next(): void {
  	this.navCtrl.push(QuestionPage);
  }

}
